"use client";
import { useState } from "react";
import Head from "next/head";
import MenuBarMobile from "./MenuBarMobilie";
import Sidebar from "./Sidebar";

type ISidebarLayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

export default function SidebarLayout({
  children,
  pageTitle,
}: ISidebarLayoutProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="min-h-screen">
        <div className="flex">
          <MenuBarMobile setter={setShowSidebar} />
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
