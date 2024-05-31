"use client";

import ApiError from "@/components/ui/ApiError";
import { getClientRegistrations } from "@/features/client-registration/query";
import { Spinner } from "@nextui-org/react";

export default function Page() {
  const clientRegistrations = getClientRegistrations();

  return (
    <>
      {clientRegistrations.isPending ? (
        <div className="centered-spinner">
          <Spinner className="large-spinner" size="lg" label="Loading..." />
        </div>
      ) : clientRegistrations.isError ? (
        <ApiError message={clientRegistrations.error.message} />
      ) : (
        <>
          <h1>Hello, Dashboard Client registrations Page!</h1>
          <div>
            {Object.entries(clientRegistrations.data).map(
              ([authType, registrations]) => (
                <div key={authType}>
                  <h3>{authType}</h3>
                  <ul>
                    {registrations.map((registration, index) => (
                      <li key={index}>{registration.clientName}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </>
      )}
    </>
  );
}
