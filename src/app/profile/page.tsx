"use client";
import { useEffect, useState } from "react";

type Me = { userId: number } | null;

function isMeResponse(value: unknown): value is { userId: number } {
  if (typeof value !== "object" || value === null) return false;
  const obj = value as Record<string, unknown>;
  return typeof obj.userId === "number";
}

export default function ProfilePage() {
  const [me, setMe] = useState<Me>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/me", {
          credentials: "include",
        });
        const data = (await res.json()) as unknown;
        setMe(isMeResponse(data) ? { userId: data.userId } : null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <div className="max-w-5xl mx-auto p-4">Loading...</div>;

  if (!me || !me.userId) {
    return <div className="max-w-5xl mx-auto p-4">Please login first.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-2">โปรไฟล์</h1>
      <div>userId: {me.userId}</div>
    </div>
  );
}


