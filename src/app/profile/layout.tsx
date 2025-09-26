import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const sid = cookieStore.get("sid")?.value;
  if (!sid) {
    redirect("/login");
  }

  const apiUrl = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  try {
    const res = await fetch(`${apiUrl}/auth/me`, {
      headers: { Cookie: `sid=${sid}` },
      cache: "no-store",
    });
    if (!res.ok) {
      redirect("/login");
    }
    const data = await res.json();
    if (!data || data.user === null) {
      redirect("/login");
    }
  } catch {
    redirect("/login");
  }

  return <>{children}</>;
}


