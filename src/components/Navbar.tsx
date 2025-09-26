"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

type MeResponse = { user: null } | { userId: number };

export default function Navbar() {
  const [me, setMe] = useState<MeResponse>({ user: null });

  useEffect(() => {
    async function fetchMe() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/me", {
          credentials: "include",
        });
        const data = await res.json();
        setMe(data);
      } catch {
        setMe({ user: null });
      }
    }
    fetchMe();
  }, []);

  const isLoggedIn = (me as { userId?: number } | { user: null }) && "userId" in me && typeof me.userId === "number";

  async function onLogout() {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setMe({ user: null });
    } catch {}
  }

  return (
    <nav className="w-full border-b">
      <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/" className="font-semibold flex items-center gap-2">
          <Image src="/nonxdev.svg" alt="nonxdev" width={24} height={24} />
          <span className="tracking-tight">nonxdev</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/#post-job"
            className="hidden sm:inline-block bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
          >
            โพสต์งานฟรี
          </Link>
          {!isLoggedIn ? (
            <>
              <Link href="/login" className="hover:underline">Login</Link>
              <Link href="/register" className="hover:underline">สมัครสมาชิก</Link>
            </>
          ) : (
            <>
              <Link href="/#post-job" className="hover:underline">โพสต์งาน</Link>
              <Link href="/profile" className="hover:underline">โปรไฟล์</Link>
              <button onClick={onLogout} className="hover:underline">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


