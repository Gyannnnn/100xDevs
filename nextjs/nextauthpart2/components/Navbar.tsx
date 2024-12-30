import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import LOgout from "./LOgout";
import Image from "next/image";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="w-full flex justify-between items-center border-b-2 border-gray-500 py-2 px-4">
      <div>
        <Link className="font-bold" href={"/"}>
          Home
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/middleware"}>middleware</Link>
        <Link href={"/server"}>server</Link>
      </div>
      <div className="flex items-center">
        {session?.user ? (
          <>
            <div className="flex items-center gap-2">
              <span>{session.user.name}</span>
              {session.user.image && (
                <Image
                  height={30}
                  width={30}
                  src={session.user.image}
                  alt="User Avatar"
                  className="rounded-full"
                />
              )}
              <LOgout />
            </div>
          </>
        ) : (
          <Link href="/sign-in">
            <div className="px-2 py-2 bg-blue-500 text-white text-sm rounded-md">
              Sign in
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
