"use client";

/*
  ERP TESTING AUTOMATION — WHITE + BLUE REDESIGN

  IMPORTANT:
  - This page keeps the same visible content/data from:
    https://pptcorporation.com/erp-testing/
  - The design/layout is reconstructed in a cleaner white + blue
    enterprise style.
  - Your global Header and Footer come from app/layout.tsx.
    Do NOT add another Header or Footer here.

  IMAGE SOURCES — replace only the src values
  --------------------------------------------
  Main Application Testing image:
  "PASTE-YOUR-IMAGE-SOURCE-LINK-HERE"

  Success Story 1:
  "PASTE-YOUR-IMAGE-SOURCE-LINK-HERE"

  Success Story 2:
  "PASTE-YOUR-IMAGE-SOURCE-LINK-HERE"

  Success Story 3:
  "PASTE-YOUR-IMAGE-SOURCE-LINK-HERE"

  Success Story 4:
  "PASTE-YOUR-IMAGE-SOURCE-LINK-HERE"
*/

const successStories = [
  {
    number: "01",
    title: "Post Implementation Release Testing on Procurement",
    description:
      "Our automation solutions have reduced procurement release cycles by months using Oracle",
    image: "/assets/D1.webp",
  },
  {
    number: "02",
    title: "Regression Test Automation for SCM and OTC",
    description:
      "Our end-to-end OTC automation enabled customers to complete Oracle application testing",
    image: "/assets/d4.jfif",
  },
  {
    number: "03",
    title: "Functional Automation Testing for Microsoft Dynamics",
    description:
      "Implemented a custom test automation framework for Microsoft Dynamics Finance.",
    image: "/assets/D3.webp",
  },
  {
    number: "04",
    title: "Testing Automation for Revenue Recognition – ASC 606",
    description:
      "Implemented a custom SAP test automation framework to support the Revenue Accounting project",
    image: "/assets/d.jfif",
  },
];

const benefits = [
  {
    number: "01",
    title: "Proven Methodology",
    text:
      "Industry-standard process models ensuring reliable and maintainable test automation solutions.",
  },
  {
    number: "02",
    title: "Cross-Platform Support",
    text:
      "Comprehensive Testing for Microsoft Dynamics, SAP, and Oracle ERP Applications",
  },
  {
    number: "03",
    title: "Immediate Deployment",
    text:
      "Ready-to-use test lab with pre-built scripts for rapid implementation.",
  },
  {
    number: "04",
    title: "Scalable Framework",
    text:
      "Flexible architecture supporting various testing requirements.",
  },
];

export default function TestingAutomationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0a2540]">

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 text-sm font-semibold">
            <a
              href="/"
              className="text-[#5b7691] transition hover:text-[#005eb8]"
            >
              Home
            </a>
            <span className="text-[#a9bfd2]">/</span>
            <span className="text-[#0a2540]">ERP Testing Automation</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          HERO
          EXACT SOURCE CONTENT:
          PPT Application ERP Testing Automation Solutions
          Specialized automated application testing...
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f5faff]">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#005eb8] via-[#31aee8] to-transparent" />
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#0b78d0]/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-[#48c9f5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">

            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#b8d9ee] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#005eb8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#005eb8]" />
                ERP Testing Automation
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-[#0a2540] sm:text-6xl lg:text-[68px]">
                PPT Application ERP Testing Automation Solutions
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#526f8b] sm:text-xl">
                Specialized automated application testing for Microsoft
                Dynamics, Oracle ERP, and SAP with over 2500 proven test
                scripts.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#repository"
                  className="rounded-full bg-[#005eb8] px-7 py-4 text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(0,94,184,.22)] transition hover:-translate-y-1 hover:bg-[#003b7a]"
                >
                  Explore Testing
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#b9d3e7] bg-white px-7 py-4 text-sm font-extrabold text-[#0a2540] transition hover:-translate-y-1 hover:border-[#005eb8] hover:text-[#005eb8]"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* IMAGE SPACE — replace src with your source link */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[36px] bg-[#005eb8]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-[#c9dfef] bg-white p-3 shadow-[0_30px_80px_rgba(13,69,108,.15)]">
                <div className="flex min-h-[390px] items-center justify-center overflow-hidden rounded-[25px] bg-[#eaf5fc] sm:min-h-[500px]">
                  <img
                    src="/assets/erp.png"
                    alt="PPT Application Testing Automation"
                    className="h-full max-h-[500px] w-full object-cover"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION TEST SCRIPT REPOSITORY
      ========================================================= */}
      <section id="repository" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#005eb8] via-[#31aee8] to-[#005eb8]" />
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#0b78d0]/[0.06] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#005eb8]">
              PPT Application Testing Automation
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#0a2540] sm:text-5xl">
              Application Test Script Repository
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#526f8b]">
              Our exclusive repository of over 2500 automated application test
              scripts specifically built for Microsoft Dynamics, Oracle ERP,
              and SAP applications using industry standard and best
              practice-based process models.
            </p>
          </div>

          {/* Exact source metrics/data */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-[#c9dfef] bg-[#f5faff] p-7 text-center shadow-sm">
              <p className="text-4xl font-black text-[#005eb8]">2500+</p>
              <p className="mt-3 text-sm font-bold text-[#385773]">
                ERP Application Test Scripts
              </p>
            </div>

            <div className="rounded-3xl border border-[#c9dfef] bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-black text-[#0a2540]">3</p>
              <p className="mt-3 text-sm font-bold text-[#385773]">
                Major ERP Platforms
              </p>
            </div>

            <div className="rounded-3xl border border-[#c9dfef] bg-[#f5faff] p-7 text-center shadow-sm">
              <p className="text-4xl font-black text-[#005eb8]">100%</p>
              <p className="mt-3 text-sm font-bold text-[#385773]">
                Application Testing Focus
              </p>
            </div>

            <div className="rounded-3xl border border-[#c9dfef] bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-black text-[#0a2540]">24/7</p>
              <p className="mt-3 text-sm font-bold text-[#385773]">
                Ready ERP Test Lab
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          KEY BENEFITS
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-[#cfe5f4] bg-[#f1f8fe]">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#005eb8]/[0.05] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#005eb8]">
              Why PPT
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] text-[#0a2540] sm:text-5xl">
              Key Benefits
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group rounded-[28px] border border-[#c9dfef] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#7dbbe2] hover:shadow-[0_20px_50px_rgba(0,94,184,.10)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005eb8] text-sm font-black text-white">
                  {benefit.number}
                </div>

                <h3 className="mt-7 text-xl font-black text-[#0a2540]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#607b95]">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          SUCCESS STORIES
          Four-card showcase — same stories/data, new presentation.
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#eef7ff]">
        <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#48c9f5]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#005eb8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#b8d9ee] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#005eb8] shadow-sm">
              Client Outcomes
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] text-[#0a2540] sm:text-5xl">
              Success Stories
            </h2>

            <p className="mt-5 text-base leading-7 text-[#607b95] sm:text-lg">
              Explore application testing automation outcomes across Oracle,
              Microsoft Dynamics, and SAP.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {successStories.map((story) => (
              <article
                key={story.number}
                className="group overflow-hidden rounded-[30px] border border-[#c8dfef] bg-white shadow-[0_18px_50px_rgba(0,72,130,.08)] transition duration-300 hover:-translate-y-2 hover:border-[#73b7df] hover:shadow-[0_28px_70px_rgba(0,94,184,.15)]"
              >
                {/* Image area — replace the src in successStories above */}
                <div className="relative h-[250px] overflow-hidden bg-[#dfeff9] sm:h-[290px]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06345d]/75 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005eb8] text-sm font-black text-white shadow-xl">
                    {story.number}
                  </div>

                  <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/95 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#005eb8] shadow-lg">
                    Success Story
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <div className="mb-4 h-1 w-12 rounded-full bg-[#005eb8] transition-all duration-300 group-hover:w-20" />

                  <h3 className="text-2xl font-black leading-tight tracking-[-0.02em] text-[#0a2540]">
                    {story.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#607b95]">
                    {story.description}
                  </p>

                  <a
                    href="/case-studies"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#005eb8] transition group-hover:gap-3"
                  >
                    Click Here
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          CTA — EXACT SOURCE CONTENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#005eb8]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#48c9f5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:py-24">
          <h2 className="text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl">
            Accelerate Your ERP Application Testing
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-blue-50 sm:text-xl">
            Transform your Microsoft Dynamics, Oracle ERP, and SAP application
            ERP testing with our proven automation framework and ready-to-deploy
            test scripts.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black text-[#005eb8] shadow-xl transition hover:-translate-y-1 hover:bg-[#f2f9ff]"
          >
            Contact Us →
          </a>
        </div>
      </section>

    </main>
  );
}