import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { FiMenu as Icon } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

import keremetChatLogo from "@/public/keremet-chat-logo.svg";

type IMenuBarMobileProps = {
  setter: Dispatch<SetStateAction<boolean>>;
};

export default function MenuBarMobile({ setter }: IMenuBarMobileProps) {
  return (
    <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-black flex [&>*]:my-auto px-2">
      <button
        className="text-4xl flex text-white"
        onClick={() => {
          setter((oldVal: any) => !oldVal);
        }}
      >
        <Icon />
      </button>
      <Link href="/" className="mx-auto">
        <img
          src={keremetChatLogo.src}
          alt="Company Logo"
          width={50}
          height={50}
        />
      </Link>
      <Link className="text-3xl flex text-white" href="/login">
        <FaUser />
      </Link>
    </nav>
  );
}
