"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* =========================================================
   ICONS
========================================================= */

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
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

function SparkIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      <path
        d="M24 4L28.5 19.5L44 24L28.5 28.5L24 44L19.5 28.5L4 24L19.5 19.5L24 4Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <rect
        x="6"
        y="6"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="28"
        y="6"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="6"
        y="28"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="28"
        y="28"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <path
        d="M7 39V9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M7 39H42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M13 31L21 23L27 27L39 13"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <path
        d="M24 5L39 11V22C39 31 33 38 24 43C15 38 9 31 9 22V11L24 5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M17 24L22 29L32 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 14V24L31 29"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   TOOL DATA
========================================================= */

const tools = [
  {
    id: "atlas",
    name: "ATLAS",
    category: "Business Architecture",
    number: "01",
    color: "from-cyan-500 to-blue-600",
    description:
      "Business capability mapping and requirements definition across the ERP landscape.",
    stats: "70,902 pre-built ERP capabilities",
    bullets: [
      "Pre-built capability hierarchy mapping",
      "Function-level requirement capture",
      "Business logic and ontology linking",
      "Standardized downstream exports",
    ],
    image: "/assets/Atlas.png",
  },
  {
    id: "radar",
    name: "RADAR",
    category: "Risk & Discovery",
    number: "02",
    color: "from-blue-500 to-indigo-600",
    description:
      "Risk identification, gap assessment, and data-driven platform evaluation.",
    stats: "Data-driven vendor fit scoring",
    bullets: [
      "Capability gap analysis",
      "Vendor and platform fit scoring",
      "Risk impact assessment",
      "Analytics-driven decision support",
    ],
    image: "/assets/Radar-scaled.png",
  },
  {
    id: "transit",
    name: "TRANSIT",
    category: "Data Migration",
    number: "03",
    color: "from-violet-500 to-purple-600",
    description:
      "Data migration and transformation management designed for controlled ERP transitions.",
    stats: "Migration visibility from start to finish",
    bullets: [
      "Data profiling and cleansing",
      "Pre-built migration templates",
      "Automated validation rules",
      "Migration monitoring",
    ],
    image: "/assets/Transit.png",
  },
  {
    id: "examiner",
    name: "EXAMINER",
    category: "Testing & Automation",
    number: "04",
    color: "from-fuchsia-500 to-purple-600",
    description:
      "Testing management and automation for functional, integration, and end-to-end validation.",
    stats: "12,265+ pre-built test cases",
    bullets: [
      "Pre-built test case library",
      "Automated test execution",
      "Defect tracking",
      "Coverage analytics and KPIs",
    ],
    image: "/assets/Examiner.png",
  },
  {
    id: "mentor",
    name: "MENTOR",
    category: "Training & Enablement",
    number: "05",
    color: "from-emerald-400 to-cyan-600",
    description:
      "User adoption and training management supporting role-based learning and organizational change.",
    stats: "$700K → $50K training model",
    bullets: [
      "Role-based learning paths",
      "Interactive training content",
      "Progress tracking",
      "Training assessments and certification",
    ],
    image: "/assets/Mentor.png",
  },
  {
    id: "illustrator",
    name: "ILLUSTRATOR",
    category: "Process Visualization",
    number: "06",
    color: "from-orange-400 to-pink-500",
    description:
      "Process documentation and visualization for clear, reusable ERP process knowledge.",
    stats: "63 pre-built E2E process flows",
    bullets: [
      "End-to-end process visualization",
      "Interactive process diagrams",
      "Multi-swimlane documentation",
      "Multi-format export",
    ],
    image: "/assets/Illustrator.png",
  },
  {
    id: "synapse",
    name: "SYNAPSE",
    category: "Integration & Connectivity",
    number: "07",
    color: "from-sky-400 to-indigo-600",
    description:
      "Integration management connecting enterprise systems and third-party applications.",
    stats: "10 pre-built integration templates",
    bullets: [
      "Integration templates",
      "API configuration",
      "Real-time monitoring",
      "Error handling and remediation",
    ],
    image: "/assets/Synapse.png",
  },
];

/* =========================================================
   ADVANTAGES
========================================================= */

const advantages = [
  {
    number: "01",
    title: "70,902 Pre-Built ERP Capabilities",
    description:
      "Instead of starting from scratch, ARTEMIS uses a comprehensive capability hierarchy covering major ERP business domains.",
    icon: GridIcon,
  },
  {
    number: "02",
    title: "Data-Driven Vendor Fit Scoring",
    description:
      "Compare Oracle, SAP, and Microsoft against your specific requirements rather than relying on generic feature lists.",
    icon: ChartIcon,
  },
  {
    number: "03",
    title: "Comprehensive Test Automation",
    description:
      "Generate extensive testing coverage through structured test assets and automated validation workflows.",
    icon: ShieldIcon,
  },
  {
    number: "04",
    title: "Persistent Knowledge Assets",
    description:
      "The seven tools operate as an integrated workflow so project knowledge can be retained, reused, and scaled.",
    icon: SparkIcon,
  },
];

/* =========================================================
   COMPARISON
========================================================= */

const comparisons = [
  {
    metric: "Timeline",
    traditional: "20 months from requirements to go-live",
    artemis: "12–14 months — 30–40% faster",
    icon: ClockIcon,
  },
  {
    metric: "Cost",
    traditional: "$2.2M consulting with high variability",
    artemis: "40–50% cost reduction through lower consultant dependency",
    icon: ChartIcon,
  },
  {
    metric: "Test Coverage",
    traditional: "40% coverage with production defect risk",
    artemis: "95% auto-generated coverage",
    icon: ShieldIcon,
  },
  {
    metric: "Training",
    traditional: "$700K classroom-based training",
    artemis: "$50K self-paced online model",
    icon: SparkIcon,
  },
  {
    metric: "Vendor Selection",
    traditional: "16 weeks with subjective scoring",
    artemis: "2 weeks with quantified fit scores",
    icon: GridIcon,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ArtemisMethodologyPage() {
  const [activeTool, setActiveTool] = useState(0);
  const [comparisonOpen, setComparisonOpen] = useState(false);

  const selectedTool = tools[activeTool];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#12233d]">

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="border-b border-slate-100 bg-white">

        <div className="mx-auto max-w-[1500px] px-5 py-5 sm:px-8 lg:px-12">

          <div className="flex items-center gap-3 text-sm">

            <Link
              href="/"
              className="text-slate-500 transition hover:text-[#12233d]"
            >
              Home
            </Link>

            <span className="text-slate-300">/</span>

            <span className="font-semibold text-[#12233d]">
              ARTEMIS Methodology
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="overview"
        className="relative scroll-mt-20 overflow-hidden bg-[#07192f]"
      >

        {/* BACKGROUND LIGHT */}

        <div className="absolute left-[-200px] top-[-200px] h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute right-[-200px] bottom-[-250px] h-[700px] w-[700px] rounded-full bg-violet-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(128,233,255,.14) 1px, transparent 1px),linear-gradient(90deg,rgba(128,233,255,.14) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto grid max-w-[1500px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-28">

          {/* HERO COPY */}

          <div className="flex flex-col justify-center">

            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
                <SparkIcon />
              </span>

              ERP Transformation System

            </div>

            <h1 className="mt-8 max-w-3xl text-[52px] font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-[68px] lg:text-[82px]">

              ERP
              <span className="block">
                implementation,
              </span>

              <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                engineered differently.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">

              ARTEMIS systematizes ERP implementation expertise through seven
              connected tools — helping organizations deliver faster,
              more consistently, and with lower dependency on external
              consultants.

            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-black text-[#12233d] transition hover:-translate-y-1"
              >
                Explore ARTEMIS

                <span className="transition group-hover:translate-x-1">
                  <ArrowIcon />
                </span>

              </Link>

              <a
                href="#tools"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                Meet the 7 Tools
              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-400">

              <span>Oracle</span>
              <span>SAP</span>
              <span>Microsoft Dynamics</span>

            </div>

          </div>

          {/* =================================================
              HERO ARTEMIS ORBIT
          ================================================= */}

          <div className="relative min-h-[540px] lg:min-h-[650px]">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="absolute h-[460px] w-[460px] rounded-full border border-cyan-300/10" />

              <div className="absolute h-[350px] w-[350px] rounded-full border border-violet-300/10" />

              <div className="absolute h-[250px] w-[250px] rounded-full border border-white/10" />

              <div className="absolute h-[500px] w-[500px] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-cyan-300/10" />

            </div>

            {/* CENTER */}

            <div className="absolute left-1/2 top-1/2 z-20 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/40 bg-gradient-to-br from-cyan-400 to-blue-600 p-[2px] shadow-[0_0_100px_rgba(34,211,238,0.25)]">

              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#08223c] text-center">

                <div className="text-[11px] font-black uppercase tracking-[0.28em] text-cyan-200">
                  ARTEMIS
                </div>

                <div className="mt-2 text-3xl font-black text-white">
                  CORE
                </div>

                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  7 connected tools
                </div>

              </div>

            </div>

            {/* TOOL NODES */}

            {tools.map((tool, index) => {

              const positions = [
                "left-[4%] top-[12%]",
                "right-[4%] top-[12%]",
                "left-[0%] top-[46%]",
                "right-[0%] top-[46%]",
                "left-[13%] bottom-[8%]",
                "right-[13%] bottom-[8%]",
                "left-1/2 bottom-[0%] -translate-x-1/2",
              ];

              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => {
                    setActiveTool(index);
                    document
                      .getElementById("tools")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`absolute ${positions[index]} group z-30`}
                >

                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-left shadow-xl backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/40 group-hover:bg-white/10">

                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">
                      {tool.number}
                    </div>

                    <div className="mt-1 text-sm font-black text-white">
                      {tool.name}
                    </div>

                    <div className="mt-1 hidden text-[10px] text-slate-400 sm:block">
                      {tool.category}
                    </div>

                  </div>

                </button>
              );
            })}

            {/* PHOTO SPACE */}

            <div className="absolute bottom-5 right-5 hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 lg:block">
              ARTEMIS VISUAL
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROOF METRICS
      ===================================================== */}

      <section className="relative z-20 -mt-1 bg-white px-5 py-12 sm:px-8 lg:px-12">

        <div className="mx-auto grid max-w-[1350px] overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,35,60,0.10)] md:grid-cols-2 lg:grid-cols-4">

          {[
            ["70,902", "Pre-built ERP capabilities"],
            ["100K+", "ERP function comparisons"],
            ["2,000+", "Best-practice processes"],
            ["2,500+", "Automated test scripts"],
          ].map(([value, label], index) => (

            <div
              key={label}
              className={`p-7 text-center sm:p-9 ${
                index !== 0
                  ? "border-t border-slate-200 md:border-l lg:border-t-0"
                  : ""
              }`}
            >

              <div className="text-4xl font-black tracking-[-0.05em] text-[#12233d] sm:text-5xl">
                {value}
              </div>

              <div className="mx-auto mt-3 max-w-[190px] text-sm font-semibold leading-6 text-[#66788f]">
                {label}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        id="workflow"
        className="scroll-mt-20 bg-[#f6f9fc] py-24 lg:py-32"
      >

        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

            <div>

              <div className="text-xs font-black uppercase tracking-[0.25em] text-[#18aee0]">
                The ARTEMIS approach
              </div>

              <h2 className="mt-5 max-w-3xl text-[46px] font-black leading-[1.03] tracking-[-0.05em] text-[#12233d] sm:text-[62px]">

                Turn ERP expertise
                <span className="block">
                  into a repeatable system.
                </span>

              </h2>

            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#52647b]">

              Traditional ERP implementation can become heavily dependent on
              individual consultant knowledge. ARTEMIS converts that expertise
              into connected assets, structured workflows, reusable knowledge,
              and measurable outputs.

            </p>

          </div>

          {/* PROCESS RAIL */}

          <div className="mt-16 grid gap-4 md:grid-cols-5">

            {[
              ["01", "Discover", "Understand the business"],
              ["02", "Define", "Map capabilities"],
              ["03", "Transform", "Configure and migrate"],
              ["04", "Validate", "Test and verify"],
              ["05", "Adopt", "Train and enable"],
            ].map(([number, title, description]) => (

              <div
                key={number}
                className="group relative rounded-[25px] border border-slate-200 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_20px_50px_rgba(15,35,60,0.08)]"
              >

                <div className="text-xs font-black text-cyan-500">
                  {number}
                </div>

                <h3 className="mt-5 text-xl font-black text-[#12233d]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#66788f]">
                  {description}
                </p>

                <div className="mt-6 h-1 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          7 TOOLS
      ===================================================== */}

      <section
        id="tools"
        className="scroll-mt-20 bg-white py-24 lg:py-32"
      >

        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="max-w-3xl">

            <div className="text-xs font-black uppercase tracking-[0.25em] text-[#635bff]">
              The seven-tool system
            </div>

            <h2 className="mt-5 text-[46px] font-black leading-[1.02] tracking-[-0.05em] text-[#12233d] sm:text-[62px]">
              One methodology.
              <span className="block">
                Seven specialized engines.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#66788f]">
              Each tool addresses a different stage of ERP transformation,
              while the complete system creates a connected implementation
              workflow.
            </p>

          </div>

          {/* TOOL SELECTOR */}

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">

            {/* LEFT TOOL LIST */}

            <div className="rounded-[30px] border border-slate-200 bg-[#f6f9fc] p-3">

              {tools.map((tool, index) => (

                <button
                  key={tool.id}
                  type="button"
                  onClick={() => setActiveTool(index)}
                  className={`group flex w-full items-center gap-4 rounded-[22px] p-4 text-left transition duration-300 ${
                    activeTool === index
                      ? "bg-[#12233d] text-white shadow-lg"
                      : "text-[#12233d] hover:bg-white"
                  }`}
                >

                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                      activeTool === index
                        ? "bg-white/10 text-cyan-300"
                        : "bg-white text-[#12233d]"
                    }`}
                  >
                    {tool.number}
                  </span>

                  <span className="min-w-0 flex-1">

                    <span className="block text-sm font-black">
                      {tool.name}
                    </span>

                    <span
                      className={`mt-1 block truncate text-xs ${
                        activeTool === index
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      {tool.category}
                    </span>

                  </span>

                  <ArrowIcon
                    className={`h-4 w-4 shrink-0 transition group-hover:translate-x-1 ${
                      activeTool === index
                        ? "text-cyan-300"
                        : "text-slate-400"
                    }`}
                  />

                </button>

              ))}

            </div>

            {/* RIGHT TOOL DETAIL */}

            <div className="relative overflow-hidden rounded-[34px] bg-[#12233d] text-white shadow-[0_30px_80px_rgba(18,35,61,0.16)]">

              <div className="absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative grid min-h-[580px] lg:grid-cols-2">

                {/* CONTENT */}

                <div className="flex flex-col justify-between p-8 sm:p-12">

                  <div>

                    <div className="flex items-center justify-between">

                      <div className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                        {selectedTool.category}
                      </div>

                      <div className="text-5xl font-black text-white/10">
                        {selectedTool.number}
                      </div>

                    </div>

                    <h3 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                      {selectedTool.name}
                    </h3>

                    <p className="mt-6 text-base leading-7 text-slate-300">
                      {selectedTool.description}
                    </p>

                    <div className="mt-7 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200">
                      {selectedTool.stats}
                    </div>

                    <div className="mt-9 space-y-3">

                      {selectedTool.bullets.map((bullet) => (

                        <div
                          key={bullet}
                          className="flex gap-3 text-sm leading-6 text-slate-300"
                        >

                          <span className="mt-0.5 text-cyan-300">
                            <CheckIcon />
                          </span>

                          <span>{bullet}</span>

                        </div>

                      ))}

                    </div>

                  </div>

                  <div className="mt-10">

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-black text-[#12233d] transition hover:-translate-y-1"
                    >
                      Discuss ARTEMIS
                      <ArrowIcon />
                    </Link>

                  </div>

                </div>

                {/* IMAGE SPACE */}

                {/* TOOL IMAGE
                    ATLAS screenshot: public/assets/Atlas.png
                    Use object-contain so the complete screenshot is visible
                    without cropping or stretching.
                */}
                <div className="relative min-h-[300px] overflow-hidden bg-white lg:min-h-full">

                  {/* FALLBACK VISUAL - stays behind the real image */}
                  <div
                    className={`absolute inset-0 z-0 bg-gradient-to-br ${selectedTool.color}`}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.22) 1px,transparent 1px)",
                        backgroundSize: "45px 45px",
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-7xl font-black tracking-[-0.06em] text-white">
                          {selectedTool.name}
                        </div>

                        <div className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-white/70">
                          TOOL VISUAL
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* REAL SCREENSHOT */}
                  <img
                    src={selectedTool.image}
                    alt={`${selectedTool.name} tool screenshot`}
                    className="absolute inset-0 z-10 h-full w-full bg-white object-contain object-center"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          COMPETITIVE ADVANTAGES
      ===================================================== */}

      <section
        id="advantages"
        className="scroll-mt-20 bg-[#f6f9fc] py-24 lg:py-32"
      >

        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="text-center">

            <div className="text-xs font-black uppercase tracking-[0.25em] text-[#18aee0]">
              Our competitive advantage
            </div>

            <h2 className="mx-auto mt-5 max-w-4xl text-[46px] font-black leading-[1.03] tracking-[-0.05em] text-[#12233d] sm:text-[62px]">
              How ARTEMIS changes
              <span className="block">
                ERP implementation.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {advantages.map((item) => {

              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,35,60,0.10)] sm:p-10"
                >

                  <div className="absolute right-8 top-7 text-6xl font-black text-slate-100">
                    {item.number}
                  </div>

                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f7fc] text-[#069ed4]">
                      <Icon />
                    </div>

                    <h3 className="mt-7 max-w-xl text-2xl font-black tracking-tight text-[#12233d] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-[#66788f]">
                      {item.description}
                    </p>

                    <div className="mt-7 h-px w-full bg-slate-100" />

                    <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#18aee0]">
                      ARTEMIS ADVANTAGE
                      <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <section
        id="comparison"
        className="scroll-mt-20 bg-white py-24 lg:py-32"
      >

        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

            <div>

              <div className="text-xs font-black uppercase tracking-[0.25em] text-[#635bff]">
                Traditional vs ARTEMIS
              </div>

              <h2 className="mt-5 text-[46px] font-black leading-[1.03] tracking-[-0.05em] text-[#12233d] sm:text-[62px]">
                Less dependency.
                <span className="block">
                  More control.
                </span>
              </h2>

            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#66788f]">

              Traditional ERP implementation can rely heavily on consultant
              expertise. ARTEMIS turns that expertise into structured,
              reusable implementation assets.

            </p>

          </div>

          {/* DESKTOP TABLE */}

          <div className="mt-14 hidden overflow-hidden rounded-[30px] border border-slate-200 lg:block">

            <div className="grid grid-cols-[0.7fr_1fr_1.2fr] bg-[#12233d] text-white">

              <div className="p-6 text-xs font-black uppercase tracking-[0.2em]">
                Metric
              </div>

              <div className="p-6 text-xs font-black uppercase tracking-[0.2em]">
                Traditional Approach
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 text-xs font-black uppercase tracking-[0.2em] text-[#12233d]">
                ARTEMIS Methodology
              </div>

            </div>

            {comparisons.map((row, index) => {

              const Icon = row.icon;

              return (
                <div
                  key={row.metric}
                  className="grid grid-cols-[0.7fr_1fr_1.2fr] border-t border-slate-200"
                >

                  <div className="flex items-center gap-4 p-6 font-black text-[#12233d]">

                    <span className="text-[#18aee0]">
                      <Icon />
                    </span>

                    {row.metric}

                  </div>

                  <div className="p-6 text-sm leading-7 text-[#66788f]">
                    {row.traditional}
                  </div>

                  <div className="bg-[#eef9fd] p-6 text-sm font-bold leading-7 text-[#12233d]">

                    <div className="flex gap-3">

                      <span className="mt-0.5 text-cyan-500">
                        <CheckIcon />
                      </span>

                      {row.artemis}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* MOBILE COMPARISON */}

          <div className="mt-12 space-y-4 lg:hidden">

            {comparisons.map((row) => {

              const Icon = row.icon;

              return (
                <div
                  key={row.metric}
                  className="overflow-hidden rounded-[24px] border border-slate-200"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setComparisonOpen(!comparisonOpen)
                    }
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >

                    <span className="text-cyan-500">
                      <Icon />
                    </span>

                    <span className="flex-1 font-black text-[#12233d]">
                      {row.metric}
                    </span>

                    <span className="text-xs font-bold text-slate-400">
                      View
                    </span>

                  </button>

                  <div className="border-t border-slate-100 p-5">

                    <div className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                      Traditional
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#66788f]">
                      {row.traditional}
                    </p>

                    <div className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-cyan-600">
                      ARTEMIS
                    </div>

                    <p className="mt-2 text-sm font-bold leading-6 text-[#12233d]">
                      {row.artemis}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          OUTCOME SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#07192f] py-24 text-white lg:py-32">

        <div className="absolute left-[-180px] top-[-200px] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute right-[-180px] bottom-[-200px] h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <div className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                The result
              </div>

              <h2 className="mt-6 text-[46px] font-black leading-[1.02] tracking-[-0.05em] sm:text-[64px]">
                Faster delivery.
                <span className="block text-cyan-300">
                  Better knowledge.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                ARTEMIS is designed to reduce consultant dependency, improve
                implementation consistency, accelerate delivery, and create
                reusable ERP knowledge assets.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-[#12233d] transition hover:-translate-y-1"
              >
                Talk to our ERP team
                <ArrowIcon />
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                ["30–40%", "Faster implementation"],
                ["40–50%", "Potential cost reduction"],
                ["95%", "Automated test coverage"],
                ["7", "Integrated implementation tools"],
              ].map(([value, label]) => (

                <div
                  key={label}
                  className="rounded-[26px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl"
                >

                  <div className="text-4xl font-black text-white">
                    {value}
                  </div>

                  <div className="mt-3 text-sm font-semibold leading-6 text-slate-400">
                    {label}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#f6f9fc] py-24 lg:py-32">

        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12233d] text-cyan-300 shadow-xl">
            <SparkIcon />
          </div>

          <div className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-[#18aee0]">
            Start your transformation
          </div>

          <h2 className="mt-5 text-[44px] font-black leading-[1.03] tracking-[-0.05em] text-[#12233d] sm:text-[62px]">
            Ready to transform
            <span className="block">
              your ERP journey?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#66788f]">
            Discover how ARTEMIS can help you create a faster, more
            structured, and more scalable ERP implementation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-[#12233d] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1"
            >
              Request Consultation

              <span className="transition group-hover:translate-x-1">
                <ArrowIcon />
              </span>

            </Link>

            <Link
              href="/sap"
              className="inline-flex items-center gap-3 rounded-full border border-[#12233d]/20 px-7 py-4 text-sm font-bold text-[#12233d] transition hover:bg-[#12233d] hover:text-white"
            >
              Explore SAP
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          NO FOOTER
          Global Footer comes from layout.tsx
      ===================================================== */}

    </main>
  );
}