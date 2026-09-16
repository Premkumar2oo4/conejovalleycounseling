import Link from "next/link";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety Therapist, Trauma Therapy & EMDR in Santa Monica",
  description: "Dr. Maya Reynolds, PsyD, offers anxiety therapy, trauma therapy, burnout counseling, and EMDR treatment for adults in Santa Monica and across California via telehealth.",
};

const services = [
  [
    "01",
    "Anxiety Therapy Santa Monica",
    "Support for persistent worry, panic, overthinking, and body-based stress. Therapy helps you calm the nervous system, build practical coping tools, and feel more grounded in daily life.",
  ],
  [
    "02",
    "Trauma Therapy & EMDR",
    "Compassionate treatment for trauma symptoms, flashbacks, hypervigilance, and the lasting impact of difficult experiences. EMDR is used to help process painful memories with less distress and more resilience.",
  ],
  [
    "03",
    "Burnout & Perfectionism Counseling",
    "Support for high-achieving adults who feel overwhelmed, overextended, or disconnected from themselves. Therapy helps reduce pressure, restore balance, and reconnect with your values.",
  ],
  [
    "04",
    "Adults & Life Transitions",
    "Gentle, collaborative therapy for adults navigating stress, relationship challenges, identity shifts, and emotional exhaustion in a demanding world.",
  ],
];

const faqs = [
  {
    question: "What kind of therapy does Dr. Maya Reynolds provide?",
    answer:
      "Dr. Maya Reynolds provides therapy for adults in Santa Monica and California who are dealing with anxiety, trauma, burnout, perfectionism, and stress. Her work blends CBT, EMDR, mindfulness, and body-based strategies to support lasting change.",
  },
  {
    question: "Do you offer telehealth therapy in California?",
    answer:
      "Yes. Dr. Reynolds offers secure California telehealth sessions for adults who prefer virtual therapy or live outside the Santa Monica area.",
  },
  {
    question: "Is EMDR therapy effective for trauma?",
    answer:
      "EMDR is a trauma-informed therapy approach that helps the brain process distressing memories with less emotional overwhelm. Many clients find it helpful for reducing trauma symptoms and increasing a sense of control.",
  },
  {
    question: "What can I expect in the first session?",
    answer:
      "The first appointment is a warm, collaborative intake visit focused on your concerns, goals, and treatment plan. You can expect a calm space, thoughtful listening, and a clear next step forward.",
  },
  {
    question: "Do you work with anxiety and burnout in high-achieving adults?",
    answer:
      "Yes. Dr. Reynolds often works with adults who appear successful on the outside but feel exhausted, tense, or emotionally overwhelmed by pressure, perfectionism, or chronic stress.",
  },
];

export default function DrMayaReynoldsPage() {
  return (
    <main className="min-h-screen bg-[var(--secondary)] text-[var(--text)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/" className="font-serif text-2xl font-semibold text-[var(--primary)]">Harbor Mind</Link>
        <Link href="/" className="text-sm font-semibold text-[var(--primary)]">← Back to home</Link>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]">Santa Monica • California Telehealth</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.04] text-[var(--primary)] sm:text-6xl">
            Anxiety therapy, trauma therapy, and burnout counseling for adults in Santa Monica.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Dr. Maya Reynolds, PsyD, is a therapist in Santa Monica, California helping adults find relief from anxiety, trauma, perfectionism, and chronic stress through thoughtful, evidence-based care.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.18em] text-[var(--primary)]">
            <span className="rounded-full border border-[var(--primary)] px-3 py-2">Anxiety Therapy</span>
            <span className="rounded-full border border-[var(--primary)] px-3 py-2">Trauma Therapy</span>
            <span className="rounded-full border border-[var(--primary)] px-3 py-2">EMDR</span>
            <span className="rounded-full border border-[var(--primary)] px-3 py-2">Telehealth</span>
          </div>
          <a href="#contact" className="mt-9 w-fit rounded-full bg-[var(--accent)] px-7 py-4 font-semibold text-white shadow-lg shadow-[var(--shadow)] transition hover:bg-[var(--primary)]">
            Begin with a consultation
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-[var(--secondary-strong)]" />
          <img src="/images/maya-000.png" alt="Dr. Maya Reynolds, PsyD, anxiety therapist in Santa Monica" className="relative h-[555px] w-full rounded-[2.5rem] object-cover object-top shadow-xl shadow-[var(--shadow)]" />
        </div>
      </section>

      <section className="bg-[var(--primary)] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent-soft)]">Meet Dr. Maya Reynolds</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">Warm, practical support for adults ready to feel more like themselves.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--secondary)]">
            <p>Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist based in Santa Monica, California. She helps adults who feel overwhelmed by anxiety, trauma, stress, or burnout find more ease, clarity, and self-trust in everyday life.</p>
            <p>Her approach is collaborative, grounded, and evidence-based. She integrates cognitive-behavioral therapy, EMDR, mindfulness practices, and somatic awareness to support both emotional healing and practical coping strategies.</p>
            <p>Whether you are navigating panic, trauma symptoms, perfectionism, or relationship stress, therapy is tailored to your goals and paced to fit your needs.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]">Areas of support</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl text-[var(--primary)] sm:text-5xl">
          Therapy for anxiety, trauma, burnout, and life transitions in California.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(([number, title, text]) => (
            <article key={number} className="rounded-[2rem] border border-[var(--secondary-strong)] bg-[var(--surface)] p-8 shadow-sm shadow-[var(--shadow)]">
              <p className="font-bold text-[var(--accent)]">{number}</p>
              <h3 className="mt-8 font-serif text-3xl text-[var(--primary)]">{title}</h3>
              <p className="mt-5 leading-7 text-[var(--muted)]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--secondary-strong)] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/maya-001.jpg" alt="Therapy office for Santa Monica counseling" className="mt-10 h-72 w-full rounded-[2rem] object-cover shadow-lg shadow-[var(--shadow)]" />
            <img src="/images/maya-002.jpg" alt="Private counseling space for adults in Santa Monica" className="h-72 w-full rounded-[2rem] object-cover shadow-lg shadow-[var(--shadow)]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]">Calm, private care</p>
            <h2 className="mt-4 font-serif text-4xl text-[var(--primary)] sm:text-5xl">In-person therapy in Santa Monica, with secure virtual care across California.</h2>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              The office is designed to feel grounding and restorative from the moment you arrive, with a quiet setting that supports reflection, connection, and ease.
            </p>
            <p className="mt-6 font-semibold text-[var(--primary)]">123th Street 45 W, Santa Monica, CA 90401</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]">Frequently asked questions</p>
        <h2 className="mt-4 font-serif text-4xl text-[var(--primary)] sm:text-5xl">Questions about anxiety therapy, trauma treatment, and EMDR in Santa Monica.</h2>
        <div className="mt-12 space-y-5">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="rounded-[1.5rem] border border-[var(--secondary-strong)] bg-[var(--surface)] p-6 shadow-sm shadow-[var(--shadow)]">
              <h3 className="text-xl font-semibold text-[var(--primary)]">{question}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-6 my-6 rounded-[2.5rem] bg-[var(--accent)] px-7 py-20 text-center text-white lg:mx-10">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent-soft)]">Start here</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-white sm:text-5xl">You do not have to keep pushing through alone.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--accent-soft)]">
          Request a consultation for anxiety therapy, trauma counseling, EMDR, or burnout support in Santa Monica or through secure telehealth across California.
        </p>
        <a href="mailto:hello@drmayareynolds.com" className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-semibold text-[var(--primary)] shadow-lg shadow-[var(--shadow)]">
          Request a consultation
        </a>
      </section>
    </main>
  );
}
