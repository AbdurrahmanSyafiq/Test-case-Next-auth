'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
export default function User() {
  const { data: session } = useSession();

  if (!session) {
    console.log(session);
    return <p>Access Denied</p>;
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Navbar></Navbar>
      <h1 className="font-bold text-4xl">User Page</h1>
    </div>
  );
}