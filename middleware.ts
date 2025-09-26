import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/profile"],
};

export default async function middleware(req: NextRequest) {
  const url = new URL(req.url);

  const sid = req.cookies.get("sid")?.value;
  if (!sid) {
    return NextResponse.redirect(new URL("/login", url));
  }

  const apiUrl = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  try {
    const res = await fetch(`${apiUrl}/auth/me`, {
      headers: {
        Cookie: `sid=${sid}`,
      },
      // Avoid caching auth checks
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.redirect(new URL("/login", url));
    }
    const data = await res.json();
    if (!data || data.user === null) {
      return NextResponse.redirect(new URL("/login", url));
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", url));
  }
}


