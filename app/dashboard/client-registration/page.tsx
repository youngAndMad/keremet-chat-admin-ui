"use client";

import ApiError from "@/components/ui/ApiError";
import { getClientRegistrations } from "@/features/client-registration/query";
import { Spinner } from "@nextui-org/react";

export default function Page() {
  const clientRegistrations = getClientRegistrations();

  return (
    <>
      {clientRegistrations.isPending ? (
        <Spinner />
      ) : clientRegistrations.isError ? (
        <ApiError message={clientRegistrations.error.message} />
      ) : (
        <h1>Hello, Dashboard Client registrations Page!</h1>
      )}
    </>
  );
}
