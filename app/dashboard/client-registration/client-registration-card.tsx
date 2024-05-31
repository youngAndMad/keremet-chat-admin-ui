import { ClientRegistrationResponse } from "@/types/auth";

export function ClientRegistrationCard({
  registration,
}: {
  registration: ClientRegistrationResponse;
}) {
  return (
    <div>
      <h3>{registration.clientName}</h3>
      <p>{registration.provider}</p>
      <p>{registration.providerDetails.issuerUri}</p>
      <p>{registration.redirectUri}</p>
    </div>
  );
}
