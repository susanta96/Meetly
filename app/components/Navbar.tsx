import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { AuthModal } from "./AuthModel";

export const Navbar = () => {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href={"/"} className="flex gap-2 items-center">
        <Image src={Logo} alt="logo" className="size-10" />
        <h4 className="text-3xl font-semibold">
          Meet<span className="text-[#365bec]">ly</span>
        </h4>
      </Link>
      <AuthModal />
    </div>
  );
};
