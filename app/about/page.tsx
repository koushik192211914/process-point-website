"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { title: "Competencies", items: [["Oracle", "/oracle"], ["Microsoft Dynamics", "/microsoft-dynamics"], ["SAP", "/sap"]] },
  { title: "Solutions", items: [["ARTEMIS Methodology", "/artemis-methodology"], ["ERP Testing Automation", "/testing-automation"]] },
  { title: "Resources", items: [["Blogs", "/blogs"], ["Events", "/events"], ["Case Studies", "/case-studies"]] },
  { title: "Company", items: [["About Us", "/about"], ["Contact Us", "/contact"]] },
];

const capabilities = [
  {
    number: "01",
    title: "Leading ERP Systems",
    description: "Microsoft Dynamics, SAP, and Oracle ERP.",
    detail: "Our ERP expertise spans leading enterprise platforms, helping organizations move toward more effective business processes.",
    tags: ["Oracle", "SAP", "Microsoft Dynamics"],
  },
  {
    number: "02",
    title: "ARTEMIS Methodologies",
    description: "Enabling faster implementation and optimized system transitions.",
    detail: "ARTEMIS provides a structured approach for improving ERP implementation and system transition outcomes.",
    tags: ["ARTEMIS", "Implementation", "Transformation"],
  },
  {
    number: "03",
    title: "ERP Automation Testing",
    description: "Accuracy, reliability, and performance across ERP applications.",
    detail: "Our testing automation capability is designed to improve confidence in ERP applications throughout their lifecycle.",
    tags: ["Automation", "Reliability", "ERP"],
  },
  {
    number: "04",
    title: "Industry Recognition",
    description: "Recognized by CIO Review as a top 100 Oracle ERP provider.",
    detail: "Process Point's ERP expertise has received industry recognition from CIO Review.",
    tags: ["Recognition", "ERP Expertise", "CIO Review"],
  },
];

export default function AboutPage() {
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [activeCapability, setActiveCapability] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const active = capabilities[activeCapability];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#092747]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#003b7a]">
        <div className="absolute -left-40 -top-40 h-[550px] w-[550px] animate-pulse rounded-full bg-[#00a4df]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[550px] w-[550px] animate-pulse rounded-full bg-[#0079d1]/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
          <div className="max-w-5xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-100 backdrop-blur">About Process Point</span>
            <h1 className="mt-7 text-5xl font-extrabold leading-[1] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Enabling better
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">business processes.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
              We are a reliable ERP consulting firm, specializing in Microsoft Dynamics, SAP, and Oracle ERP.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="group rounded-full bg-white px-7 py-4 text-sm font-bold text-[#005eb8] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Talk to an Expert <span className="ml-2 transition-all duration-300 group-hover:ml-3">→</span>
              </Link>
              <a href="#story" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                Discover Process Point
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-8 w-full rounded-t-[50%] bg-white" />
      </section>

      {/* METRICS */}
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-blue-100 bg-[#f7fbff] md:grid-cols-4">
            {[["13", "Years Experience"], ["40+", "Countries"], ["Global", "ERP Projects"], ["3", "ERP Platforms"]].map(([number, label], index) => (
              <div key={label} className={`group relative p-8 text-center transition-all duration-500 hover:bg-[#005eb8] ${index !== 3 ? "border-b border-blue-100 md:border-b-0 md:border-r" : ""}`}>
                <div className="text-4xl font-black tracking-tight text-[#005eb8] transition-colors duration-500 group-hover:text-white md:text-5xl">{number}</div>
                <div className="mt-3 text-xs font-black uppercase tracking-[0.15em] text-slate-500 transition-colors duration-500 group-hover:text-blue-100">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section id="story" className="bg-[#f7fbff] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-blue-100 bg-[#eaf5ff]">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(0,94,184,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,94,184,.1)_1px,transparent_1px)] [background-size:45px_45px]" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#005eb8]/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative min-h-[520px] overflow-hidden">
              <img
                src="/assets/Gemini_Generated_Image_3nsugf3nsugf3nsu.png"
                alt="Process Point Technologies digital transformation"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003b7a]/35 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#005eb8]">Who We Are</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#003b7a] md:text-5xl">ERP expertise built around business value.</h2>
            <p className="mt-7 text-lg leading-8 text-slate-600">
              We are a reliable ERP consulting firm, specializing in Microsoft Dynamics, SAP, and Oracle ERP. With 13 years of expertise, we have successfully delivered global ERP implementations across 40+ countries, driving efficiency and cost savings.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {["ERP Consulting", "Global Implementations", "System Transitions", "Business Efficiency"].map((item) => (
                <div key={item} className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-sm font-black text-[#005eb8] transition-all duration-300 group-hover:bg-[#005eb8] group-hover:text-white">✓</span>
                    <span className="font-bold text-[#003b7a]">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM TRANSFORMATION ENGINE */}
      <section className="relative overflow-hidden bg-[#f5faff] px-5 py-28 lg:px-8 lg:py-36">
        <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#0077c8]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#00b8e6]/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#005eb8_1px,transparent_1px),linear-gradient(90deg,#005eb8_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-[#005eb8]" />
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#005eb8]">The Process Point Advantage</p>
              </div>
            </div>
            <div>
              <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[#003b7a] sm:text-5xl lg:text-6xl">
                Expertise designed
                <span className="block text-[#005eb8]">around your transformation.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Explore the capabilities that connect enterprise technology, implementation expertise and business outcomes.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="relative">
              <div className="absolute bottom-8 left-[23px] top-8 hidden w-px bg-blue-100 sm:block" />

              <div className="space-y-3">
                {capabilities.map((capability, index) => {
                  const isActive = activeCapability === index;

                  return (
                    <button
                      key={capability.number}
                      onClick={() => setActiveCapability(index)}
                      className={`group relative w-full overflow-hidden rounded-[1.6rem] border text-left transition-all duration-500 ${isActive ? "border-[#005eb8] bg-[#003b7a] shadow-[0_25px_70px_rgba(0,59,122,.22)]" : "border-blue-100 bg-white/90 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"}`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-[#005eb8] to-[#008ed3] transition-transform duration-700 ${isActive ? "translate-x-0" : "-translate-x-full"}`} />

                      <div className="relative flex items-center gap-5 p-5 sm:p-6">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xs font-black transition-all duration-500 ${isActive ? "bg-white text-[#005eb8] shadow-lg" : "bg-[#edf6ff] text-[#005eb8] group-hover:bg-[#005eb8] group-hover:text-white"}`}>
                          {capability.number}
                        </div>

                        <div className="min-w-0">
                          <p className={`text-lg font-extrabold transition-colors duration-500 ${isActive ? "text-white" : "text-[#003b7a]"}`}>{capability.title}</p>
                          <p className={`mt-1 line-clamp-1 text-sm transition-colors duration-500 ${isActive ? "text-blue-100" : "text-slate-500"}`}>{capability.description}</p>
                        </div>

                        <span className={`ml-auto shrink-0 text-xl transition-all duration-500 ${isActive ? "translate-x-0 text-white" : "-translate-x-2 text-[#005eb8] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}>→</span>
                      </div>

                      <div className={`absolute bottom-0 left-0 h-[3px] bg-cyan-300 transition-all duration-700 ${isActive ? "w-full" : "w-0"}`} />
                    </button>
                  );
                })}
              </div>

              <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.15em] text-slate-400 sm:hidden">Tap a capability to explore</p>
            </div>

            <div className="relative min-h-[590px] overflow-hidden rounded-[2.5rem] bg-[#003b7a] shadow-[0_30px_90px_rgba(0,59,122,.22)]">
              <div className="absolute -right-32 -top-32 h-[420px] w-[420px] animate-pulse rounded-full bg-[#00a4df]/20 blur-[90px]" />
              <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] animate-pulse rounded-full bg-[#006ed0]/30 blur-[100px]" />
              <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:50px_50px]" />

              <div className="absolute right-7 top-4 select-none text-[130px] font-black leading-none text-white/[0.035] sm:text-[180px]">{active.number}</div>

              <div className="absolute right-[12%] top-[18%] hidden h-[180px] w-[180px] sm:block">
                <div className="absolute left-1/2 top-1/2 h-px w-[180px] origin-left rotate-[25deg] bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-px w-[150px] origin-left rotate-[155deg] bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-px w-[120px] origin-left rotate-[275deg] bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,.9)]" />
              </div>

              <div key={activeCapability} className="relative flex min-h-[590px] flex-col justify-between p-8 sm:p-12 lg:p-14">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">Capability {active.number}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">Process Point</span>
                  </div>

                  <h3 className="mt-14 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{active.title}</h3>
                  <p className="mt-7 max-w-2xl text-xl leading-9 text-blue-100">{active.description}</p>

                  <div className="mt-9 max-w-2xl border-l-2 border-cyan-300/60 pl-5">
                    <p className="text-base leading-8 text-blue-100/80">{active.detail}</p>
                  </div>
                </div>

                <div className="mt-14">
                  <div className="flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur">{tag}</span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <Link href="/contact" className="group inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#005eb8] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      Talk to our team
                      <span className="ml-2 transition-all duration-300 group-hover:ml-3">→</span>
                    </Link>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">Explore capability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-blue-100 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">One connected ecosystem</p>
            <div className="flex items-center gap-2">
              {capabilities.map((_, index) => (
                <button
                  key={index}
                  aria-label={`View capability ${index + 1}`}
                  onClick={() => setActiveCapability(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${activeCapability === index ? "w-10 bg-[#005eb8]" : "w-2 bg-blue-200 hover:bg-blue-400"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7fbff] px-5 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#003b7a] px-7 py-16 text-center shadow-[0_30px_80px_rgba(0,59,122,.2)] sm:px-12 lg:py-20">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#00a4df]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#0079d1]/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Process Point Technologies</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Ready to move your business forward?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-blue-100">Let's connect and explore how we can support your business success.</p>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#005eb8] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}