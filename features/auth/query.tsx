import api from "@/libs/api";
import { delay } from "@/libs/rxjs";
import { LoginData } from "@/types/auth";
import User from "@/types/user";
import { useMutation, MutationFunction } from "@tanstack/react-query";

export function login() {
  const mutationFn: MutationFunction<User, LoginData> = async (data) => {
    await delay(5);
    return api.post<User>("/api/v1/auth/login", data);
  };

  return useMutation<User, unknown, LoginData>({
    mutationFn,
    mutationKey: ["login"],
  });
}
