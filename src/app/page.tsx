import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParallaxHero from "@/components/ParallaxHero";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <ParallaxHero>
        <div className="px-8 py-20 md:px-16 md:py-28 grid md:grid-cols-2 items-center gap-12 hero-gradient">
          <div className="space-y-6">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                One Loyalty Network. <span className="text-[--color-primary]">Infinite Possibilities.</span>
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-black/70 dark:text-white/70 max-w-xl">
                Transform fragmented reward points into liquid, tradeable tokens. Earn anywhere, redeem everywhere.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/merchants" className="btn btn-primary h-12">Join as Merchant</Link>
                <Link href="/join" className="btn btn-outline h-12">Join Waitlist</Link>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-sm text-black/60 dark:text-white/60">Built on Hedera • 4 Brands Committed • 50K+ Users Onboarded</p>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal delay={60}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[--color-surface] to-white/60 dark:from-white/5 dark:to-white/0 border border-black/5 dark:border-white/10 p-6">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {["network","token","swap","trophy","chart","game","food","retail","entertainment"].map((n, i) => (
                    <div key={i} className="rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center">
                      <Icon name={n as IconName} className="h-6 w-6 text-[--color-primary]" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </ParallaxHero>

      {/* Features */}
      <section className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Powerful Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Interoperable Rewards", text: "Earn at one merchant, redeem at another. Your rewards flow across the entire network." },
            { title: "Programmable Loyalty Tokens", text: "Set custom rules, expiry dates, multipliers, and tier-based rewards with flexible HTS tokens." },
            { title: "Secondary Marketplace", text: "Trade loyalty tokens with other users or swap between brands. True liquidity for your rewards." },
            { title: "NFT Brand Experiences", text: "Unlock exclusive event tickets, merchandise, and membership passes as collectible NFTs." },
            { title: "Merchant Analytics", text: "Real-time insights on customer behavior, retention, and campaign performance." },
            { title: "Gamification Layer", text: "Missions, streaks, leaderboards, and multi-brand challenges that keep customers engaged." },
          ].map((f, idx) => (
            <Reveal key={f.title} delay={idx * 60}>
              <div className="card card-hover rounded-2xl p-6 card-dark">
                <div className="h-10 w-10 rounded-full bg-[--color-accent]/30 flex items-center justify-center mb-4">
                  <Icon name={["network","token","swap","trophy","chart","game"][idx] as IconName} className="h-5 w-5 text-[--color-primary]" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Built for Every Industry</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Food & Beverage", text: "Earn at your coffee shop, redeem at restaurants", icon: "food" },
            { title: "Retail & Fashion", text: "Convert shopping points into exclusive merchandise", icon: "retail" },
            { title: "Entertainment", text: "Trade event tickets and unlock VIP experiences", icon: "entertainment" },
            { title: "Wellness & Fitness", text: "Unified rewards across gyms, spas, and health stores", icon: "wellness" },
            { title: "Travel & Hospitality", text: "Seamless loyalty across hotels, airlines, and local experiences", icon: "travel" },
          ].map((c, idx) => (
            <Reveal key={c.title} delay={idx * 60}>
              <div className="card card-hover rounded-2xl p-6 card-dark">
                <div className="h-10 w-10 rounded-full bg-[--color-accent]/30 flex items-center justify-center mb-4">
                  <Icon name={c.icon as IconName} className="h-5 w-5 text-[--color-primary]" />
                </div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">A High-Value Ecosystem of Merchants and Customers</h2>
        <p className="text-black/70 dark:text-white/70 max-w-3xl">
          Every new merchant brings their customers. Every customer discovers new brands. The network effect creates compounding value for everyone.
        </p>
            <div className="card rounded-2xl p-8 card-dark">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              "4 Brands Committed",
              "Target: 20+ Merchants in Year 1",
              "50K+ Customers Expected",
              "Millions of Micro-Transactions",
            ].map((s) => (
              <div key={s} className="space-y-2">
                <div className="text-2xl font-semibold text-[--color-primary]">{s.split(" ")[0]}</div>
                <div className="text-xs text-black/60 dark:text-white/60">{s.replace(s.split(" ")[0] + " ", "")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Powered by Hedera</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Low-Cost Transactions", text: "Ideal for micro-loyalty payments", icon: "cost" },
            { title: "High Throughput", text: "Process millions of small transactions", icon: "speed" },
            { title: "Tamper-Proof", text: "Enterprise-grade security and transparency", icon: "shield" },
          ].map((p, idx) => (
            <Reveal key={p.title} delay={idx * 60}>
              <div className="card card-hover rounded-2xl p-6 card-dark">
                <div className="h-10 w-10 rounded-full bg-[--color-accent]/30 flex items-center justify-center mb-4">
                  <Icon name={p.icon as IconName} className="h-5 w-5 text-[--color-primary]" />
                </div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link href="/technology" className="inline-flex items-center gap-2 text-[--color-primary] font-medium">
          Learn More About Our Technology →
        </Link>
      </section>

      {/* Final CTA */}
      <section className="rounded-3xl border border-black/5 dark:border-white/10 p-8 md:p-12 bg-gradient-to-br from-[--color-surface] to-white/70 dark:from-white/[0.04] dark:to-white/[0.02]">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Ready to Transform Your Loyalty Program?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card rounded-2xl p-6 card-dark">
            <h3 className="font-semibold mb-2">For Merchants</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">Launch your tokenized loyalty program in days, not months.</p>
            <Link href="/merchants" className="btn btn-primary h-11">Get Started</Link>
          </div>
          <div className="card rounded-2xl p-6 card-dark">
            <h3 className="font-semibold mb-2">For Customers</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">Join the waitlist for exclusive early access rewards.</p>
            <Link href="/join" className="btn btn-outline h-11">Join Waitlist</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
