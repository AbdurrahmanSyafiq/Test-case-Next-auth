"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const { data: session } = useSession();
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-20 h-[70px] shadow-xl bg-white">
      <div className="flex justify-end items-center h-full w-full px-4 lg:px-20">
        <div className="hidden sm:flex sm:items-center">
          <ul className="hidden sm:flex font-bold gap-x-8">
            <Link
              href={"/user"}
              className="flex hover:text-rose-700 transition ease-in-out duration-200">
              <li className="ml-2 text-base hover:border-b">User</li>
            </Link>
            <Link
              href={"/dashboard"}
              className="flex  hover:text-rose-700 transition ease-in-out duration-200">
              <li className="ml-2 text-base hover:border-b">Dashboard</li>
            </Link>
          </ul>
          {session ? (
            <div className="flex items-center justify-center">
              <p className="mx-5 text-blue-300">{session.user.name}</p>
              <li
                onClick={() => signOut()}
                className="cursor-pointer text-base text-red-500">
                Sign Out
              </li>
            </div>
          ) : (
            <li
              onClick={() => signIn()}
              className="ml-2 cursor-pointer text-base text-red-500 hover:border-b">
              Sign In
            </li>
          )}
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 z-20 w-[65%] sm:hidden h-[200px] bg-white p-10 transition ease-in-out duration-300 rounded-sm shadow-lg"
            : "fixed left-[-100%] z-20 top-0 p-10 ease-in duration-300"
        }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="font-bold">
            <Link
              href={"/user"}
              className="mb-4 flex hover:bg-zinc-300 hover:rounded-md py-3 px-2 transition ease-in-out duration-200">
              <li className="ml-10 text-base hover:border-b">User</li>
            </Link>
            <Link
              href={"/dashboard"}
              className="flex hover:bg-zinc-300 hover:rounded-md py-3 px-2 transition ease-in-out duration-200">
              <li className="ml-10 text-base hover:border-b">Dashboard</li>
            </Link>
            {session ? (
              <div>
                <p>{session.user.name}</p>
                <li
                  onClick={() => signOut()}
                  className="mt-4 cursor-pointer text-base text-red-500 hover:bg-zinc-300 hover:rounded-md py-3 px-2">
                  Sign Out
                </li>
              </div>
            ) : (
              <li
                onClick={() => signIn()}
                className="mt-4 cursor-pointer text-base text-red-500 hover:bg-zinc-300 hover:rounded-md py-3 px-2">
                Sign In
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
