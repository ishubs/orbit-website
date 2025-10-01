import JoinForms from "@/components/JoinForms";

export const metadata = {
  title: "Join Orbit — Merchants and Customers",
};

export default function JoinPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-black/5 dark:border-white/10 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Join the Future of Loyalty</h1>
        <p className="text-black/70 dark:text-white/70">Get early access, exclusive rewards, and shape the platform as we grow.</p>
      </section>

      <section className="space-y-6">
        <JoinForms />
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Benefits of Early Access</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03]">
            <h3 className="font-semibold mb-2">For Merchants</h3>
            <ul className="list-disc list-inside text-sm text-black/70 dark:text-white/70 space-y-1">
              <li>Discounted first-year pricing</li>
              <li>Priority onboarding</li>
              <li>Input on feature roadmap</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03]">
            <h3 className="font-semibold mb-2">For Customers</h3>
            <ul className="list-disc list-inside text-sm text-black/70 dark:text-white/70 space-y-1">
              <li>Bonus tokens on signup</li>
              <li>Exclusive NFT for first 1,000 users</li>
              <li>Early access to premium features</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="grid gap-4">
          {[
            {
              q: "When will Orbit launch on mainnet?",
              a: "Expected Q2 2025 for initial rollout.",
            },
            {
              q: "How much does it cost for merchants?",
              a: "Pricing depends on scale and features. Contact us for details.",
            },
            {
              q: "Do I need to understand blockchain to use Orbit?",
              a: "No. We abstract the complexity — it's as simple as any SaaS.",
            },
            {
              q: "Can I cash out loyalty tokens?",
              a: "We enable compliant redemption and swaps between brands.",
            },
            {
              q: "What brands are already on the platform?",
              a: "We've got 4 brands committed and are targeting 20+ in year one.",
            },
          ].map((f) => (
            <div key={f.q} className="rounded-2xl border border-black/5 dark:border-white/10 p-5 bg-white/70 dark:bg-white/[0.03]">
              <div className="font-medium mb-1">{f.q}</div>
              <div className="text-sm text-black/70 dark:text-white/70">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-black/5 dark:border-white/10 p-6">
        <div className="text-sm text-black/60 dark:text-white/60">
          Email: <a className="text-[--color-primary]" href="mailto:contact@orbit.loyalty">contact@orbit.loyalty</a> · LinkedIn · Based in London · Building on Hedera
        </div>
      </section>
    </div>
  );
}


