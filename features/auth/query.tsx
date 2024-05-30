import api from "@/libs/api";
import { delay } from "@/libs/rxjs";
import User from "@/types/User";
import { useMutation, MutationFunction } from "@tanstack/react-query";

interface LoginVariables {
  email: string;
  password: string;
}

export function useLoginMutation() {
  // imitate a pending state
  const mutationFn: MutationFunction<User, LoginVariables> = async (data) => {
    await delay(5);
    return api.post<User>("/api/v1/auth/login", data);
  };

  return useMutation<User, unknown, LoginVariables>({
    mutationFn,
    mutationKey: ["login"],
  });
}
