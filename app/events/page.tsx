"use client";

import Link from "next/link";
import { useState } from "react";

type EventItem = {
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

const event: EventItem = {
  title: "Oracle CloudWorld 2025",
  date: "October 13–16, 2025",
  location: "Las Vegas, Nevada",
  category: "Oracle • AI • Cloud • ERP",
  description:
    "Oracle’s premier global conference for customers and partners, focusing on the latest innovations in cloud applications, infrastructure, AI, data, and ERP.",
  // Replace this URL later with your local event image if preferred.
  image:
    "/assets/event.png",
  href: "/events/oracle-ai-world-2025/",
};



export default function EventsPage() {
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [imageReady, setImageReady] = useState(true);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7fbff] text-[#092747]">

      {/* HERO — DIFFERENT VISUAL LANGUAGE FROM ABOUT PAGE */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#041a31]">

        {/* animated light beams */}
        <div className="event-beam event-beam-one" />
        <div className="event-beam event-beam-two" />
        <div className="event-beam event-beam-three" />

        {/* network dots */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[8%] top-[24%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_30px_8px_rgba(103,232,249,.25)]" />
          <div className="absolute left-[20%] top-[67%] h-1.5 w-1.5 rounded-full bg-blue-300" />
          <div className="absolute left-[42%] top-[19%] h-2 w-2 rounded-full bg-white" />
          <div className="absolute right-[25%] top-[32%] h-2 w-2 rounded-full bg-cyan-200" />
          <div className="absolute right-[9%] top-[68%] h-2 w-2 rounded-full bg-blue-300" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,160,220,.18),transparent_38%),linear-gradient(120deg,#031526,#003b7a_55%,#06213d)]" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-24 lg:px-8">

          <div className="max-w-4xl">

            <div className="event-reveal inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 animate-ping rounded-full bg-cyan-300" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
                Process Point Events
              </span>
            </div>

            <h1 className="event-title mt-8 text-6xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl lg:text-[110px]">
              Where ideas
              <span className="block text-cyan-300">move forward.</span>
            </h1>

            <p className="event-reveal-delay mt-8 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
              Explore conferences and industry events where enterprise
              technology, AI, cloud, and ERP come together.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#upcoming"
                className="group rounded-full bg-white px-7 py-4 text-sm font-black text-[#005eb8] transition-all duration-500 hover:-translate-y-1 hover:tracking-wide hover:shadow-[0_15px_45px_rgba(103,232,249,.22)]"
              >
                Explore the event
                <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-500 hover:border-cyan-300/60 hover:bg-white/10"
              >
                Connect with us
              </Link>
            </div>

          </div>

          {/* floating event coordinates */}
          <div className="absolute bottom-12 right-8 hidden xl:block">
            <div className="relative h-52 w-52">
              <div className="absolute inset-0 rounded-full border border-cyan-300/10" />
              <div className="absolute inset-7 rounded-full border border-cyan-300/10" />
              <div className="absolute inset-14 rounded-full border border-cyan-300/10" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_35px_10px_rgba(103,232,249,.3)]" />
              <span className="absolute left-0 top-1/2 text-[9px] font-black uppercase tracking-[0.25em] text-cyan-200">
                GLOBAL
              </span>
              <span className="absolute bottom-1 right-0 text-[9px] font-black uppercase tracking-[0.25em] text-blue-300">
                ERP / AI / CLOUD
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      </section>

      {/* UPCOMING EVENT */}
      <section id="upcoming" className="relative overflow-hidden bg-white px-5 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#005eb8]">
                Featured Event
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[#003b7a] sm:text-5xl lg:text-6xl">
                Meet the ideas shaping
                <span className="block text-[#005eb8]">enterprise technology.</span>
              </h2>
            </div>

            <div className="hidden text-right md:block">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                01 / FEATURED
              </p>
              <p className="mt-2 text-sm font-bold text-slate-500">
                Process Point Technologies
              </p>
            </div>
          </div>

          {/* premium event card */}
          <article className="group relative overflow-hidden rounded-[2.75rem] border border-blue-100 bg-[#f5faff] shadow-[0_30px_100px_rgba(0,59,122,.10)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_120px_rgba(0,59,122,.17)]">

            <div className="grid grid-cols-1">

              {/* =================================================
                  FULL-WIDTH EVENT IMAGE
                  The image now fills the entire event card width.
                  ================================================= */}
              <div className="relative h-[420px] w-full overflow-hidden bg-[#061a31] sm:h-[520px] lg:h-[680px]">

                {imageReady ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    onError={() => setImageReady(false)}
                    className="absolute inset-0 z-10 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#06213d] via-[#003b7a] to-[#00a4df]">
                    <div className="text-center">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                        Event Image
                      </p>
                      <p className="mt-3 text-3xl font-black text-white">
                        Add image here
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#031526]/75 via-transparent to-transparent" />

                {/* animated scan line */}
                <div className="event-scan absolute left-0 right-0 top-0 z-30 h-px bg-cyan-200/70 shadow-[0_0_25px_4px_rgba(103,232,249,.35)]" />

                <div className="absolute left-7 top-7 z-30 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur">
                  Featured Event
                </div>

                <div className="absolute bottom-7 left-7 right-7 z-30">
                  <div className="flex flex-wrap gap-2">
                    {["AI", "Cloud", "ERP", "Oracle"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONTENT — BELOW FULL-WIDTH IMAGE */}
              <div className="relative flex w-full flex-col justify-between p-8 sm:p-12 lg:p-16">

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#005eb8]">
                    {event.category}
                  </p>

                  <h3 className="mt-6 text-4xl font-black leading-[1.03] tracking-[-0.05em] text-[#003b7a] sm:text-5xl">
                    {event.title}
                  </h3>

                  <div className="mt-9 grid gap-3 sm:grid-cols-2">

                    <div className="group/meta rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Date
                      </p>
                      <p className="mt-2 font-extrabold text-[#003b7a]">
                        {event.date}
                      </p>
                    </div>

                    <div className="group/meta rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Location
                      </p>
                      <p className="mt-2 font-extrabold text-[#003b7a]">
                        {event.location}
                      </p>
                    </div>

                  </div>

                  <p className="mt-8 text-lg leading-8 text-slate-600">
                    {event.description}
                  </p>

                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="group mt-7 flex items-center gap-3 text-sm font-black text-[#005eb8]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-[#005eb8] group-hover:text-white">
                      {showDetails ? "−" : "+"}
                    </span>
                    {showDetails ? "Hide event details" : "Reveal event details"}
                  </button>

                  {showDetails && (
                    <div className="event-details mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#005eb8]">
                        What to expect
                      </p>

                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                        <li>• Keynotes from Oracle executives and industry leaders.</li>
                        <li>• Education sessions across AI, ERP, OCI, database and applications.</li>
                        <li>• Partner and networking opportunities.</li>
                        <li>• Training, certification and digital learning opportunities.</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-blue-100 pt-7">

                  <Link
                    href={event.href}
                    className="group rounded-full bg-[#005eb8] px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-200 transition-all duration-500 hover:-translate-y-1 hover:bg-[#003b7a] hover:shadow-xl"
                  >
                    Learn More
                    <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="text-sm font-black text-[#003b7a] transition-colors duration-300 hover:text-[#005eb8]"
                  >
                    Ask about the event
                  </Link>

                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* EVENT JOURNEY */}
      <section className="relative overflow-hidden bg-[#f4f9fe] px-5 py-24 lg:px-8 lg:py-32">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-[100px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#005eb8]">
              The Event Journey
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#003b7a] sm:text-5xl">
              From discovery to
              <span className="text-[#005eb8]"> meaningful connections.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              ["01", "Discover", "Explore the technologies, ideas and conversations shaping the ERP landscape."],
              ["02", "Connect", "Meet experts, partners and business leaders around practical enterprise challenges."],
              ["03", "Transform", "Bring useful insights back into your ERP strategy and transformation roadmap."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="event-journey-card group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-8 transition-all duration-700 hover:-translate-y-3 hover:border-[#005eb8] hover:shadow-[0_30px_70px_rgba(0,59,122,.13)]"
              >
                <div className="absolute -right-12 -top-12 text-[110px] font-black leading-none text-[#005eb8]/[0.035] transition-transform duration-700 group-hover:scale-125">
                  {number}
                </div>

                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#003b7a] text-xs font-black text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-[#005eb8]">
                  {number}
                </span>

                <h3 className="relative mt-9 text-2xl font-black text-[#003b7a]">
                  {title}
                </h3>

                <p className="relative mt-4 leading-7 text-slate-500">
                  {description}
                </p>

                <div className="mt-8 h-1 w-10 rounded-full bg-[#005eb8] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] bg-[#003b7a] px-7 py-16 text-center sm:px-12 lg:py-20">

          <div className="event-cta-orb absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="event-cta-orb-two absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
              Stay Connected
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Let&apos;s talk about what&apos;s next.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-blue-100">
              Connect with Process Point to discuss ERP transformation,
              technology and upcoming opportunities.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-black text-[#005eb8] transition-all duration-500 hover:-translate-y-1 hover:px-10 hover:shadow-2xl"
            >
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </section>

      {/* PAGE-ONLY ANIMATION CSS
          This is a normal <style> tag, NOT styled-jsx.
          It avoids the nested styled-jsx error from the About page. */}
      <style>{`
        @keyframes eventBeamMove {
          0% {
            transform: translate3d(-20%, 20%, 0) rotate(18deg);
            opacity: 0;
          }
          25% {
            opacity: .8;
          }
          75% {
            opacity: .45;
          }
          100% {
            transform: translate3d(80%, -20%, 0) rotate(18deg);
            opacity: 0;
          }
        }

        @keyframes eventReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes eventTitle {
          from {
            opacity: 0;
            transform: translateY(55px) scale(.96);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes eventScan {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(650px);
            opacity: 0;
          }
        }

        @keyframes eventDetails {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            max-height: 400px;
            transform: translateY(0);
          }
        }

        .event-beam {
          position: absolute;
          left: -30%;
          top: 5%;
          width: 75%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(103,232,249,.8), transparent);
          filter: blur(.2px);
          transform: rotate(18deg);
          animation: eventBeamMove 9s linear infinite;
          pointer-events: none;
        }

        .event-beam-one {
          animation-delay: 0s;
        }

        .event-beam-two {
          top: 40%;
          animation-delay: 3s;
          animation-duration: 12s;
        }

        .event-beam-three {
          top: 75%;
          animation-delay: 6s;
          animation-duration: 10s;
        }

        .event-reveal {
          animation: eventReveal 900ms cubic-bezier(.22,1,.36,1) both;
        }

        .event-title {
          animation: eventTitle 1200ms cubic-bezier(.16,1,.3,1) 150ms both;
        }

        .event-reveal-delay {
          animation: eventReveal 900ms cubic-bezier(.22,1,.36,1) 450ms both;
        }

        .event-scan {
          animation: eventScan 4.5s ease-in-out infinite;
        }

        .event-details {
          overflow: hidden;
          animation: eventDetails 500ms cubic-bezier(.22,1,.36,1) both;
        }

        .event-journey-card:nth-child(1) {
          transition-delay: 0ms;
        }

        .event-journey-card:nth-child(2) {
          transition-delay: 80ms;
        }

        .event-journey-card:nth-child(3) {
          transition-delay: 160ms;
        }

        .event-cta-orb {
          animation: eventFloat 7s ease-in-out infinite;
        }

        .event-cta-orb-two {
          animation: eventFloat 9s ease-in-out infinite reverse;
        }

        @keyframes eventFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(25px, -18px, 0) scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .event-beam,
          .event-reveal,
          .event-title,
          .event-reveal-delay,
          .event-scan,
          .event-cta-orb,
          .event-cta-orb-two {
            animation: none !important;
          }

          .event-title,
          .event-reveal,
          .event-reveal-delay {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>

    </main>
  );
}