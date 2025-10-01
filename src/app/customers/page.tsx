import Link from "next/link";
import Reveal from "@/components/Reveal";
import CustomerNetworkIllustration from "@/components/CustomerNetworkIllustration";

export const metadata = {
  title: "Orbit for Customers — Your Rewards, Truly Yours",
};

export default function CustomersPage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden">
        <div className="grid md:grid-cols-2 items-center gap-10 px-8 py-16 md:px-16 md:py-20">
          <div className="space-y-5">
            <Reveal>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Your Rewards, Truly Yours</h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-black/70 dark:text-white/70 text-lg">
                Earn tokens everywhere. Redeem anywhere. Trade freely. One wallet for all your favorite brands.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join?tab=customers" className="btn btn-primary h-11">Join Waitlist</Link>
                <a href="#how" className="btn btn-outline h-11">See How It Works</a>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={60}>
              <div className="relative aspect-square rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden bg-[#0b0f19]">
                <CustomerNetworkIllustration className="absolute inset-0 w-full h-full" />
                <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_70%_at_50%_35%,_black,_transparent)]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Earn", text: "Shop at any Orbit merchant and receive loyalty tokens instantly" },
            { title: "Redeem", text: "Use tokens at any brand in the network" },
            { title: "Trade", text: "Swap tokens on the marketplace or collect NFTs" },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card rounded-2xl p-6 card-dark">
                <div className="text-sm text-black/60 dark:text-white/60 mb-2">Step {i + 1}</div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Benefits</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Liquid Rewards", text: "Trade or redeem — you choose." },
            { title: "Cross-Brand Redemption", text: "One wallet, infinite options." },
            { title: "Exclusive NFT Perks", text: "Event access, merchandise, VIP status." },
            { title: "Gamified Experience", text: "Quests, leaderboards, streaks." },
            { title: "True Ownership", text: "Your tokens, your wallet." },
            { title: "Discover New Brands", text: "Curated and rewarding." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <div className="card card-hover rounded-2xl p-6 card-dark">
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scenarios */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Use Case Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03]">
            <h3 className="font-semibold mb-2">Morning Coffee to Afternoon Shopping</h3>
            <ul className="list-disc list-inside text-sm text-black/70 dark:text-white/70 space-y-1">
              <li>Earn 10 CoffeeCoin at your local café</li>
              <li>Swap 10 CoffeeCoin for 50 FashionTokens</li>
              <li>Redeem at your favorite clothing store</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03]">
            <h3 className="font-semibold mb-2">Unlock Exclusive Experiences</h3>
            <ul className="list-disc list-inside text-sm text-black/70 dark:text-white/70 space-y-1">
              <li>Reach 100 points across multiple merchants</li>
              <li>Receive a limited-edition BrandNFT</li>
              <li>Get VIP access to brand events and launches</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Early Adopters</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Finally, loyalty rewards that actually feel valuable.", "I love discovering new brands through Orbit's network."].map((q) => (
            <blockquote key={q} className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03] text-sm text-black/70 dark:text-white/70">
              “{q}”
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-black/5 dark:border-white/10 p-8 bg-gradient-to-br from-[--color-surface] to-white/70 dark:from-white/[0.04] dark:to-white/[0.02] text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Be Among the First 1,000 Users</h3>
        <p className="text-sm text-black/70 dark:text-white/70 mb-4">Join the waitlist now for exclusive early access bonuses</p>
        <Link href="/join?tab=customers" className="btn btn-primary h-11">Join Waitlist</Link>
      </section>
    </div>
  );
}


