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
