"use client";
import React from "react";
import { SecurityRoleType } from "@/types/User";
import { useState } from "react";
import { MdOutlineMailLock } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import "./Login.scss";
import { Spinner } from "@nextui-org/spinner";
import CommonBackground from "@/public/common-background.svg";
import { useLoginMutation } from "@/features/auth/query";

const allowedRoles = [
  SecurityRoleType.ROLE_APPLICATION_MANAGER,
  SecurityRoleType.ROLE_APPLICATION_ROOT_ADMIN,
];

export default function Page() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const loginUserMutation = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = {
      email: email!,
      password: password!,
    } as const;

    loginUserMutation.mutate(payload); // todo: check roles from response
  };

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
          <form className="log-in" onSubmit={(e) => handleSubmit(e)}>
            <h4>
              We are <span>Keremet Chat</span>
            </h4>
            <p>Welcome back! Check server adminstration for credentials</p>
            <div className="floating-label">
              <input
                placeholder="Email"
                type="email"
                id="email"
                required
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email">Email:</label>
              <div className="icon">
                <MdOutlineMailLock />
              </div>
            </div>
            <div className="floating-label">
              <input
                placeholder="Password"
                type="password"
                required
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="off"
              />
              <label htmlFor="password">Password:</label>
              <div className="icon">
                <FaLock />
              </div>
            </div>
            <button type="submit">Log in</button>
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
