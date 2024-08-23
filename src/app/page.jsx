'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Navbar></Navbar>
      <h1 className="font-bold text-4xl">Home Page</h1>
    </div>
  );
}
