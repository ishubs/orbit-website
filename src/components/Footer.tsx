import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 rounded-full bg-[--color-accent] shadow-inner" aria-hidden />
            <span className="text-lg font-semibold text-[--color-primary]">Orbit</span>
          </div>
          <p className="text-sm text-black/60 dark:text-white/60">
            Multi-merchant blockchain loyalty network. Earn anywhere, redeem everywhere.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/merchants" className="hover:text-[--color-primary]">For Merchants</Link></li>
            <li><Link href="/customers" className="hover:text-[--color-primary]">For Customers</Link></li>
            <li><Link href="/technology" className="hover:text-[--color-primary]">Technology</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[--color-primary]">Blog</a></li>
            <li><a href="#" className="hover:text-[--color-primary]">Docs</a></li>
            <li><a href="#" className="hover:text-[--color-primary]">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:contact@orbit.loyalty" className="hover:text-[--color-primary]">contact@orbit.loyalty</a></li>
            <li><a href="#" className="hover:text-[--color-primary]">LinkedIn</a></li>
            <li><a href="#" className="hover:text-[--color-primary]">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/60 dark:text-white/60">
          <p>© 2025 Orbit. Built on Hedera.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[--color-primary]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[--color-primary]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


