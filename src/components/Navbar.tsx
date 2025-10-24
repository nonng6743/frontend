"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/" className="font-semibold flex items-center gap-2">
          <Image src="/nonxdev.svg" alt="nonxdev" width={24} height={24} />
          <span className="tracking-tight">nonxdev</span>
        </Link>
        <div className="flex items-center gap-4">
        </div>
      </div>
    </nav>
  );
}


