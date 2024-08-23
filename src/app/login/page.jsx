// app/login/page.js
"use client";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
});
const outfit_light = Outfit({
  subsets: ["latin"],
  weight: ["200"],
});
const inter = Inter({ subsets: ["latin"] });
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (!res.error) {
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={`w-full min-h-screen flex justify-center items-center ${outfit.className}`}>
      <div className=" p-4 md:p-12 bg-slate-200 shadow-lg rounded-xl">
        <h1 className="md:text-4xl text-3xl font-semibold text-[#012970] mb-8">Login Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-base " htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            className="rounded-sm bg-white w-64 md:w-96 py-0.5 px-2 outline-1 outline-blue-500 focus:outline-blue-500 focus:outline-2"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label className="text-base" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            className="rounded-sm bg-white w-64 md:w-96 py-0.5 px-2 outline-1 outline-blue-500 focus:outline-blue-500 focus:outline-2 "
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="rounded-sm bg-blue-500 text-white p-2 hover:outline-1 hover:outline-white w-24 md:w-36" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}