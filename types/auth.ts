export enum AuthType {
  MANUAL = "MANUAL",
  GITHUB = "GITHUB",
  GOOGLE = "GOOGLE",
  OKTA = "OKTA",
  FACEBOOK = "FACEBOOK",
}

export enum SecurityRoleType {
  ROLE_APPLICATION_ROOT_ADMIN = "ROLE_APPLICATION_ROOT_ADMIN",
  ROLE_APPLICATION_MANAGER = "ROLE_APPLICATION_MANAGER",
  ROLE_USER = "ROLE_USER",
}

export type LoginData = {
  email: string;
  password: string;
};

export type ClientRegistrationBase = {
  provider: AuthType;
  registrationId: string;
};

export type ClientRegistrationRequest = ClientRegistrationBase & {
  cliendId: string;
  clientSecret: string;
};

export type ClientRegistrationResponse = ClientRegistrationRequest & {
  redirectUri: string;
  clientName: string;
  providerDetails: {
    issuerUri: string;
  };
};

export type ClientRegistrationsResponse = {
  [K in AuthType]: ClientRegistrationResponse[];
};
