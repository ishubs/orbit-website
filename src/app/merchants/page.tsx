import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import HeroNetworkIllustration from "@/components/HeroNetworkIllustration";

export const metadata = {
  title: "Orbit for Merchants — Plug-and-Play Loyalty Infrastructure",
};

export default function MerchantsPage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10">
        <div className="grid md:grid-cols-2 gap-10 items-center px-8 py-16 md:px-16 md:py-20">
          <div className="space-y-5">
            <Reveal>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Plug-and-Play Loyalty Infrastructure</h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-black/70 dark:text-white/70 text-lg">
                Launch your tokenized rewards program in hours, not months. No blockchain expertise required.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join?tab=merchants" className="btn btn-primary h-11">Schedule Demo</Link>
                <a href="#pricing" className="btn btn-outline h-11">View Pricing</a>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={60}>
              <div className="relative aspect-[16/10] rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden bg-gradient-to-br from-[--color-surface] to-white/60 dark:from-white/5 dark:to-white/0">
                <HeroNetworkIllustration className="absolute inset-0 w-full h-full" />
                <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_40%,_black,_transparent)]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">The Challenge</h2>
          <ul className="grid gap-3">
            {[
              "Building loyalty infra is expensive and time-consuming",
              "Limited insights into customer behavior",
              "Siloed programs fail to engage modern consumers",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 60}>
                <li className="card rounded-xl p-4 card-dark">{t}</li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">The Orbit Solution</h2>
          <p className="text-black/70 dark:text-white/70">
            Fast setup, rich analytics, and network effects from day one. Create tokens, run campaigns, and tap into a shared customer base across the Orbit ecosystem.
          </p>
          <Reveal delay={60}>
            <Link href="/join?tab=merchants" className="inline-flex items-center gap-2 text-[--color-primary] font-medium">Talk to our team →</Link>
          </Reveal>
        </div>
      </section>

      {/* Features for Merchants */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Merchant Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Launch Your Own Token",
              text: "Create branded HTS tokens as your reward currency. Fully customizable: fungible, non-fungible, or hybrid.",
            },
            {
              title: "Zero Technical Overhead",
              text: "We handle the blockchain complexity. Simple dashboard for token issuance, campaigns, and redemptions.",
            },
            {
              title: "Advanced Analytics",
              text: "Track retention, spending patterns, and campaign ROI. Get predictive insights to optimize strategy.",
            },
            {
              title: "Gamification Tools",
              text: "Built-in quests, multipliers, and seasonal campaigns with leaderboards and streaks.",
            },
            {
              title: "Network Effect Benefits",
              text: "Access customers from other merchants in Orbit. Cross-promote and share audiences.",
            },
            {
              title: "Low-Cost, Scalable",
              text: "Hedera micro-fees keep costs low at any scale. Process millions of transactions affordably.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="card card-hover rounded-2xl p-6 card-dark">
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Starter", text: "For small businesses, basic features" },
            { title: "Growth", text: "Mid-sized brands, advanced analytics" },
            { title: "Enterprise", text: "Custom solutions, dedicated support" },
          ].map((p) => (
            <div key={p.title} className="card rounded-2xl p-6 card-dark">
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mb-4">{p.text}</p>
              <p className="text-sm text-black/60 dark:text-white/60">Contact for details</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Proven Results</h2>
        <ul className="grid gap-3">
          <li className="rounded-xl border border-black/5 dark:border-white/10 p-4 bg-white/60 dark:bg-white/[0.03]">Previously built loyalty infra used by multiple retail and F&B outlets</li>
          <li className="rounded-xl border border-black/5 dark:border-white/10 p-4 bg-white/60 dark:bg-white/[0.03]">Helped Café Coffee Day grow loyalty adoption to 50K+ users</li>
          <li className="rounded-xl border border-black/5 dark:border-white/10 p-4 bg-white/60 dark:bg-white/[0.03]">70% of consumers frustrated with fragmented programs — we solve this</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-black/5 dark:border-white/10 p-8 bg-gradient-to-br from-[--color-surface] to-white/70 dark:from-white/[0.04] dark:to-white/[0.02] text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Join 4 Brands Already Committed to Orbit</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/join?tab=merchants" className="btn btn-primary h-11">Schedule Demo</Link>
          <Link href="/join?tab=merchants" className="btn btn-outline h-11">Join Merchant Waitlist</Link>
        </div>
      </section>
    </div>
  );
}


