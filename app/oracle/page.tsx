"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const businessFunctions = [
  {
    title: "Financial & Enterprise Management",
    description:
      "Comprehensive financial management and enterprise performance solutions.",
    count: "5 Services",
    services: [
      "Financial Management",
      "Enterprise Performance Management",
      "ERP Analytics",
      "Risk Management & Compliance",
      "Procurement",
    ],
  },
  {
    title: "Human Capital Management",
    description:
      "Complete HR solutions from talent acquisition to workforce analytics.",
    count: "5 Services",
    services: [
      "Human Resources",
      "Talent Management",
      "Workforce Management",
      "Payroll",
      "HCM Analytics",
    ],
  },
  {
    title: "Supply Chain & Operations",
    description:
      "End-to-end supply chain planning and operational excellence.",
    count: "6 Services",
    services: [
      "Supply Chain Planning",
      "Inventory Management",
      "Manufacturing",
      "Maintenance",
      "Order Management",
      "Logistics",
    ],
  },
  {
    title: "Project & Procurement",
    description:
      "Integrated project and procurement management solutions.",
    count: "3 Services",
    services: [
      "Project Management",
      "Procurement",
      "Product Lifecycle Management",
    ],
  },
  {
    title: "Customer Experience",
    description:
      "Unified customer engagement and experience platforms.",
    count: "3 Services",
    services: ["Marketing", "Sales", "Service"],
  },
];

const migrations = [
  {
    number: "01",
    title: "Legacy Systems to Oracle EBS",
    text:
      "Transitioning traditional ERP systems to Oracle with minimal disruption to operations.",
  },
  {
    number: "02",
    title: "On-Premise to Oracle Cloud",
    text:
      "Migrating businesses to modern cloud ERP environments for enhanced scalability and performance.",
  },
  {
    number: "03",
    title: "Cross-Platform Integrations",
    text:
      "Integrating Oracle ERP with third-party systems without disruption.",
  },
  {
    number: "04",
    title: "Custom ERP Enhancements",
    text:
      "Upgrading existing Oracle solutions for better performance and functionality.",
  },
];

const stories = [
  {
    number: "01",
    title:
      "Enabling Supply Chain Efficiency for a Dairy Company via a Multi-Phase ERP Roadmap",
    image: "/assets/o1.webp",
  },
  {
    number: "02",
    title:
      "Migrating Microsoft Great Plains ERP to Oracle EBS for a Global Online Gaming Company",
    image: "/assets/o2.png",
  },
  {
    number: "03",
    title:
      "Migrating Legacy Systems to Oracle EBS for a Global Health & Wellness Company",
    image: "/assets/o3.webp",
  },
  {
    number: "04",
    title:
      "Implementing Oracle ERP Cloud for a Leading Logistics Company",
    image: "/assets/o4.webp",
  },
];

function Counter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = window.setInterval(() => {
      current += 1;

      if (current >= target) {
        setValue(target);
        window.clearInterval(interval);
      } else {
        setValue(current);
      }
    }, 80);

    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

function ImageSpace({
  src,
  alt,
  dark = false,
}: {
  src: string;
  alt: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative min-h-[280px] overflow-hidden rounded-[32px] border ${
        dark
          ? "border-white/10 bg-white/[0.04]"
          : "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-100"
      }`}
    >
      {/* IMAGE SLOT */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 z-10 h-full w-full object-cover"
      />

      {/* FALLBACK */}
      <div
        className={`absolute inset-0 z-0 ${
          dark ? "bg-[#071426]" : "bg-gradient-to-br from-blue-50 via-white to-slate-100"
        }`}
      />


    </div>
  );
}

function MainSectionImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative mt-12 min-h-[320px] overflow-hidden rounded-[36px] border border-slate-200 bg-slate-100 shadow-[0_25px_70px_rgba(15,23,42,0.10)]">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

export default function OracleERPPage() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <main className="overflow-hidden bg-white text-slate-950">

        {/* =========================
            HERO
        ========================== */}

        <section className="relative overflow-hidden bg-[#071426] text-white">

          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">

            <div>

              <div className="mb-8 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5">

                <div className="bg-red-600 px-5 py-3 text-lg font-black">
                  ORACLE
                </div>

                <div className="px-5 py-2">
                  <div className="font-bold">
                    Gold
                  </div>

                  <div className="text-xs text-slate-400">
                    Partner
                  </div>
                </div>

              </div>

              <div className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-blue-300">
                <span className="h-px w-8 bg-blue-400" />
                Oracle ERP Expertise
              </div>

              <h1 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Oracle
                <span className="block text-blue-400">
                  ERP Expertise
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                With 13+ years of experience and 20+ customers served
                globally, we provide end-to-end Oracle Cloud ERP services,
                ensuring efficiency, cost-effectiveness, and operational
                excellence.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
                >
                  Talk to an Oracle Expert

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div className="mt-14 flex flex-wrap items-center gap-8">

                <div className="flex items-center gap-4">

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-600 p-[4px]">

                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#071426]">
                      <strong className="text-2xl">
                        <Counter target={13} suffix="+" />
                      </strong>
                    </div>

                  </div>

                  <div>
                    <div className="font-bold">
                      Years
                    </div>

                    <div className="text-sm text-slate-400">
                      of Experience
                    </div>
                  </div>

                </div>

                <div className="h-14 w-px bg-white/10" />

                <div className="flex items-center gap-4">

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-600 p-[4px]">

                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#071426]">
                      <strong className="text-2xl">
                        <Counter target={20} suffix="+" />
                      </strong>
                    </div>

                  </div>

                  <div>
                    <div className="font-bold">
                      Customers
                    </div>

                    <div className="text-sm text-slate-400">
                      Served Globally
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="relative">

              <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                {/* =================================================
                    PHOTO 1 — ORACLE HERO IMAGE
                    Put your image here:
                    public/images/oracle/oracle-hero.jpg
                    ================================================= */}
                {/* =================================================
                    PHOTO 1 — TOP / HERO
                    Put your image here:
                    public/assets/sap-hero.png
                    ================================================= */}
                <div className="relative flex w-full items-center justify-center">
                  <div className="relative aspect-square w-full max-w-[680px] overflow-hidden rounded-[36px] border border-blue-400/30 bg-[#071426] shadow-[0_30px_90px_rgba(37,99,235,0.25)]">
                    <img
                      src="/assets/Oracle_SAP_visual.png"
                      alt="Oracle ERP transformation"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Subtle blue overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-950/10 via-transparent to-blue-400/10" />

                    {/* Blue inner border */}
                    <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-inset ring-blue-300/20" />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =========================
            SERVICES
        ========================== */}

        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

              <div>
                <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                  01 / Services
                </div>

                <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
                  Our Oracle ERP
                  <span className="block text-blue-600">
                    Services
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Process Point delivers comprehensive Oracle ERP services.
                From initial strategy to ongoing support, we ensure optimal
                performance and rapid deployment.
              </p>

            </div>

            <div className="mt-20 overflow-hidden rounded-[40px] bg-slate-950 text-white">

              <div className="grid lg:grid-cols-[280px_1fr]">

                <div className="relative overflow-hidden bg-blue-600 p-10">

                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/20" />

                  <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full border border-white/10" />

                  <div className="relative">

                    <div className="text-sm font-bold tracking-[0.2em] text-blue-100">
                      ORACLE
                    </div>

                    <div className="mt-1 text-7xl font-black tracking-[-0.08em]">
                      ERP
                    </div>

                    <div className="mt-8 text-xs font-bold uppercase leading-6 tracking-[0.18em] text-blue-100">
                      End-to-End
                      <br />
                      Services
                    </div>

                  </div>

                </div>

                <div className="p-5 sm:p-8">

                  {[
                    "Strategic Consulting",
                    "ERP Assessment",
                    "Implementation",
                    "Migration Services",
                    "Support & Maintenance",
                  ].map((service, index) => (

                    <div
                      key={service}
                      className="group flex min-h-[85px] items-center gap-5 border-b border-white/10 px-4 transition duration-300 hover:bg-white/[0.04] sm:px-7"
                    >

                      <span className="text-xs font-black tracking-widest text-blue-400">
                        0{index + 1}
                      </span>

                      <strong className="flex-1 text-lg sm:text-2xl">
                        {service}
                      </strong>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:rotate-45 group-hover:bg-blue-600">
                        →
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            BUSINESS FUNCTIONS
        ========================== */}

        <section className="bg-[#f5f8fc] py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                02 / Business Functions
              </div>

              <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
                Business Functions
                <span className="block text-blue-600">
                  We Cover
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We deliver end-to-end Oracle solutions across critical
                business functions, helping enterprises improve operations,
                enhance productivity, and drive sustainable growth.
              </p>

            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {businessFunctions.map((item, index) => {

                const isOpen = openCard === index;

                return (
                  <article
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[32px] border bg-white p-7 transition duration-500 ${
                      isOpen
                        ? "border-blue-300 shadow-[0_30px_80px_rgba(37,99,235,0.14)]"
                        : "border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-black tracking-[0.2em] text-slate-300">
                        0{index + 1}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        {index + 1}
                      </div>

                    </div>

                    <h3 className="mt-9 text-2xl font-black leading-tight tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenCard(isOpen ? null : index)
                      }
                      className="mt-7 flex w-full items-center justify-between border-t border-slate-100 pt-5 text-left"
                      aria-expanded={isOpen}
                    >

                      <span className="text-sm font-black text-blue-600">
                        {item.count}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        {isOpen ? "−" : "+"}
                      </span>

                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isOpen
                          ? "mt-4 max-h-80 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >

                      <div className="space-y-2">

                        {item.services.map((service) => (

                          <div
                            key={service}
                            className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                          >

                            <span className="text-blue-600">
                              ✓
                            </span>

                            {service}

                          </div>

                        ))}

                      </div>

                    </div>

                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-500 ${
                        isOpen
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />

                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* =========================
            MIGRATIONS
        ========================== */}

        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

              <div>

                <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                  03 / ERP Migrations
                </div>

                <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
                  ERP Migrations
                  <span className="block text-blue-600">
                    We Execute
                  </span>
                </h2>

              </div>

              <p className="text-lg leading-8 text-slate-600">
                We specialize in complex ERP migration projects, ensuring an
                effective transition while maintaining business continuity.
              </p>

            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {migrations.map((migration) => (

                <article
                  key={migration.number}
                  className="group relative min-h-[390px] overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-black tracking-[0.2em] text-slate-300">
                      {migration.number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      ↗
                    </span>

                  </div>

                  <h3 className="mt-24 text-2xl font-black leading-tight">
                    {migration.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {migration.text}
                  </p>

                  <div className="absolute bottom-7 right-7 text-2xl text-blue-600 transition duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                    ↗
                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            SUCCESS STORIES
        ========================== */}

        <section className="bg-[#071426] py-24 text-white lg:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-14">

              <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-300">
                04 / Success Stories
              </div>

              <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
                Success
                <span className="text-blue-400">
                  {" "}Stories
                </span>
              </h2>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* SUCCESS STORIES — 4 existing images:
                  /assets/D1.webp, /assets/D2.webp, /assets/D3.webp, /assets/D4.webp
              */}
              {stories.map((story) => (

                <article
                  key={story.title}
                  className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] transition duration-500 hover:-translate-y-2 hover:border-blue-400/40"
                >

                  <div className="relative overflow-hidden">

                    {/* =================================================
                        PHOTO 2–5 — SUCCESS STORY IMAGES
                        The four images are controlled by story.image above.
                        Put them inside:
                        public/images/oracle/
                        ================================================= */}
                    <img
                      src={story.image}
                      alt={story.title}
                      className="relative z-10 h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 z-0 flex h-64 flex-col items-center justify-center bg-gradient-to-br from-blue-900/40 to-slate-950/40">
                      <div className="text-5xl font-black text-blue-300">
                        {story.number}
                      </div>
                    </div>

                  </div>

                  <div className="p-7">

                    <h3 className="text-2xl font-black leading-tight">
                      {story.title}
                    </h3>

                    <Link
                      href="/case-studies"
                      className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-blue-300"
                    >
                      Read More
                      <span className="transition group-hover:translate-x-2">
                        →
                      </span>
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            CTA
        ========================== */}

        <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">

          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-lg">
              ↗
            </div>

            <div className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-blue-600">
              05 / Contact
            </div>

            <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
              Get in Touch with
              <span className="block text-blue-600">
                Our Oracle ERP Experts
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Ready to accelerate your ERP deployment? Contact Process Point
              today to discuss your enterprise needs and start your
              transformation.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Schedule a Consultation
              <span>→</span>
            </Link>

          </div>

        </section>

    </main>
  );
}