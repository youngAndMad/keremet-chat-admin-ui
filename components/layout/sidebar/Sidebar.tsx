"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SlHome } from "react-icons/sl";
import { BsInfoSquare, BsEnvelopeAt } from "react-icons/bs";
import { FaRedhat } from "react-icons/fa";
import { TbBrandOauth } from "react-icons/tb";
import keremetChatLogo from "@/public/keremet-chat-logo.svg";

type ISidebarProps = {
  show: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
};

type IMenuItemProps = {
  icon: JSX.Element;
  name: string;
  route: string;
};

export default function Sidebar({ show, setter }: ISidebarProps) {
  const router = useRouter();

  const className =
    "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  const MenuItem = ({ icon, name, route }: IMenuItemProps) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      "router.pathname" === route // todo: replace with router.pathname
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        onClick={() => {
          setter((oldVal: any) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal: any) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex">
          <Link href="/">
            <img
              src={keremetChatLogo.src}
              alt="Company Logo"
              width={300}
              height={300}
            />
          </Link>
        </div>
        <div className="flex flex-col">
          <MenuItem name="Home" route="/" icon={<SlHome />} />
          <MenuItem
            name="Identity providers"
            route="/dashboard/client-registration"
            icon={<TbBrandOauth />}
          />
          <MenuItem name="Hats" route="/hats" icon={<FaRedhat />} />
          <MenuItem name="About Us" route="/about" icon={<BsInfoSquare />} />
          <MenuItem name="Contact" route="/contact" icon={<BsEnvelopeAt />} />
        </div>
      </div>
      {show && <ModalOverlay />}
    </>
  );
}
