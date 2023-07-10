import { useAppSelector } from "@app/store";
import { Loader } from "@features/loader/ui";
import { MatchedUser } from "@features/matched-user/ui";
import { UserSearchForm } from "@features/user-search-form/ui";

export const UserSearch = () => {
  const isLoading = useAppSelector((state) => state.loader.isLoading);

  return (
    <>
      <UserSearchForm />
      <br />
      {isLoading ? <Loader /> : <MatchedUser />}
    </>
  );
};
