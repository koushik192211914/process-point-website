"use client";

import Link from "next/link";
import { useState } from "react";

/* =========================================================
   ICONS
========================================================= */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
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

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
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
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
      <rect
        x="7"
        y="8"
        width="34"
        height="30"
        rx="5"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M15 30V23M24 30V18M33 30V14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
      <circle
        cx="24"
        cy="16"
        r="7"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M11 38C11 30.8 16.8 26 24 26C31.2 26 37 30.8 37 38"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SupplyIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
      <rect
        x="7"
        y="10"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect
        x="27"
        y="10"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect
        x="17"
        y="27"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M21 17H27M34 24V27M24 24V27"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
      <path
        d="M12 9H30L37 16V39H12V9Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M29 9V17H37"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M18 24H31M18 31H31"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CustomerIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="24"
        cy="19"
        r="5"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M15 35C16.8 30.7 19.8 28.5 24 28.5C28.2 28.5 31.2 30.7 33 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MigrationIcon({ type }: { type: number }) {
  if (type === 1) {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M10 17H34"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M29 12L35 17L29 22"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 31H14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M19 26L13 31L19 36"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 2) {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M24 34V12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M17 19L24 12L31 19"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 36H37"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M14 36V30H34V36"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 3) {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M18 30L30 18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M16 23L11 18C8.2 15.2 8.2 10.8 11 8C13.8 5.2 18.2 5.2 21 8L26 13"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M22 35L27 40C29.8 42.8 34.2 42.8 37 40C39.8 37.2 39.8 32.8 37 30L32 25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <path
        d="M25 7L12 27H23L20 41L36 20H25L25 7Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */

const businessFunctions = [
  {
    title: "Financial & Enterprise Management",
    description:
      "Comprehensive financial management and enterprise performance solutions",
    services: [
      "Financial Management",
      "Enterprise Performance Management",
      "ERP Analytics",
      "Risk Management & Compliance",
      "Procurement",
    ],
    icon: FinanceIcon,
  },
  {
    title: "Human Capital Management",
    description:
      "Complete HR solutions from talent acquisition to workforce analytics",
    services: [
      "Human Resources",
      "Talent Management",
      "Workforce Management",
      "Payroll",
      "HCM Analytics",
    ],
    icon: PeopleIcon,
  },
  {
    title: "Supply Chain & Operations",
    description:
      "End-to-end supply chain planning and operational excellence",
    services: [
      "Supply Chain Planning",
      "Inventory Management",
      "Manufacturing",
      "Maintenance",
      "Order Management",
      "Logistics",
    ],
    icon: SupplyIcon,
  },
  {
    title: "Project & Procurement",
    description:
      "Integrated project and procurement management solutions",
    services: [
      "Project Management",
      "Procurement",
      "Product Lifecycle Management",
    ],
    icon: ProjectIcon,
  },
  {
    title: "Customer Experience",
    description:
      "Unified customer engagement and experience platforms",
    services: ["Marketing", "Sales", "Service"],
    icon: CustomerIcon,
  },
];

const migrations = [
  {
    title: "Legacy Systems to Microsoft Dynamics",
    description:
      "Expert transition from traditional ERP systems to Microsoft's modern cloud solutions with complete data integrity.",
  },
  {
    title: "Microsoft AX/NAV to Microsoft Dynamics",
    description:
      "Helping businesses transition to modern SaaS environments for enhanced scalability, security, and accessibility.",
  },
  {
    title: "Cross-Platform Integrations",
    description:
      "Ensuring effective integration between Microsoft Dynamics and third-party tools.",
  },
  {
    title: "Custom Enhancements",
    description:
      "Upgrading existing Microsoft solutions for improved performance, functionality, and user experience.",
  },
];

const services = [
  "Strategic Consulting",
  "ERP Assessment",
  "Implementation",
  "Tactical Resource Augmentation",
  "Support & Maintenance",
];


const nav = [
  {
    name: "Competencies",
    items: [
      ["Oracle", "/oracle"],
      ["Microsoft Dynamics", "/microsoft-dynamics"],
      ["SAP", "/sap"],
    ],
  },
  {
    name: "Solutions",
    items: [
      ["ARTEMIS Methodology", "/artemis-methodology"],
      ["ERP Testing Automation", "/testing-automation"],
    ],
  },
  {
    name: "Resources",
    items: [
      ["Blogs", "/blogs"],
      ["Events", "/events"],
      ["Case Studies", "/case-studies"],
    ],
  },
  {
    name: "Company",
    items: [
      ["About Us", "/about"],
      ["Contact Us", "/contact"],
    ],
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function MicrosoftDynamicsPage() {
  const [activeBusiness, setActiveBusiness] = useState<number | null>(null);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10182f]">

      {/* =====================================================
          HEADER — SAME STRUCTURE AS THE MAIN SITE
      ===================================================== */}

     

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-7 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <span className="text-slate-300">
              ›
            </span>

            <span className="font-semibold text-slate-900">
              Microsoft Dynamics
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#edf5ff]">

        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-10">

          {/* LEFT */}

          <div className="flex min-h-[610px] flex-col justify-center py-12 lg:pr-12">

            <div className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 backdrop-blur">
              Microsoft Dynamics
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              ERP Expertise
            </div>

            <h1 className="max-w-3xl text-[52px] font-black leading-[0.98] tracking-[-0.045em] text-[#10182f] sm:text-[64px] lg:text-[72px] xl:text-[78px]">
              Microsoft Dynamics
              <span className="block">
                ERP Expertise
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#657994] sm:text-[20px]">
              We provide strategic consulting, implementation, and tactical
              resource augmentation for Microsoft Dynamics ERP, ensuring
              efficiency and cost-effectiveness.
            </p>

            <div className="mt-9">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Talk to an Expert

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <div className="rounded-2xl border border-blue-100 bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
                <div className="text-2xl font-black text-blue-600">
                  ERP
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500">
                  Enterprise Solutions
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
                <div className="text-2xl font-black text-blue-600">
                  Cloud
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500">
                  Modern Transformation
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
                <div className="text-2xl font-black text-blue-600">
                  Global
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500">
                  Delivery Expertise
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative flex min-h-[610px] items-center">

            <div className="absolute -inset-10 rounded-[80px] bg-blue-300/20 blur-3xl" />

            <div className="relative h-[520px] w-full overflow-hidden rounded-[32px] border border-white/80 bg-slate-200 shadow-[0_30px_80px_rgba(15,35,70,0.18)] lg:h-[610px]">

              {/* PHOTO 1 — TOP HERO
                  File: public/assets/sap-hero.png */}
              <img
                src="/assets/Microsoft_SAP_visual.png"
                alt="Microsoft Dynamics ERP"
                className="absolute inset-0 z-20 h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* TITLE */}

            <div>

              <div className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                01 / Our Services
              </div>

              <h2 className="max-w-xl text-[46px] font-black leading-[1.03] tracking-[-0.04em] text-[#10182f] sm:text-[58px]">
                Our Microsoft
                <span className="block">
                  Dynamics ERP
                </span>
                <span className="block text-blue-600">
                  Services
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#667995]">
                Process Point delivers comprehensive Microsoft Dynamics ERP
                services tailored to your business needs. From initial
                strategy to ongoing support, we ensure optimal performance and
                rapid deployment.
              </p>

            </div>

            {/* SERVICE LIST */}

            <div className="space-y-5">

              {services.map((service, index) => (

                <div
                  key={service}
                  className="group flex min-h-[88px] items-center gap-5 rounded-2xl border border-slate-200 bg-white px-7 shadow-[0_8px_30px_rgba(15,35,70,0.04)] transition duration-300 hover:-translate-x-2 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(37,99,235,0.10)]"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <CheckIcon />
                  </div>

                  <div className="flex-1">

                    <div className="text-lg font-bold text-[#172038] sm:text-xl">
                      {service}
                    </div>

                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Microsoft Dynamics
                    </div>

                  </div>

                  <div className="hidden text-xs font-black text-slate-300 sm:block">
                    0{index + 1}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BUSINESS FUNCTIONS
      ===================================================== */}

      <section className="bg-[#f8fafc] py-24 lg:py-32">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="mx-auto max-w-5xl text-center">

            <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
              02 / Business Functions
            </div>

            <h2 className="mt-5 text-[42px] font-black leading-tight tracking-[-0.04em] text-[#10182f] sm:text-[54px] lg:text-[60px]">
              Business Functions We Cover Across Microsoft Dynamics
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#687b97]">
              We deliver end-to-end Microsoft Dynamics solutions across key
              business functions, helping enterprises optimize operations,
              boost efficiency, and drive sustainable growth.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {businessFunctions.map((item, index) => {

              const Icon = item.icon;
              const active = activeBusiness === index;

              return (
                <div
                  key={item.title}
                  className={`group rounded-[28px] border bg-white p-8 transition-all duration-500 ${
                    active
                      ? "border-blue-300 shadow-[0_25px_70px_rgba(37,99,235,0.15)]"
                      : "border-slate-200 shadow-[0_10px_35px_rgba(15,35,70,0.04)] hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(15,35,70,0.10)]"
                  }`}
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_12px_25px_rgba(37,99,235,0.22)] transition duration-300 group-hover:scale-105">
                      <Icon />
                    </div>

                    <span className="text-xs font-black tracking-[0.2em] text-slate-300">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-8 min-h-[62px] text-[24px] font-black leading-tight text-[#304157]">
                    {item.title}
                  </h3>

                  <p className="mt-5 min-h-[70px] text-[16px] leading-7 text-[#737c91]">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveBusiness(active ? null : index)
                    }
                    className="mt-8 flex w-full items-center justify-between border-t border-slate-100 pt-6"
                  >

                    <span className="rounded-full bg-blue-50 px-5 py-3 text-sm font-bold text-blue-600">
                      {item.services.length} Services
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full text-blue-600 transition duration-300 group-hover:bg-blue-50">

                      {active ? (
                        <MinusIcon />
                      ) : (
                        <PlusIcon />
                      )}

                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      active
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="space-y-2 border-t border-slate-100 pt-4">

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

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          ERP MIGRATIONS
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="mx-auto max-w-4xl text-center">

            <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
              03 / ERP Migrations
            </div>

            <h2 className="mt-5 text-[48px] font-black tracking-[-0.04em] text-[#10182f] sm:text-[58px]">
              ERP Migrations We Deliver
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#687b97]">
              We specialize in complex ERP migration projects, ensuring an
              effective transition while maintaining business continuity.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {migrations.map((migration, index) => (

              <article
                key={migration.title}
                className="group relative min-h-[420px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,35,70,0.05)] transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(15,35,70,0.12)]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#fff7ed] text-blue-600 transition duration-300 group-hover:bg-blue-50">
                    <MigrationIcon type={index + 1} />
                  </div>

                  <span className="text-xs font-black tracking-[0.2em] text-slate-200">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-10 text-[25px] font-black leading-[1.08] text-black">
                  {migration.title}
                </h3>

                <p className="mt-6 text-[17px] leading-7 text-[#6d7d97]">
                  {migration.description}
                </p>

                <div className="absolute bottom-7 left-8 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-blue-600 transition duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowIcon />
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          TACTICAL RESOURCE AUGMENTATION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                04 / Resource Augmentation
              </div>

              <h2 className="mt-5 text-[48px] font-black leading-[1.04] tracking-[-0.04em] text-[#10182f] sm:text-[58px]">
                Tactical Resource
                <span className="block text-blue-600">
                  Augmentation
                </span>
              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-[#687b97]">
                We provide specialized on-site and offshore resources across
                the entire Microsoft technology stack. Our tactical
                augmentation approach ensures that organizations get the right
                expertise at the right time, accelerating their Microsoft
                Dynamics ERP initiatives and related technology projects.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-black text-blue-600">
                    On-site
                  </div>
                  <div className="mt-2 text-sm text-slate-500">
                    Specialized expertise
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-black text-blue-600">
                    Offshore
                  </div>
                  <div className="mt-2 text-sm text-slate-500">
                    Scalable resources
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-black text-blue-600">
                    Flexible
                  </div>
                  <div className="mt-2 text-sm text-slate-500">
                    Right expertise, right time
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SUCCESS STORIES
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="mb-14 text-center">

            <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
              05 / Success Stories
            </div>

            <h2 className="mt-5 text-[48px] font-black tracking-[-0.04em] text-[#10182f] sm:text-[58px]">
              Success Stories
            </h2>

          </div>

          <div className="space-y-7">

            {/* STORY 1 */}

            <article className="group grid overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,35,70,0.04)] lg:grid-cols-2">

              <div className="relative h-[330px] overflow-hidden lg:h-[400px]">

                {/* PHOTO 2 — SUCCESS STORY 1
                    File: public/assets/m1.webp */}
                <img
                  src="/assets/m1.webp"
                  alt="Steel manufacturing success story"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="flex flex-col justify-center p-9 sm:p-12 lg:p-16">

                <div className="mb-5 text-xs font-black tracking-[0.25em] text-blue-600">
                  SUCCESS STORY 01
                </div>

                <h3 className="max-w-2xl text-[30px] font-black leading-tight text-black sm:text-[34px]">
                  ERP Assessment & Retention of Microsoft Dynamics for a Large
                  Steel Manufacturer
                </h3>

                <Link
                  href="/case-studies"
                  className="mt-9 inline-flex w-fit items-center gap-3 rounded-full border border-blue-500 px-7 py-3.5 text-sm font-bold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white"
                >
                  Read More
                  <ArrowIcon />
                </Link>

              </div>

            </article>

            {/* STORY 2 */}

            <article className="group grid overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,35,70,0.04)] lg:grid-cols-2">

              <div className="relative order-1 h-[330px] overflow-hidden lg:order-2 lg:h-[400px]">

                {/* PHOTO 3 — SUCCESS STORY 2
                    File: public/assets/m2.webp */}
                <img
                  src="/assets/m2.webp"
                  alt="High technology manufacturing success story"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="order-2 flex flex-col justify-center p-9 sm:p-12 lg:order-1 lg:p-16">

                <div className="mb-5 text-xs font-black tracking-[0.25em] text-blue-600">
                  SUCCESS STORY 02
                </div>

                <h3 className="max-w-2xl text-[30px] font-black leading-tight text-black sm:text-[34px]">
                  Implementing Microsoft Dynamics for a Hitech Manufacturing
                  Company
                </h3>

                <Link
                  href="/case-studies"
                  className="mt-9 inline-flex w-fit items-center gap-3 rounded-full border border-blue-500 px-7 py-3.5 text-sm font-bold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white"
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
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4f5f7] py-24 lg:py-28">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)]">
            <ArrowIcon />
          </div>

          <h2 className="text-[44px] font-black tracking-[-0.04em] text-black sm:text-[56px]">
            Let&apos;s Modernize Your ERP
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-xl leading-9 text-[#687b97]">
            Ready to accelerate your Microsoft Dynamics deployment? Contact
            Process Point today to discuss your enterprise transformation
            needs.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_15px_40px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            Schedule a Consultation
            <ArrowIcon />
          </Link>

        </div>

      </section>

    </main>
  );
}