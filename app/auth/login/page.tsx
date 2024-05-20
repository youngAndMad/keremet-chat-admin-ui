"use client";
import User, { SecurityRoleType } from "@/types/User";
import { useState } from "react";
import { MdOutlineMailLock } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import "./Login.scss";
import { useMutation } from "@tanstack/react-query";
import api from "@/libs/api";

const allowedRoles = [
  SecurityRoleType.ROLE_APPLICATION_MANAGER,
  SecurityRoleType.ROLE_APPLICATION_ROOT_ADMIN,
];

export default function Page() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const loginUserMutation = useMutation({
    // todo move to separate file
    mutationFn: async (data: { email: string; password: string }) => {
      return api.post<User>("/api/v1/auth/login", data);
    },
    mutationKey: ["login"],
  });

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
    };

    loginUserMutation.mutate(payload); // todo: check roles from response
  };

  return (
    <div className="container">
      <div className="session">
        <div className="left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 302.5"
            enableBackground="new 0 0 300 302.5"
            version="1.1"
            xmlSpace="preserve"
          >
            <style>{`.st01{fill:#fff;}`}</style>
            <path
              className="st01"
              d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z"
            />
          </svg>
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
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
