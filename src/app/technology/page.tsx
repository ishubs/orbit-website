import CopyButton from "@/components/CopyButton";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Orbit Technology — Built on Hedera",
};

const CONTRACTS = [
  { name: "BrandTokenFactory", id: "0.0.6871025" },
  { name: "OrbitSwap", id: "0.0.6871026" },
];

export default function TechnologyPage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden">
        <div className="px-8 py-16 md:px-16 md:py-20 space-y-5">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Built on Enterprise-Grade Blockchain</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-black/70 dark:text-white/70 text-lg max-w-3xl">
              Hedera provides the speed, security, and sustainability to power loyalty at scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Hedera */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why Hedera</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Low Transaction Costs",
              points: [
                "Micro-transactions cost fractions of a cent",
                "Perfect for high-frequency loyalty rewards",
                "Merchants save money, customers get more value",
              ],
            },
            {
              title: "High Throughput",
              points: [
                "Process millions of transactions per day",
                "10,000+ TPS ensures instant rewards",
                "No congestion, no delays",
              ],
            },
            {
              title: "Tamper-Proof & Secure",
              points: [
                "Enterprise-grade security trusted by Fortune 500s",
                "Immutable transaction records",
                "Transparent, auditable, and regulation-friendly",
              ],
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="card rounded-2xl p-6 card-dark">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <ul className="list-disc list-inside text-sm text-black/70 dark:text-white/70 space-y-1">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card rounded-2xl p-6 card-dark">
            <h3 className="font-semibold mb-1">Hedera Token Service (HTS)</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Fungible and non-fungible loyalty token issuance</p>
          </div>
          <div className="card rounded-2xl p-6 card-dark">
            <h3 className="font-semibold mb-1">Hedera Smart Contracts</h3>
            <p className="text-sm text-black/70 dark:text-white/70">EVM-compatible contracts for programmable rules and swaps</p>
          </div>
          <div className="card rounded-2xl p-6 card-dark">
            <h3 className="font-semibold mb-1">Hedera Consensus Service (HCS)</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Tamper-proof transaction records</p>
          </div>
        </div>
        <div className="card rounded-2xl p-6 card-dark">
          <h4 className="font-semibold mb-4">Contract Addresses (Testnet)</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTRACTS.map((c, i) => (
              <Reveal key={c.id} delay={i * 60}>
                <div className="flex items-center justify-between gap-3 rounded-xl border border-black/5 dark:border-white/10 p-4 bg-white/60 dark:bg-white/[0.03]">
                  <div>
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">{c.id}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CopyButton value={c.id} label="Copy" />
                    <a
                      className="inline-flex items-center gap-2 text-[--color-primary] text-sm font-medium"
                      href={`https://hashscan.io/testnet/contract/${c.id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Eco-Friendly by Design</h2>
        <p className="text-black/70 dark:text-white/70 max-w-3xl">
          Hedera is carbon-negative, making Orbit the sustainable choice for conscious brands.
        </p>
      </section>

      {/* Developer Info */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Developer-Friendly</h2>
        <ul className="list-disc list-inside text-sm text-black/70 dark:text-white/70 space-y-1">
          <li>Built with modern Web3 standards</li>
          <li>Open to integrations with other Hedera dApps</li>
          <li>Interested in collaborating? Contact us</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-black/5 dark:border-white/10 p-8 bg-gradient-to-br from-[--color-surface] to-white/70 dark:from-white/[0.04] dark:to-white/[0.02]">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/join?tab=merchants" className="btn btn-primary h-11">Schedule Technical Demo</Link>
          <a
            href={`https://hashscan.io/testnet/contract/${CONTRACTS[0].id}`}
            target="_blank"
            rel="noreferrer"
            className="text-[--color-primary] font-medium"
          >
            View Testnet Contracts →
          </a>
        </div>
      </section>
    </div>
  );
}


