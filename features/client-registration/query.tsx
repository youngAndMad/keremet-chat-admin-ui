import api from "@/libs/api";
import {
  ClientRegistrationRequest,
  ClientRegistrationResponse,
  ClientRegistrationsResponse,
} from "@/types/auth";
import { useMutation, MutationFunction } from "@tanstack/react-query";

export function useCreateClientRegistration() {
  const mutationFn: MutationFunction<
    ClientRegistrationResponse,
    ClientRegistrationRequest
  > = async (data) => {
    return api.post<ClientRegistrationResponse>(
      "/api/v1/client-registration",
      data
    );
  };

  return useMutation<
    ClientRegistrationResponse,
    unknown,
    ClientRegistrationRequest
  >({
    mutationFn,
    mutationKey: ["create-client-registration"],
  });
}

export function useGetClientRegistrations() {
  const mutationFn: MutationFunction<
    ClientRegistrationsResponse,
    void
  > = async () => {
    return api.get<ClientRegistrationsResponse>("/api/v1/client-registration");
  };

  return useMutation<ClientRegistrationsResponse, unknown, void>({
    mutationFn,
    mutationKey: ["get-client-registrations"],
  });
}

export function useGetClientRegistrationById(registrationId: string) {
  const mutationFn: MutationFunction<
    ClientRegistrationResponse,
    string
  > = async () => {
    return api.get<ClientRegistrationResponse>(
      `/api/v1/client-registration/${registrationId}`
    );
  };

  return useMutation<ClientRegistrationResponse, unknown, string>({
    mutationFn,
    mutationKey: ["get-client-registration-by-id", registrationId],
  });
}

export function useDeleteClientRegistrationById(registrationId: string) {
  const mutationFn: MutationFunction<void, string> = async () => {
    return api.delete<void>(`/api/v1/client-registration/${registrationId}`);
  };

  return useMutation<void, unknown, string>({
    mutationFn,
    mutationKey: ["delete-client-registration-by-id", registrationId],
  });
}

export function useUpdateClientRegistrationMutation() {
  const mutationFn: MutationFunction<
    unknown,
    ClientRegistrationRequest
  > = async (data) => {
    return api.put<ClientRegistrationResponse>(
      `/api/v1/client-registration/${data.registrationId}`,
      data
    );
  };

  return useMutation<unknown, unknown, ClientRegistrationRequest>({
    mutationFn,
    mutationKey: ["update-client-registration"],
  });
}
