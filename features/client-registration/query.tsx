import api from "@/libs/api";
import { delay } from "@/libs/rxjs";
import {
  ClientRegistrationRequest,
  ClientRegistrationResponse,
  ClientRegistrationsResponse,
} from "@/types/auth";
import { useMutation, MutationFunction, useQuery } from "@tanstack/react-query";

export function createClientRegistration() {
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

export function getClientRegistrations() {
  return useQuery<ClientRegistrationsResponse>({
    queryKey: ["get-client-registrations"],
    queryFn: async () => {
      return api.get<ClientRegistrationsResponse>(
        "/api/v1/client-registration"
      );
    },
  });
}

export function getClientRegistrationById(registrationId: string) {
  return useQuery<ClientRegistrationResponse>({
    queryKey: ["get-client-registration-by-id", registrationId],
    queryFn: async () => {
      return api.get<ClientRegistrationResponse>(
        `/api/v1/client-registration/${registrationId}`
      );
    },
  });
}

export function deleteClientRegistrationById(registrationId: string) {
  const mutationFn: MutationFunction<void, string> = async () => {
    return api.delete<void>(`/api/v1/client-registration/${registrationId}`);
  };

  return useMutation<void, unknown, never>({
    mutationFn,
    mutationKey: ["delete-client-registration-by-id", registrationId],
  });
}

export function updateClientRegistration() {
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
