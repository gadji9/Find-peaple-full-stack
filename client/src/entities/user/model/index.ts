import { apiClient } from "@app/api/axios-instance";
import { IUser } from "@shared/types/global";

let controller = new AbortController();
let signal = controller.signal;

export const findUsers = async (user: IUser) => {
  controller.abort();
  controller = new AbortController();
  signal = controller.signal;

  const result = await apiClient.post<IUser[]>(
    "/users",
    {
      email: user.email,
      number: user.number,
    },
    { signal }
  );

  return result.data;
};
