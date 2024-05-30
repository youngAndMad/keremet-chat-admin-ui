"use client";

import { NextUIProvider } from "@nextui-org/react";
import ClientProvider from "./ClientProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ClientProvider>{children}</ClientProvider>
    </NextUIProvider>
  );
}
