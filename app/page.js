import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative w-full bg-[var(--secondary)]">
      <iframe
        title="Conejo Valley Family Counseling"
        src="/site/index.html"
        className="h-dvh w-full border-0"
      />
      <a
        href="#our-office"
        className="fixed bottom-6 left-20 z-[999999] rounded-full border border-[var(--primary)] bg-[var(--surface)] px-5 py-3 text-xs font-bold tracking-[0.12em] text-[var(--primary)] shadow-lg transition hover:-translate-y-1 hover:bg-[var(--accent-soft)] sm:bottom-8 sm:left-8"
      >
        OUR OFFICE ↓
      </a>
      <Link
        href="/drmayareynolds"
        className="fixed bottom-6 right-6 z-[999999] inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-bold tracking-wide text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[var(--primary-deep)] sm:bottom-8 sm:right-8"
      >
        Meet Dr. Maya Reynolds <span aria-hidden="true">→</span>
      </Link>

      <section id="our-office" className="bg-[var(--secondary-strong)] px-6 py-24 text-[var(--text)] sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[var(--accent)]">OUR OFFICE</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-[var(--primary)] sm:text-6xl lg:text-7xl">A calm space for healing.</h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">Dr. Maya Reynolds offers in-person therapy from a quiet, private Santa Monica office designed to feel calm, comfortable, and grounding from the moment you arrive.</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">Natural light and an uncluttered setting support reflection and a sense of ease. Secure telehealth sessions are also available for adults anywhere in California.</p>
            <div className="mt-9 space-y-2 text-xs font-bold tracking-[0.12em] text-[var(--primary)]"><p>IN-PERSON & SECURE TELEHEALTH</p><p>123TH STREET 45 W, SANTA MONICA, CA 90401</p></div>
          </div>
          <div className="grid grid-cols-2 items-end gap-4 sm:gap-6">
            <img src="/images/maya-001.jpg" alt="Warm, private therapy office in Santa Monica" className="h-[320px] w-full rounded-[2rem] object-cover shadow-xl shadow-[var(--shadow)] sm:h-[440px]" />
            <img src="/images/maya-002.jpg" alt="Calm counseling space for Dr. Maya Reynolds' clients" className="mb-10 h-[280px] w-full rounded-[2rem] object-cover shadow-xl shadow-[var(--shadow)] sm:mb-14 sm:h-[380px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
