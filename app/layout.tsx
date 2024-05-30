import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/ProvidersWrapper";

export const metadata: Metadata = {
  title: "Keremet chat console",
  description: "Keremet chat adminstration console",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
