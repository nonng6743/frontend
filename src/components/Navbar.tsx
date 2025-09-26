"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      } catch (_) {
        setMe({ user: null });
      }
    }
    fetchMe();
  }, []);

  const isLoggedIn = (me as any).userId != null;

  async function onLogout() {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setMe({ user: null });
    } catch (_) {}
  }

  return (
    <nav className="w-full border-b">
      <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/" className="font-semibold">MyApp</Link>
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link href="/login" className="hover:underline">Login</Link>
              <Link href="/register" className="hover:underline">สมัครสมาชิก</Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="hover:underline">โปรไฟล์</Link>
              <button onClick={onLogout} className="hover:underline">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


