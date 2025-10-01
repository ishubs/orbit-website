"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 rounded-full bg-[--color-accent] shadow-inner ring-1 ring-black/10 dark:ring-white/15" aria-hidden />
          <span className="text-lg font-semibold tracking-tight text-[--color-fg]">Orbit</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[--color-fg]">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/" active={pathname === "/"}>Home</NavLink>
          <NavLink href="/merchants" active={pathname.startsWith("/merchants")}>For Merchants</NavLink>
          <NavLink href="/customers" active={pathname.startsWith("/customers")}>For Customers</NavLink>
          <NavLink href="/technology" active={pathname.startsWith("/technology")}>Technology</NavLink>
          <Link
            href="/join"
            className={`btn ${pathname.startsWith("/join") ? "btn-primary" : "btn-accent"} h-10 px-5`}
            aria-current={pathname.startsWith("/join") ? "page" : undefined}
          >
            Join Waitlist
          </Link>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-2">
            <MobileItem href="/" label="Home" active={pathname === "/"} />
            <MobileItem href="/merchants" label="For Merchants" active={pathname.startsWith("/merchants")} />
            <MobileItem href="/customers" label="For Customers" active={pathname.startsWith("/customers")} />
            <MobileItem href="/technology" label="Technology" active={pathname.startsWith("/technology")} />
            <Link
              href="/join"
              className={`btn ${pathname.startsWith("/join") ? "btn-primary" : "btn-accent"} h-10 w-full`}
              aria-current={pathname.startsWith("/join") ? "page" : undefined}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center h-9 px-3 rounded-md transition-colors hover:text-[--color-primary] ${active ? "text-[--color-primary] bg-black/5 dark:bg-white/10" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {children}
      <span className={`absolute -bottom-1 left-3 right-3 h-0.5 bg-[--color-primary] transition-all ${active ? "opacity-100" : "opacity-0"}`} />
    </Link>
  );
}

function MobileItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`px-2 py-2 rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/5 ${active ? "text-[--color-primary] bg-black/5 dark:bg-white/5" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}


