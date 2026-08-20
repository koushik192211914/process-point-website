"use client";

import { useState } from "react";
import Link from "next/link";

/* =========================================================
   SIMPLE SVG ICONS
========================================================= */

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
      <rect x="7" y="8" width="34" height="32" rx="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 31V25M22 31V19M30 31V15M37 31V11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
      <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="M11 39C11 31.8 16.8 27 24 27C31.2 27 37 31.8 37 39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SupplyIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
      <rect x="6" y="9" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="28" y="9" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="17" y="28" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 16H28M35 23V28M13 23V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M10 8H29L38 17V40H10V8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M29 8V17H38" stroke="currentColor" strokeWidth="2.5" />
      <path d="M17 25H31M17 32H27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CommerceIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M8 12H13L17 31H36L40 18H15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="37" r="2.5" fill="currentColor" />
      <circle cx="34" cy="37" r="2.5" fill="currentColor" />
    </svg>
  );
}

/* =========================================================
   DATA — kept aligned with the SAP page content
========================================================= */

const services = [
  "Strategic Consulting",
  "SAP Assessment",
  "Implementation",
  "Migration Services",
  "Support & Maintenance",
];

const businessFunctions = [
  {
    title: "Finance & Operations",
    description:
      "Comprehensive financial planning, accounting, and operational excellence",
    services: [
      "Financial Planning and Analysis",
      "Accounting and Financial Close",
      "Tax and Trade",
      "Quote to Cash",
      "Travel and Expense",
      "Treasury and Working Capital",
    ],
    icon: FinanceIcon,
  },
  {
    title: "Human Resources",
    description:
      "Complete HR solutions from payroll to talent management and digital adoption",
    services: [
      "Core HR and Payroll",
      "Talent Management",
      "Workforce Management",
      "Sales Performance Management",
      "Digital Adoption",
    ],
    icon: PeopleIcon,
  },
  {
    title: "Supply Chain Management",
    description:
      "End-to-end supply chain planning, manufacturing, and logistics management",
    services: [
      "Supply Chain Planning",
      "Procurement Management",
      "Manufacturing",
      "Product Lifecycle Management",
      "Supply Chain Logistics",
      "Enterprise Asset Management",
    ],
    icon: SupplyIcon,
  },
  {
    title: "Project Management",
    description:
      "Comprehensive project planning, tracking, and collaboration solutions",
    services: [
      "Project Planning and Scheduling",
      "Resource Management",
      "Time and Expense Tracking",
      "Budget and Cost Control",
      "Project Analytics",
      "Client Collaboration",
    ],
    icon: ProjectIcon,
  },
  {
    title: "Commerce & Retail",
    description:
      "Complete e-commerce and retail management solutions",
    services: [
      "E-commerce Platform",
      "Point of Sale Systems",
      "Customer Loyalty Programs",
      "Inventory Management",
      "Multi-channel Commerce",
      "Pricing and Promotions",
    ],
    icon: CommerceIcon,
  },
];

const migrations = [
  {
    title: "Legacy Systems to SAP S/4HANA",
    description:
      "Transitioning traditional ERP systems to SAP's intelligent cloud platform with minimal disruption.",
  },
  {
    title: "On-Premise to SAP Cloud",
    description:
      "Migrating businesses to SAP's modern SaaS ERP environment for enhanced scalability.",
  },
  {
    title: "Cross-Platform Integrations",
    description:
      "Unifying business systems by linking SAP ERP with third-party applications.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function SAPPage() {
  const [openFunction, setOpenFunction] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-[#0b1f3a]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#edf6ff]">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1500px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20 xl:gap-20">

          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#005eb8]/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#005eb8]">
              SAP ERP
            </div>

            <h1 className="max-w-3xl text-[48px] font-black leading-[1.02] tracking-[-0.045em] text-[#101c33] sm:text-[64px] lg:text-[76px]">
              SAP ERP
              <span className="block text-[#005eb8]">Expertise</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d7692] sm:text-xl">
              We provide end-to-end SAP ERP services, delivering efficiency,
              cost-effectiveness, and operational excellence to support seamless
              business transformation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-[#005eb8] px-7 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(0,94,184,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#004a91]"
              >
                Talk to an Expert
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border-2 border-[#005eb8] bg-white px-7 py-4 text-sm font-bold text-[#005eb8] transition hover:bg-[#005eb8] hover:text-white"
              >
                Explore SAP Services
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[570px]">
            <div className="absolute -inset-6 rounded-[45px] bg-blue-200/40 blur-3xl" />

            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[32px] border-2 border-[#005eb8]/20 bg-white shadow-[0_30px_80px_rgba(0,94,184,0.16)] lg:min-h-[570px]">
              <img
                src="/assets/SAP_SAP_visual.png"
                alt="SAP ERP Expertise - Comprehensive SAP solutions"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SAP ERP SERVICES
      ===================================================== */}

      <section id="services" className="scroll-mt-20 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>
              <div className="text-xs font-black uppercase tracking-[0.25em] text-[#005eb8]">
                SAP Services
              </div>

              <h2 className="mt-5 text-[42px] font-black leading-[1.05] tracking-[-0.04em] text-[#101c33] sm:text-[56px]">
                Our SAP ERP
                <span className="block text-[#005eb8]">Services</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#607994]">
                Process Point delivers comprehensive SAP ERP services tailored
                to your business needs. From initial strategy to ongoing
                support, we ensure optimal performance and rapid deployment.
              </p>

              <div className="mt-8 h-1.5 w-24 rounded-full bg-[#005eb8]" />
            </div>

            <div className="grid gap-4">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group flex items-center gap-5 rounded-2xl border-2 border-[#005eb8]/20 bg-white px-6 py-5 shadow-[0_8px_25px_rgba(0,94,184,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#005eb8] hover:shadow-[0_15px_35px_rgba(0,94,184,0.12)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf4ff] text-[#005eb8]">
                    <CheckIcon />
                  </div>

                  <span className="flex-1 text-lg font-bold text-[#101c33]">
                    {service}
                  </span>

                  <span className="text-[#005eb8] transition group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>

                  <span className="hidden text-xs font-black text-[#9ab2ca] sm:block">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS FUNCTIONS
      ===================================================== */}

      <section
        id="functions"
        className="scroll-mt-20 border-y border-[#005eb8]/10 bg-[#f7fbff] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-[#005eb8]">
              SAP Capabilities
            </div>

            <h2 className="mt-4 text-[40px] font-black leading-tight tracking-[-0.04em] text-[#101c33] sm:text-[54px]">
              Business Functions We Cover Across SAP
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#607994]">
              We deliver reliable SAP solutions across critical business
              functions, enabling organizations to simplify operations,
              enhance agility, and achieve long-term growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {businessFunctions.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openFunction === index;

              return (
                <article
                  key={item.title}
                  className={`overflow-hidden rounded-[26px] border-2 bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#005eb8] shadow-[0_20px_50px_rgba(0,94,184,0.12)]"
                      : "border-[#005eb8]/15 shadow-[0_8px_30px_rgba(0,94,184,0.04)] hover:border-[#005eb8]/60 hover:shadow-[0_15px_40px_rgba(0,94,184,0.09)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFunction(isOpen ? null : index)}
                    className="flex w-full items-center gap-5 p-7 text-left sm:p-8"
                    aria-expanded={isOpen}
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#005eb8] text-white shadow-[0_10px_25px_rgba(0,94,184,0.22)]">
                      <Icon />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-black text-[#101c33] sm:text-2xl">
                          {item.title}
                        </h3>

                        <span className="rounded-full border border-[#005eb8]/20 bg-[#eaf4ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#005eb8]">
                          {item.services.length} Services
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[#6a8098] sm:text-base">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#005eb8]/20 text-[#005eb8]">
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t-2 border-[#005eb8]/10 px-7 pb-7 pt-5 sm:px-8">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {item.services.map((service) => (
                            <div
                              key={service}
                              className="flex items-start gap-3 rounded-xl border border-[#005eb8]/10 bg-[#f7fbff] px-4 py-3 text-sm font-semibold text-[#405b76]"
                            >
                              <span className="mt-0.5 shrink-0 text-[#005eb8]">
                                <CheckIcon />
                              </span>
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Center the fifth card on larger screens */}
            <div className="hidden xl:block" />
          </div>
        </div>
      </section>

      {/* =====================================================
          ERP MIGRATIONS
      ===================================================== */}

      <section id="migration" className="scroll-mt-20 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-[#005eb8]">
              ERP Transformation
            </div>

            <h2 className="mt-4 text-[40px] font-black leading-tight tracking-[-0.04em] text-[#101c33] sm:text-[54px]">
              ERP Migrations We Execute
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#607994]">
              We specialize in complex ERP migration projects, ensuring an
              effective transition while maintaining business continuity.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {migrations.map((migration, index) => (
              <article
                key={migration.title}
                className="group rounded-[26px] border-2 border-[#005eb8]/20 bg-white p-8 shadow-[0_10px_30px_rgba(0,94,184,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#005eb8] hover:shadow-[0_20px_45px_rgba(0,94,184,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4ff] text-xl font-black text-[#005eb8]">
                  0{index + 1}
                </div>

                <h3 className="mt-7 text-2xl font-black leading-tight text-[#101c33]">
                  {migration.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-[#607994]">
                  {migration.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-black text-[#005eb8]">
                  Learn more
                  <span className="transition group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <article className="mt-6 rounded-[26px] border-2 border-[#005eb8] bg-[#f7fbff] p-8 shadow-[0_15px_40px_rgba(0,94,184,0.08)] sm:p-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005eb8] text-white">
                <ArrowIcon />
              </div>

              <h3 className="mt-6 text-3xl font-black text-[#101c33] sm:text-4xl">
                Custom ERP Enhancements
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#607994]">
                Upgrading existing SAP solutions for better performance and
                enhanced functionality.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          SUCCESS STORIES
      ===================================================== */}

      <section id="stories" className="scroll-mt-20 bg-[#f7fbff] py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-[#005eb8]">
              Case Studies
            </div>

            <h2 className="mt-4 text-[40px] font-black leading-tight tracking-[-0.04em] text-[#101c33] sm:text-[54px]">
              Success Stories
            </h2>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">

            <article className="overflow-hidden rounded-[28px] border-2 border-[#005eb8]/20 bg-white shadow-[0_10px_35px_rgba(0,94,184,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#005eb8] hover:shadow-[0_25px_60px_rgba(0,94,184,0.12)]">
              <div className="relative h-[310px] overflow-hidden bg-[#e8f2fb]">
                <img
                  src="/assets/s1.webp"
                  alt="SAP automotive success story"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-[#005eb8]">
                  SAP S/4HANA
                </div>

                <h3 className="mt-4 text-2xl font-black leading-tight text-[#101c33] sm:text-3xl">
                  Optimizing operations for a large automotive manufacturer
                  with SAP S/4HANA
                </h3>

                <Link
                  href="/case-studies"
                  className="mt-7 inline-flex items-center gap-3 rounded-full border-2 border-[#005eb8] px-6 py-3 text-sm font-bold text-[#005eb8] transition hover:bg-[#005eb8] hover:text-white"
                >
                  Read More
                  <ArrowIcon />
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] border-2 border-[#005eb8]/20 bg-white shadow-[0_10px_35px_rgba(0,94,184,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#005eb8] hover:shadow-[0_25px_60px_rgba(0,94,184,0.12)]">
              <div className="relative h-[310px] overflow-hidden bg-[#e8f2fb]">
                <img
                  src="/assets/s2.png"
                  alt="SAP CPG success story"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-[#005eb8]">
                  SAP S/4HANA
                </div>

                <h3 className="mt-4 text-2xl font-black leading-tight text-[#101c33] sm:text-3xl">
                  Integrating SAP S/4HANA to Enhance Finance and Supply Chain
                  for a CPG Company
                </h3>

                <Link
                  href="/case-studies"
                  className="mt-7 inline-flex items-center gap-3 rounded-full border-2 border-[#005eb8] px-6 py-3 text-sm font-bold text-[#005eb8] transition hover:bg-[#005eb8] hover:text-white"
                >
                  Read More
                  <ArrowIcon />
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#005eb8] py-20 text-white lg:py-28">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <h2 className="text-[40px] font-black leading-tight tracking-[-0.04em] sm:text-[54px]">
            Ready to Transform Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
            Let us help you unlock the full potential of SAP ERP for your
            organization.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-black text-[#005eb8] shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition hover:-translate-y-1"
          >
            Schedule a Consultation
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Footer is intentionally NOT included here.
          app/layout.tsx supplies the global footer. */}
    </main>
  );
}