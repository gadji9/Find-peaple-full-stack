import { useForm } from "react-hook-form";

import { useAppDispatch } from "@app/store";

import { setUserReducer } from "@widgets/user-search/model";

import { setIsLoadingReducer } from "@features/loader/model";

import { findUsers } from "@entities/user/model";

import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";

import "./index.css";
import { emailPattern } from "@shared/regexp";

interface IUserSearchForm {
  email: string;
  number: string;
}

export const UserSearchForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserSearchForm>({
    mode: "onBlur",
  });

  const emailSettings = {
    ...register("email", {
      required: "Обязательное поле",
      pattern: {
        value: emailPattern,
        message: "Некоректный email",
      },
    }),
  };

  const numberSettings = {
    ...register("number"),
  };

  const dispatch = useAppDispatch();

  const onSubmit = async ({ email, number }: IUserSearchForm) => {
    const pureNumber = number.replace(/\D/g, "");

    dispatch(setIsLoadingReducer(true));

    const users = await findUsers({ email, number: pureNumber });

    dispatch(setIsLoadingReducer(false));
    dispatch(setUserReducer(users));
  };

  return (
    <>
      <div className="user-search-wrapper">
        <div className="user-search-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              register={emailSettings}
              label="Email"
              error={errors.email?.message}
            />
            <Input
              register={numberSettings}
              type="tel"
              label="Number"
              error={errors.number?.message}
            />
            <Button type="submit">Поиск</Button>
          </form>
        </div>
      </div>
    </>
  );
};
