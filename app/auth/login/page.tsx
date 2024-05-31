"use client";
import React from "react";
import { LoginData, SecurityRoleType } from "@/types/auth";
import { MdOutlineMailLock } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import "./Login.scss";
import { Spinner } from "@nextui-org/spinner";
import CommonBackground from "@/public/common-background.svg";
import { login } from "@/features/auth/query";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

const allowedRoles = [
  SecurityRoleType.ROLE_APPLICATION_MANAGER,
  SecurityRoleType.ROLE_APPLICATION_ROOT_ADMIN,
];

export default function Page() {
  const loginForm = useForm<LoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value: loginData }) => {
      console.log("form submitted", loginData);
      loginUserMutation.mutate(loginData);
    },
    validatorAdapter: zodValidator,
  });

  const loginUserMutation = login();

  return (
    <div className="container">
      {loginUserMutation.isPending ? (
        <Spinner size="lg" color="warning" label="Sending request to server" />
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
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              loginForm.handleSubmit();
            }}
          >
            <h4>
              We are <span>Keremet Chat</span>
            </h4>
            <p>Welcome back! Check server adminstration for credentials</p>
            <div className="floating-label">
              <loginForm.Field
                name="email"
                validators={{
                  onChange: z.string().email("Invalid email address"),
                  onChangeAsyncDebounceMs: 500,
                }}
                children={(field) => (
                  <>
                    <input
                      placeholder="Email"
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="email">Email:</label>
                    {field.state.meta?.touchedErrors && (
                      <div className="error">
                        {field.state.meta?.touchedErrors}
                      </div>
                    )}
                  </>
                )}
              ></loginForm.Field>

              <div className="icon">
                <MdOutlineMailLock />
              </div>
            </div>
            <div className="floating-label">
              <loginForm.Field
                name="password"
                validators={{
                  onChange: z.string({ message: "Password is required" }),
                  onChangeAsyncDebounceMs: 500,
                }}
                children={(field) => (
                  <>
                    <input
                      placeholder="Password"
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      required
                      autoComplete="off"
                    />
                    <label htmlFor={field.name}>Password:</label>
                    {field.state.meta?.touchedErrors && (
                      <div className="error">
                        {field.state.meta?.touchedErrors}
                      </div>
                    )}
                  </>
                )}
              ></loginForm.Field>
              <div className="icon">
                <FaLock />
              </div>
            </div>
            <loginForm.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit]) => (
                <>
                  <button type="submit" disabled={!canSubmit}>
                    Login
                  </button>
                </>
              )}
            />
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
