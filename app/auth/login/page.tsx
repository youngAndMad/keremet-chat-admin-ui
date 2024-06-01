"use client";
import React from "react";
import { LoginData, SecurityRoleType } from "@/types/auth";
import { MdOutlineMailLock } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import "./Login.scss";
import { Spinner } from "@nextui-org/spinner";
import CommonBackground from "@/public/common-background.svg";
import { login } from "@/features/auth/query";
import { useForm } from "react-hook-form";
import ApiError from "@/components/ui/ApiError";

const allowedRoles = [
  SecurityRoleType.ROLE_APPLICATION_MANAGER,
  SecurityRoleType.ROLE_APPLICATION_ROOT_ADMIN,
];

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const loginUserMutation = login();

  const handleLoginFormSubmit = async (data: LoginData) => {
    // todo implement login
    console.log("login data", data);

    await loginUserMutation.mutateAsync(data, {});
  };

  return (
    <div className="container">
      {loginUserMutation.isPending ? (
        <div className="centered-spinner">
          <Spinner className="large-spinner" size="lg" label="Loading..." />
        </div>
      ) : loginUserMutation.isError ? (
        <ApiError
          message={JSON.stringify(loginUserMutation.error)}
          beforeGoBack={loginUserMutation.reset}
        />
      ) : (
        <div className="session">
          <div className="left">
            <img
              src={CommonBackground.src}
              alt={"Keremet Chat"}
              width="64"
              height="64"
            />
          </div>
          <form
            className="log-in"
            onSubmit={handleSubmit(handleLoginFormSubmit)}
          >
            <h4>
              We are <span>Keremet Chat</span>
            </h4>
            <p>Welcome back! Check server adminstration for credentials</p>
            <div className="floating-label">
              <input
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                id="email"
                name="email"
                autoComplete="off"
              />
              <label htmlFor="email">Email:</label>
              {errors.email && (
                <div className="error">{errors.email.message}</div>
              )}
              <div className="icon">
                <MdOutlineMailLock />
              </div>
            </div>
            <div className="floating-label">
              <input
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="off"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <label htmlFor="password">Password:</label>
              {errors.password && (
                <div className="error">{errors.password.message}</div>
              )}
              <div className="icon">
                <FaLock />
              </div>
            </div>
            <button type="submit">Login</button>
            <div className="links">
              <div className="link-wrapper">
                <a
                  className="link"
                  href="https://github.com/youngAndMad/keremet-chat?tab=readme-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn about Keremet chat
                </a>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
