"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const groups = [
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

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* =====================================================
            LOGO + COMPANY NAME
        ===================================================== */}

        <Link
          href="/"
          onClick={() => {
            setMobile(false);
            setOpen(null);
          }}
          className="group flex items-center gap-3"
        >
          {/* LOGO */}

          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-blue-100">
            <img
              src="https://pptcorporation.com/wp-content/uploads/2025/03/cropped-logo-1.jpg"
              alt="Process Point Technologies"
              className="h-full w-full object-contain"
            />
          </div>

          {/* COMPANY NAME */}

          <div className="hidden sm:block">
            <p className="text-[17px] font-extrabold tracking-tight text-[#003b7a]">
              Process Point Technologies
            </p>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Enabling Business Processes
            </p>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden items-center gap-1 lg:flex">

          {groups.map((group) => (
            <div
              key={group.name}
              className="relative"
              onMouseEnter={() => setOpen(group.name)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(
                    open === group.name
                      ? null
                      : group.name
                  )
                }
                className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-all duration-300 ${
                  open === group.name
                    ? "bg-blue-50 text-[#005eb8]"
                    : "text-[#183b5d] hover:bg-blue-50 hover:text-[#005eb8]"
                }`}
              >
                {group.name}

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    open === group.name
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}

              {open === group.name && (
                <div className="absolute left-0 top-full w-72 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white p-2 shadow-2xl">

                    {group.items.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(null)}
                        className="group flex items-center justify-between rounded-xl px-4 py-4 text-sm font-bold text-[#003b7a] transition-all duration-300 hover:bg-[#f0f8ff] hover:text-[#005eb8]"
                      >
                        <span>{label}</span>

                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </div>
          ))}

          {/* =================================================
              TALK TO EXPERT
          ================================================= */}

          <Link
            href="/contact"
            className="ml-3 rounded-full bg-[#005eb8] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#003b7a]"
          >
            Talk to an Expert →
          </Link>

        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          aria-label={
            mobile
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() => {
            setMobile(!mobile);
            setOpen(null);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 text-[#003b7a] lg:hidden"
        >
          {mobile ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {mobile && (
        <div className="border-t border-blue-100 bg-white px-5 py-5 lg:hidden">

          {groups.map((group) => (
            <div
              key={group.name}
              className="border-b border-blue-50 py-2"
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(
                    open === group.name
                      ? null
                      : group.name
                  )
                }
                className="flex w-full items-center justify-between py-3 text-sm font-bold text-[#003b7a]"
              >
                {group.name}

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    open === group.name
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {open === group.name && (
                <div className="pb-2 pl-3">

                  {group.items.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => {
                        setMobile(false);
                        setOpen(null);
                      }}
                      className="flex items-center justify-between py-3 text-sm font-semibold text-slate-600 hover:text-[#005eb8]"
                    >
                      {label}

                      <ArrowUpRight size={14} />
                    </Link>
                  ))}

                </div>
              )}
            </div>
          ))}

          {/* MOBILE CTA */}

          <Link
            href="/contact"
            onClick={() => {
              setMobile(false);
              setOpen(null);
            }}
            className="mt-5 block rounded-full bg-[#005eb8] px-6 py-4 text-center text-sm font-bold text-white"
          >
            Talk to an Expert →
          </Link>

        </div>
      )}

    </header>
  );
}