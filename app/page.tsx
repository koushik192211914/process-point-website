"use client";

import { useEffect, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type Tool = {
  id: string;
  number: string;
  name: string;
  short: string;
  title: string;
  description: string;
  image: string;
  capabilities: string[];
  metric: string;
  metricLabel: string;
};

/* =========================================================
   ARTEMIS TOOLS
   KEEP THESE IMAGE NAMES EXACTLY
========================================================= */

const tools: Tool[] = [
  {
    id: "atlas",
    number: "01",
    name: "ATLAS",
    short: "Business Architecture",
    title: "ATLAS — Business Architecture",
    description:
      "ATLAS creates a structured view of enterprise capabilities and business processes, helping organizations understand their current landscape and define the right ERP foundation.",
    image: "/assets/Atlas.png",
    capabilities: [
      "Enterprise capability mapping",
      "Business process hierarchy",
      "ERP function comparison",
      "Structured requirements",
    ],
    metric: "70,902",
    metricLabel: "Pre-built ERP capabilities",
  },

  {
    id: "radar",
    number: "02",
    name: "RADAR",
    short: "Risk & Discovery",
    title: "RADAR — Risk & Discovery",
    description:
      "RADAR helps identify implementation risks, business requirements and critical decisions before they become expensive project issues.",
    image: "/assets/Radar-scaled.png",
    capabilities: [
      "Risk identification",
      "Requirement discovery",
      "Gap analysis",
      "Decision support",
    ],
    metric: "360°",
    metricLabel: "Risk visibility",
  },

  {
    id: "transit",
    number: "03",
    name: "TRANSIT",
    short: "Implementation",
    title: "TRANSIT — Implementation Acceleration",
    description:
      "TRANSIT supports a faster transition from ERP planning into implementation by organizing proven processes, knowledge and delivery assets.",
    image: "/assets/Transit.png",
    capabilities: [
      "Implementation acceleration",
      "Process standardization",
      "Knowledge reuse",
      "Delivery consistency",
    ],
    metric: "30–40%",
    metricLabel: "Faster implementation",
  },

  {
    id: "examiner",
    number: "04",
    name: "EXAMINER",
    short: "Testing & Automation",
    title: "EXAMINER — Test Management & Automation",
    description:
      "EXAMINER provides comprehensive ERP testing support with pre-built test cases covering functional, integration and end-to-end business process validation.",
    image: "/assets/Examiner.png",
    capabilities: [
      "12,265+ pre-built test cases",
      "Functional testing",
      "Integration testing",
      "End-to-end validation",
    ],
    metric: "12,265+",
    metricLabel: "Pre-built test cases",
  },

  {
    id: "mentor",
    number: "05",
    name: "MENTOR",
    short: "Self-Paced Learning",
    title: "MENTOR — Self-Paced Training",
    description:
      "MENTOR provides structured self-paced learning that reduces dependence on expensive classroom-based training and helps teams build lasting ERP knowledge.",
    image: "/assets/Mentor.png",
    capabilities: [
      "Self-paced learning",
      "Role-based training",
      "Knowledge retention",
      "Reduced training dependency",
    ],
    metric: "93%",
    metricLabel: "Potential training savings",
  },

  {
    id: "illustrator",
    number: "06",
    name: "ILLUSTRATOR",
    short: "Process Visualization",
    title: "ILLUSTRATOR — Process Visualization",
    description:
      "ILLUSTRATOR turns complex ERP processes and business requirements into clear visual representations that teams can understand and validate.",
    image: "/assets/Illustrator.png",
    capabilities: [
      "Process visualization",
      "Business process modeling",
      "Requirement communication",
      "Stakeholder alignment",
    ],
    metric: "2000+",
    metricLabel: "Best-practice processes",
  },

  {
    id: "synapse",
    number: "07",
    name: "SYNAPSE",
    short: "Knowledge Integration",
    title: "SYNAPSE — Connected ERP Knowledge",
    description:
      "SYNAPSE connects knowledge generated across the ARTEMIS ecosystem, helping teams reuse experience and maintain consistent implementation knowledge.",
    image: "/assets/Synapse.png",
    capabilities: [
      "Knowledge integration",
      "Reusable project assets",
      "Cross-tool connectivity",
      "Persistent knowledge",
    ],
    metric: "7",
    metricLabel: "Integrated ARTEMIS tools",
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function HomePage() {
  const [activeTool, setActiveTool] = useState("atlas");
  const [isPaused, setIsPaused] = useState(false);

  const selectedTool =
    tools.find((tool) => tool.id === activeTool) ?? tools[0];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveTool((currentId) => {
        const currentIndex = tools.findIndex((tool) => tool.id === currentId);
        return tools[(currentIndex + 1) % tools.length].id;
      });
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <main className="min-h-screen bg-white text-[#07172f]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="top"
        className="relative overflow-hidden bg-white"
      >

        {/* BACKGROUND */}

        <div className="absolute inset-0">

          <div className="absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-[#087cf0]/20 blur-[120px]" />

          <div className="absolute right-0 top-20 h-[600px] w-[600px] rounded-full bg-[#20d7e9]/10 blur-[130px]" />

          <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#615cff]/10 blur-[120px]" />

        </div>


        <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

            {/* HERO COPY */}

            <div>

              <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#1677ff] ring-1 ring-white/10">
                <span className="h-2 w-2 rounded-full bg-[#1677ff]" />
                ERP Transformation System
              </div>


              <h1 className="max-w-4xl text-6xl font-black leading-[0.91] tracking-[-0.06em] text-[#07172f] sm:text-7xl lg:text-[92px]">

                ERP

                <br />

                implementation,

                <span className="block text-[#1677ff]">
                  engineered
                </span>

                <span className="block text-[#07172f]">
                  differently.
                </span>

              </h1>


              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5b6f88] sm:text-xl">
                Break free from expensive, time-consuming ERP failures.
                Our tool-driven approach delivers faster, cheaper,
                better results.
              </p>


              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#artemis"
                  className="rounded-full bg-[#1677ff] px-7 py-4 text-sm font-black text-[#06172f] transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Explore ARTEMIS
                </a>

                <a
                  href="#platforms"
                  className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#07172f] ring-1 ring-[#1677ff]/15 ring-1 ring-white/15 transition duration-300 hover:bg-white/10"
                >
                  Explore Platforms
                </a>

              </div>

            </div>


            {/* =================================================
                HERO IMAGE — ERP IMPLEMENTATION
                Replace this path with your own image if needed:
                public/assets/erp-implementation.png
            ================================================= */}

            <div className="relative min-h-[520px] overflow-hidden rounded-[40px] border border-white/10 bg-[#f8fbff] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-6">

              {/* Decorative frame */}
              <div className="absolute inset-4 rounded-[30px] border border-cyan-300/15 sm:inset-6" />

              <div className="relative flex h-[488px] items-center justify-center overflow-hidden rounded-[30px] bg-white/5 sm:h-[488px]">

                <img
                  src="/assets/hero-ai-erp.png"
                  alt="ERP implementation and ARTEMIS transformation"
                  className="max-h-full max-w-full object-contain p-3 sm:p-5"
                />

                <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/10" />

                <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-[#1677ff]/75 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md">
                  ERP Transformation
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PLATFORM + PROVEN TRACK RECORD
      ===================================================== */}

      <section
        id="platforms"
        className="relative overflow-hidden bg-[#eef6ff]"
      >

        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16">

          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* LEFT */}

            <div>

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#168be7]">
                Proven ERP Expertise
              </span>

              <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#07172f] sm:text-6xl">

                One transformation.

                <span className="block text-[#2776e8]">
                  Multiple platforms.
                </span>

              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#536984]">
                Strategic ERP consulting, implementation and support
                across the world&apos;s leading enterprise platforms.
              </p>


              <div className="mt-8 border-l-[3px] border-[#2875e8] pl-6">

                <p className="leading-7 text-[#536984]">
                  Traditional ERP relies heavily on consultant-driven
                  delivery models and long implementation timelines.
                </p>

                <p className="mt-3 font-semibold leading-7 text-[#1a3556]">
                  Our structured ARTEMIS approach systematizes expertise
                  and creates a more predictable delivery experience.
                </p>

              </div>

            </div>


            {/* RIGHT */}

            <div>

              <div className="mb-7">

                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#168be7]">
                  Our ERP Platforms
                </span>

              </div>


              {/* LOGOS */}

              <div className="grid grid-cols-3 gap-4">

                {/* ORACLE */}

                <div className="flex h-28 items-center justify-center rounded-[22px] bg-white px-5 shadow-[0_15px_40px_rgba(20,70,120,0.08)]">

                  <img
                    src="/assets/Oracle5 .jpg"
                    alt="Oracle"
                    className="max-h-16 max-w-full object-contain"
                  />

                </div>


                {/* MICROSOFT */}

                <div className="flex h-28 items-center justify-center rounded-[22px] bg-white px-5 shadow-[0_15px_40px_rgba(20,70,120,0.08)]">

                  <img
                    src="/assets/microsoft.jfif"
                    alt="Microsoft Dynamics 365"
                    className="max-h-16 max-w-full object-contain"
                  />

                </div>


                {/* SAP */}

                <div className="flex h-28 items-center justify-center rounded-[22px] bg-white px-5 shadow-[0_15px_40px_rgba(20,70,120,0.08)]">

                  <img
                    src="/assets/SAP.jpg"
                    alt="SAP"
                    className="max-h-16 max-w-full object-contain"
                  />

                </div>

              </div>


              {/* TRACK RECORD */}

              <div className="mt-8">

                <h3 className="text-3xl font-black tracking-[-0.04em] text-[#07172f]">
                  Proven Track Record
                </h3>

                <p className="mt-3 text-[#5c708c]">
                  Proven ERP consulting services from strategy to go-live.
                </p>

              </div>


              <div className="mt-7 grid grid-cols-2 gap-4">

                {[
                  ["13+", "Years of Experience"],
                  ["40+", "Countries Served"],
                  ["Multi-", "Platform"],
                  ["$ Millions", "Delivered in Savings"],
                ].map(([value, label]) => (

                  <div
                    key={label}
                    className="group rounded-[26px] bg-[#236be8] p-7 text-white transition duration-300 hover:-translate-y-2 hover:bg-[#155bd0]"
                  >

                    <div className="text-3xl font-black">
                      {value}
                    </div>

                    <div className="mt-3 text-sm leading-6 text-[#07172f]/75">
                      {label}
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTEMIS SECTION
          White + blue redesign
          Horizontal 1–7 navigation
          Large image LEFT + matter RIGHT
          Automatic rotation pauses on hover
      ===================================================== */}

      <section
        id="artemis"
        className="relative overflow-hidden bg-white"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16">

          {/* HEADER */}
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#1677ff]">
              The ARTEMIS Methodology
            </span>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#07172f] sm:text-6xl lg:text-7xl">
              Seven tools.
              <span className="block text-[#1677ff]">
                One connected system.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b6f88]">
              Seven specialized tools systematize ERP expertise,
              reduce consultant dependency and create a more
              consistent implementation experience.
            </p>
          </div>

          {/* =================================================
              HORIZONTAL TOOL NAVIGATION
          ================================================= */}
          <div
            className="mt-14 overflow-x-auto pb-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid min-w-[900px] grid-cols-7 gap-2 rounded-2xl border border-[#1677ff]/15 bg-[#f8fbff] p-2">
              {tools.map((tool) => {
                const active = activeTool === tool.id;

                return (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => setActiveTool(tool.id)}
                    className={`rounded-xl px-3 py-4 text-center transition-all duration-300 ${
                      active
                        ? "bg-[#1677ff] text-white shadow-[0_10px_25px_rgba(22,119,255,0.18)]"
                        : "bg-white text-[#425a75] hover:bg-[#eef6ff] hover:text-[#1265d8]"
                    }`}
                  >
                    <span className="block text-[10px] font-black tracking-[0.18em] opacity-60">
                      {tool.number}
                    </span>
                    <span className="mt-1 block text-sm font-black">
                      {tool.name}
                    </span>
                    <span className="mt-1 block truncate text-[10px] font-medium opacity-70">
                      {tool.short}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              TOOL SHOWCASE
              IMAGE LEFT / MATTER RIGHT
          ================================================= */}
          <div
            className="mt-7 overflow-hidden rounded-[32px] border border-[#1677ff]/15 bg-white shadow-[0_25px_70px_rgba(18,55,100,0.10)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid lg:grid-cols-[1.18fr_0.82fr]">

              {/* IMAGE */}
              <div className="relative flex min-h-[480px] items-center justify-center border-b border-[#1677ff]/10 bg-[#f8fbff] p-5 sm:p-8 lg:min-h-[620px] lg:border-b-0 lg:border-r">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[26px] border border-[#1677ff]/12 bg-white p-4 shadow-[0_15px_45px_rgba(18,55,100,0.08)] sm:p-7">

                  <img
                    key={selectedTool.image}
                    src={selectedTool.image}
                    alt={`${selectedTool.name} — ${selectedTool.short}`}
                    className="block max-h-[560px] w-full object-contain object-center transition-all duration-500"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-[#1677ff]/10" />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-[#1677ff] shadow-[0_8px_24px_rgba(18,55,100,0.10)] ring-1 ring-[#1677ff]/10">
                    {selectedTool.number} · {selectedTool.name}
                  </div>
                </div>
              </div>

              {/* MATTER */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                <div className="inline-flex w-fit rounded-full border border-[#1677ff]/15 bg-[#eef6ff] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#1677ff]">
                  {selectedTool.short}
                </div>

                <h3 className="mt-5 text-4xl font-black tracking-[-0.045em] text-[#07172f] sm:text-5xl">
                  {selectedTool.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-[#5b6f88]">
                  {selectedTool.description}
                </p>

                <div className="mt-8">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-[#8091a7]">
                    Key Capabilities
                  </div>

                  <div className="mt-5 space-y-3">
                    {selectedTool.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-start gap-3 rounded-xl border border-[#1677ff]/10 bg-[#f8fbff] px-4 py-3 text-sm leading-6 text-[#425a75]"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1677ff] text-xs font-black text-[#07172f]">
                          ✓
                        </span>
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap items-end justify-between gap-6 border-t border-[#1677ff]/10 pt-7">
                  <div>
                    <div className="text-4xl font-black text-[#1677ff]">
                      {selectedTool.metric}
                    </div>
                    <div className="mt-2 text-sm text-[#8091a7]">
                      {selectedTool.metricLabel}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const nextIndex =
                        (tools.findIndex(
                          (tool) => tool.id === selectedTool.id
                        ) +
                          1) %
                        tools.length;

                      setActiveTool(tools[nextIndex].id);
                    }}
                    className="rounded-full bg-[#1677ff] px-6 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#075dcc]"
                  >
                    Next Tool →
                  </button>
                </div>

                <div className="mt-5 text-xs font-semibold text-[#94a3b8]">
                  {isPaused
                    ? "Paused — move the cursor away to continue"
                    : "Automatically changing every 6 seconds"}
                </div>
              </div>
            </div>
          </div>

          {/* TOOL SUMMARY */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["7", "Integrated ARTEMIS tools"],
              ["70–95%", "Reduced consultant dependency"],
              ["30–40%", "Faster implementation"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[22px] border border-[#1677ff]/10 bg-[#f8fbff] p-6"
              >
                <div className="text-2xl font-black text-[#1677ff]">
                  {value}
                </div>
                <div className="mt-2 text-sm text-[#71839a]">
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          WHY WE EXCEL
      ===================================================== */}

      <section
        id="advantages"
        className="bg-white"
      >

        <div className="mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:px-16">

          <div className="mb-16 max-w-4xl">

            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#168be7]">
              Why We Excel In ERP Services
            </span>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#07172f] sm:text-6xl">

              Expertise that turns

              <span className="text-[#2776e8]">
                {" "}complexity into progress.
              </span>

            </h2>

          </div>


          <div className="grid gap-6 lg:grid-cols-3">

            {[
              {
                number: "01",
                title: "Efficient ERP Process Mapping & Selection",
                description:
                  "We map enterprise capabilities and business processes at both broad and granular levels, enabling better ERP selection.",
                image: "/assets/desktop.png",
              },

              {
                number: "02",
                title: "Accelerated Implementation",
                description:
                  "Our methodologies and accelerators streamline ERP implementation and support a more efficient transition.",
                image: "/assets/desktop-2.png",
              },

              {
                number: "03",
                title: "Expert ERP Specialists",
                description:
                  "Our certified specialists bring deep practical expertise across Oracle ERP, SAP and Microsoft Dynamics.",
                image: "/assets/meeting.jfif",
              },
            ].map((item) => (

              <article
                key={item.number}
                className="group overflow-hidden rounded-[30px] bg-[#f2f7fd] transition duration-500 hover:-translate-y-2"
              >

                {/* IMAGE SPACE */}

                <div className="relative h-[310px] overflow-hidden bg-[#eaf3fb] p-4">

                  <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[22px] bg-white shadow-inner">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain p-5 transition duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-slate-200/80" />

                  </div>

                  <div className="absolute left-7 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#07172f]/90 text-xs font-black text-[#1677ff] shadow-lg backdrop-blur-md">
                    {item.number}
                  </div>

                </div>


                <div className="p-8">

                  <h3 className="text-2xl font-black leading-tight text-[#07172f]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#61738d]">
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS VALUE
      ===================================================== */}

      <section className="overflow-hidden bg-[#f2f7fc]">

        <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 lg:px-16">

          <div className="text-center">

            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#168be7]">
              Our Competitive Advantage
            </span>

            <h2 className="mx-auto mt-5 max-w-5xl text-5xl font-black tracking-[-0.055em] text-[#07172f] sm:text-6xl">

              Where ERP Strategy

              <span className="text-[#2877e8]">
                {" "}Meets Business Value
              </span>

            </h2>

          </div>


          <div className="mt-20 grid gap-x-20 gap-y-16 md:grid-cols-2">

            {[
              {
                number: "01",
                title: "ERP Accelerators",
                text: "ERP accelerators help deliver faster ERP system implementations.",
              },

              {
                number: "02",
                title: "Platform Expertise",
                text: "Expertise across Microsoft Dynamics, SAP and Oracle supports reliable ERP implementation.",
              },

              {
                number: "03",
                title: "Automation Testing",
                text: "Automation testing improves precision, stability and ERP performance.",
              },

              {
                number: "04",
                title: "Global Delivery",
                text: "Global ERP delivery combines deep expertise with a cost-conscious approach.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="group flex gap-6"
              >

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2877e8] text-sm font-black text-[#07172f] transition duration-300 group-hover:scale-110 group-hover:bg-[#07172f]">
                  {item.number}
                </div>


                <div>

                  <h3 className="text-2xl font-black text-[#07172f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-[#61738d]">
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPETENCIES
      ===================================================== */}

      <section
        id="competencies"
        className="bg-white"
      >

        <div className="mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:px-16">

          <div className="text-center">

            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#168be7]">
              Platform Expertise
            </span>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-[#07172f] sm:text-6xl">
              Our Competencies
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#61738d]">
              Strategic consulting, implementation and support
              across leading enterprise platforms.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* ORACLE */}

            <article className="group rounded-[30px] bg-[#f3f7fc] p-8 transition duration-500 hover:-translate-y-2 hover:bg-[#eaf3ff]">

              <div className="flex h-40 items-center justify-center">

                <img
                  src="/assets/Oracle5 .jpg"
                  alt="Oracle"
                  className="max-h-28 max-w-[85%] object-contain"
                />

              </div>

              <h3 className="mt-7 text-2xl font-black text-[#07172f]">
                Oracle
              </h3>

              <p className="mt-4 leading-7 text-[#61738d]">
                Strategic Oracle ERP consulting, implementation and
                support to optimize operations, reduce costs and drive growth.
              </p>

              <a
                href="/oracle"
                className="mt-7 inline-flex font-black text-[#2877e8]"
              >
                Explore Oracle →
              </a>

            </article>


            {/* MICROSOFT */}

            <article className="group rounded-[30px] bg-[#f3f7fc] p-8 transition duration-500 hover:-translate-y-2 hover:bg-[#eaf3ff]">

              <div className="flex h-40 items-center justify-center">

                <img
                  src="/assets/microsoft.jfif"
                  alt="Microsoft Dynamics 365"
                  className="max-h-28 max-w-[85%] object-contain"
                />

              </div>

              <h3 className="mt-7 text-2xl font-black text-[#07172f]">
                Microsoft Dynamics
              </h3>

              <p className="mt-4 leading-7 text-[#61738d]">
                Strategic consulting and resource augmentation for
                Microsoft Dynamics to improve efficiency and scalability.
              </p>

              <a
                href="/microsoft-dynamics"
                className="mt-7 inline-flex font-black text-[#2877e8]"
              >
                Explore Dynamics →
              </a>

            </article>


            {/* SAP */}

            <article className="group rounded-[30px] bg-[#f3f7fc] p-8 transition duration-500 hover:-translate-y-2 hover:bg-[#eaf3ff]">

              <div className="flex h-40 items-center justify-center">

                <img
                  src="/assets/SAP.jpg"
                  alt="SAP"
                  className="max-h-28 max-w-[85%] object-contain"
                />

              </div>

              <h3 className="mt-7 text-2xl font-black text-[#07172f]">
                SAP
              </h3>

              <p className="mt-4 leading-7 text-[#61738d]">
                Strategic consulting, implementation and SAP ERP
                support to deliver scalable, cost-effective solutions.
              </p>

              <a
                href="/sap"
                className="mt-7 inline-flex font-black text-[#2877e8]"
              >
                Explore SAP →
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#07172f]"
      >

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />


        <div className="relative mx-auto max-w-[1200px] px-6 py-28 text-center sm:px-10">

          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#1677ff]">
            Start Your Transformation
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-black tracking-[-0.055em] text-[#07172f] sm:text-6xl">
            Ready to transform your ERP journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5b6f88]">
            Talk with our ERP specialists about your implementation,
            platform strategy and transformation goals.
          </p>

          <div className="mt-10">

            <a
              href="/contact"
              className="inline-flex rounded-full bg-[#1677ff] px-8 py-4 font-black text-[#07172f] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Talk to an Expert →
            </a>

          </div>

        </div>

      </section>


    </main>
  );
}