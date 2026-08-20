"use client";

import { useState } from "react";

const offices = {
  USA: {
    label: "USA",
    city: "Warrenville, Illinois",
    address: (
      <>
        4320 Winfield Road
        <br />
        Canterra Development, Suite 200
        <br />
        Warrenville, IL 60555, USA
      </>
    ),
    map: "https://maps.google.com/maps?q=4320%20Winfield%20Road%20Canterra%20Development%2C%20Suite%20200%2C%20Warrenville%2C%20IL%2060555%2C%20USA&t=m&z=10&output=embed&iwloc=near",
  },
  INDIA: {
    label: "INDIA",
    city: "Hyderabad, Telangana",
    address: (
      <>
        Serenity Square 3rd floor
        <br />
        Mindspace Hitech City
        <br />
        Hyderabad, Telangana 500081
      </>
    ),
    map: "https://www.google.com/maps?q=Serenity%20Square%20Mindspace%20Hitech%20City%20Hyderabad%20Telangana%20500081&output=embed",
  },
};

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

export default function ContactPage() {
  const [office, setOffice] = useState<"USA" | "INDIA">("USA");
  const [submitted, setSubmitted] = useState(false);

  const selectedOffice = offices[office];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7fbff] text-[#092747]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#003b7a]">

        {/* animated circles */}

        <div className="absolute -left-40 -top-40 h-[550px] w-[550px] animate-pulse rounded-full bg-[#00a4df]/20 blur-3xl" />

        <div
          className="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-[#0079d1]/20 blur-3xl"
          style={{
            animation: "float 8s ease-in-out infinite",
          }}
        />

        {/* grid */}

        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="relative mx-auto max-w-5xl px-5 py-28 text-center lg:py-36">

          <div
            className="animate-[fadeUp_.8s_ease-out]"
          >

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-100 backdrop-blur">
              Process Point Technologies
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-[1] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">

              Let&apos;s discuss your

              <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                ERP transformation.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
              We are here to assist you with your digital transformation
              needs.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <a
                href="#consultation"
                className="group rounded-full bg-white px-7 py-4 text-sm font-bold text-[#005eb8] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Start a conversation
                <span className="ml-2 transition-all duration-300 group-hover:ml-3">
                  →
                </span>
              </a>

              <a
                href="tel:+16308165320"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                +1 630 816 5320
              </a>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 h-8 w-full rounded-t-[50%] bg-[#f7fbff]" />

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-[#f7fbff] px-5 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#005eb8]">
                Contact Us
              </p>
            </div>

            <div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#003b7a] md:text-5xl">
                Let&apos;s connect and explore how we can help.
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
                Whether you&apos;re looking for expert ERP consulting,
                an assessment of your current setup, support with
                implementation, or reliable ongoing services — our team
                is here to help. Let&apos;s connect and explore how we can
                support your business success.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTERACTIVE GLOBAL OFFICES
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-20 lg:px-8 lg:py-28">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#005eb8]">
            Global Presence
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-[#003b7a] md:text-5xl">
            We have global offices in the USA and India.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-7 text-slate-500">
            Select an office to explore our location.
          </p>


          {/* OFFICE BUTTONS */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            {(["USA", "INDIA"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setOffice(key)}
                className={`group rounded-3xl border p-7 text-left transition-all duration-500 ${
                  office === key
                    ? "border-[#005eb8] bg-[#005eb8] text-white shadow-[0_25px_60px_rgba(0,94,184,.22)]"
                    : "border-blue-100 bg-[#f8fbff] text-[#003b7a] hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                }`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p
                      className={`text-xs font-black uppercase tracking-[0.18em] ${
                        office === key
                          ? "text-cyan-200"
                          : "text-[#005eb8]"
                      }`}
                    >
                      {offices[key].label}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold">
                      {offices[key].city}
                    </h3>

                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 ${
                      office === key
                        ? "bg-white/15"
                        : "bg-blue-100 group-hover:bg-[#005eb8] group-hover:text-white"
                    }`}
                  >
                    ◎
                  </div>

                </div>

              </button>
            ))}

          </div>


          {/* ACTIVE OFFICE */}

          <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-blue-100 bg-[#f7fbff] shadow-[0_25px_70px_rgba(0,80,140,.08)] lg:grid-cols-[0.8fr_1.2fr]">

            {/* DETAILS */}

            <div className="p-8 md:p-10">

              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.15em] text-[#005eb8]">
                {selectedOffice.label}
              </div>

              <h3 className="mt-5 text-3xl font-extrabold text-[#003b7a]">
                {selectedOffice.city}
              </h3>

              <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm">

                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#005eb8]">
                  Office Address
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {selectedOffice.address}
                </p>

              </div>

              <a
                href="mailto:sales@pptcorporation.com"
                className="mt-5 block rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#005eb8]">
                  Email
                </p>

                <p className="mt-2 font-extrabold text-[#003b7a]">
                  sales@pptcorporation.com
                </p>

              </a>

            </div>


            {/* MAP */}

            <div className="relative min-h-[400px] overflow-hidden">

              <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-[#003b7a] shadow-lg backdrop-blur">
                {selectedOffice.city}
              </div>

              <iframe
                key={selectedOffice.map}
                title={`${selectedOffice.label} Process Point Office`}
                src={selectedOffice.map}
                loading="lazy"
                className="h-full min-h-[400px] w-full border-0 grayscale-[0.15] transition-all duration-700"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT DETAILS + CONSULTATION
      ===================================================== */}

      <section
        id="consultation"
        className="bg-[#f7fbff] px-5 py-24 lg:px-8 lg:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT */}

          <div className="space-y-5">

            {/* PHONE */}

            <a
              href="tel:+16308165320"
              className="group block rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#005eb8]">
                Call Us
              </p>

              <div className="mt-4 flex items-center justify-between">

                <p className="text-2xl font-extrabold text-[#003b7a]">
                  +1 630 816 5320
                </p>

                <span className="text-2xl text-[#005eb8] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </div>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:sales@pptcorporation.com"
              className="group block rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#005eb8]">
                Email Us
              </p>

              <div className="mt-4 flex items-center justify-between gap-4">

                <p className="break-all text-xl font-extrabold text-[#003b7a]">
                  sales@pptcorporation.com
                </p>

                <span className="shrink-0 text-2xl text-[#005eb8] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </div>

            </a>


            {/* EXPERTISE */}

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#003b7a] via-[#005eb8] to-[#008bd0] p-8 text-white shadow-xl">

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

              <div className="relative">

                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Our Expertise
                </p>

                <p className="mt-5 text-lg leading-8 text-blue-100">
                  Oracle ERP, Microsoft Dynamics, SAP, ERP accelerators,
                  and application testing automation.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Oracle",
                    "SAP",
                    "Dynamics",
                    "Testing",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* FORM */}

          <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-[0_25px_80px_rgba(20,76,119,.1)] md:p-10">

            {!submitted ? (

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#005eb8]">
                  Request a Consultation
                </p>

                <h2 className="mt-4 text-3xl font-extrabold text-[#003b7a] md:text-4xl">
                  Tell us how we can help.
                </h2>

                <p className="mt-4 leading-7 text-slate-500">
                  Share your requirements and our team can explore the
                  right path forward.
                </p>


                <div className="mt-9 grid gap-5 md:grid-cols-2">

                  <Field
                    label="First Name"
                    placeholder="Enter your first name"
                    required
                  />

                  <Field
                    label="Last Name"
                    placeholder="Enter your last name"
                    required
                  />

                  <Field
                    label="Work Email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />

                  <Field
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 000 000 0000"
                  />

                </div>


                <label className="mt-5 block text-sm font-bold text-slate-600">

                  How can we help?

                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us about your ERP requirements..."
                    className="mt-2 w-full resize-none rounded-2xl border border-blue-100 bg-[#fbfdff] px-5 py-4 text-[#003b7a] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-[#005eb8] focus:ring-4 focus:ring-[#005eb8]/10"
                  />

                </label>


                <button
                  type="submit"
                  className="group mt-7 rounded-full bg-[#005eb8] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all duration-300 hover:-translate-y-1 hover:bg-[#003b7a] hover:shadow-xl"
                >
                  Send Request
                  <span className="ml-2 transition-all duration-300 group-hover:ml-3">
                    →
                  </span>
                </button>

              </form>

            ) : (

              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#005eb8] text-2xl text-white shadow-lg">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-extrabold text-[#003b7a]">
                  Thank you.
                </h2>

                <p className="mt-4 max-w-md leading-7 text-slate-500">
                  Your request has been captured by the website form.
                  Connect this form to your backend or email service
                  before production deployment.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-bold text-[#005eb8]"
                >
                  Submit another request
                </button>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#f7fbff] px-5 pb-24 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#003b7a] px-7 py-16 text-center shadow-[0_30px_80px_rgba(0,59,122,.2)] sm:px-12 lg:py-20">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#00a4df]/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#0079d1]/20 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              Process Point Technologies
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to move your business forward?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-blue-100">
              Let&apos;s connect and explore how we can support your
              business success.
            </p>

            <a
              href="#consultation"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#005eb8] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Talk to an Expert →
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          ANIMATION CSS
      ===================================================== */}

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -25px, 0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

    </main>
  );
}


/* ============================================================
   FORM FIELD
============================================================ */

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-bold text-slate-600">

      {label}

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-blue-100 bg-white px-5 py-4 text-[#003b7a] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-[#005eb8] focus:ring-4 focus:ring-[#005eb8]/10"
      />

    </label>
  );
}