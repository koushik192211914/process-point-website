 "use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
  {
    date: "June 2, 2025",
    category: "Oracle",
    title: "From Legacy to Oracle EBS: How to Modernize Without Disrupting Operations",
    description:
      "Upgrade from legacy systems to Oracle EBS for better efficiency, visibility, and agility. Explore phases, challenges, and best practices.",
    image:
      "https://pptcorporation.com/wp-content/uploads/2025/07/R9J5uzraRWbyEV1W8yFST-1.png",
    href: "https://pptcorporation.com/from-legacy-to-oracle-ebs-how-to-modernize-without-disrupting-operations/",
  },
  {
    date: "June 9, 2025",
    category: "Oracle",
    title: "Oracle Cloud ERP vs. Oracle EBS: What’s Best for Your Business in 2025?",
    description:
      "Compare Oracle Cloud ERP vs. E-Business Suite in 2025—explore differences in cost, scalability, security, and more for smart decisions.",
    image:
      "https://pptcorporation.com/wp-content/uploads/2025/07/R9J5uzraRWbyEV1W8yFST-1.png",
    href: "https://pptcorporation.com/oracle-cloud-erp-vs-oracle-ebs/",
  },
  {
    date: "June 13, 2025",
    category: "Oracle",
    title: "Top 5 Challenges in Migrating On-Premises ERPs to Oracle Cloud ERP",
    description:
      "Transitioning to Oracle Cloud ERP offers innovation but brings challenges like data, adoption, and security; learn strategies to overcome them.",
    image:
      "/assets/june 13.webp",
    href: "https://pptcorporation.com/top-5-challenges-in-migrating-on-premises-erps-to-oracle-cloud-erp/",
  },
  {
    date: "June 16, 2025",
    category: "Microsoft Dynamics",
    title: "Migrating to Microsoft Dynamics 365: What You Need to Know",
    description:
      "Transform your business with Dynamics 365—unify operations, boost customer experience, and explore benefits, challenges, and migration best practices.",
    image:
      "https://pptcorporation.com/wp-content/uploads/2025/07/N2_EIw5r82ZuOeui94ppd.png",
    href: "https://pptcorporation.com/migrating-to-microsoft-dynamics-365/",
  },
  {
    date: "June 20, 2025",
    category: "Microsoft Dynamics",
    title: "Why Businesses Are Moving from Microsoft NAV/AX to Dynamics 365",
    description:
      "Organizations shift from legacy NAV and AX to Dynamics 365 for scalability, integration, and modern features—explore benefits, challenges, and strategies.",
    image:
      "/assets/june20.webp",
    href: "https://pptcorporation.com/why-businesses-are-moving-from-microsoft-nav-ax-to-dynamics-365/",
  },
  {
    date: "June 23, 2025",
    category: "Microsoft Dynamics",
    title: "Dynamics 365 vs. Legacy ERP: A Strategic Comparison for Today’s Businesses",
    description:
      "Explore key differences between Dynamics 365 and legacy ERP systems to choose the right fit for your business needs.",
    image:
      "/assets/june23.webp",
    href: "https://pptcorporation.com/dynamics-365-vs-legacy-erp/",
  },
  {
    date: "June 27, 2025",
    category: "SAP",
    title: "A Beginner’s Guide to SAP Modules: MM, SD, FICO, HR, and More",
    description:
      "New to SAP? Discover key modules like MM, SD, FICO, and HR that streamline business processes across industries.",
    image:
      "/assets/june27.webp",
    href: "https://pptcorporation.com/a-beginners-guide-to-sap-modules/",
  },
  {
    date: "June 30, 2025",
    category: "SAP",
    title: "SAP vs. Oracle ERP: Which Platform Fits Your Business Strategy?",
    description:
      "Compare SAP vs. Oracle ERP—explore differences in deployment, features, and industry fit to choose the best solution for your business.",
    image:
      "https://pptcorporation.com/wp-content/uploads/2025/07/4cETURE8SOf3G1DgljHoo.png",
    href: "https://pptcorporation.com/sap-vs-oracle-erp-blog/",
  },
  {
    date: "July 3, 2025",
    category: "SAP",
    title: "SAP ECC vs. S/4HANA: What’s the Real Difference?",
    description:
      "With ECC support ending by 2027, explore key differences between ECC and S/4HANA to guide your migration and digital transformation.",
    image:
      "/assets/july3.webp",
    href: "https://pptcorporation.com/sap-ecc-vs-s-4hana/",
  },
  {
    date: "July 7, 2025",
    category: "Oracle",
    title: "From Spreadsheets to HCM Cloud: The HR Digital Transformation Journey",
    description:
      "Discover how HR teams transform from manual processes to intelligent automation with HCM Cloud, overcoming legacy system challenges.",
    image:
      "/assets/july7.webp",
    href: "https://pptcorporation.com/from-spreadsheets-to-hcm-cloud/",
  },
  {
    date: "July 11, 2025",
    category: "General",
    title: "Top 10 Signs Your Business Needs an ERP System",
    description:
      "Is your business outgrowing current tools? Discover 10 signs you need ERP for better operations, data, and scalability.",
    image:
      "/assets/july 11.webp",
    href: "https://pptcorporation.com/top-10-signs-your-business-needs-an-erp-system/",
  },
  {
    date: "July 14, 2025",
    category: "General",
    title: "Why ERP Is the Backbone of Digital Transformation",
    description:
      "ERP drives digital transformation by enabling real-time visibility, integration, and smart decisions—crucial for growth and competitive advantage.",
    image:
      "/assets/july14.webp",
    href: "https://pptcorporation.com/why-erp-is-the-backbone-of-digital-transformation/",
  },
  {
    date: "July 18, 2025",
    category: "General",
    title: "How to Build an ERP Strategy That Aligns with Business Goals",
    description:
      "Learn how to build an ERP strategy that aligns technology with business goals, driving growth, innovation, and long-term success.",
    image:
      "/assets/july18.webp",
    href: "https://pptcorporation.com/how-to-build-an-erp-strategy/",
  },
  {
    date: "July 22, 2025",
    category: "General",
    title: "Smarter Inventory and Warehouse Management with ERP: A Strategic Advantage",
    description:
      "Improve efficiency, accuracy, and visibility with ERP-driven inventory and warehouse management to reduce costs and support scalable business growth.",
    image:
      "/assets/july22.webp",
    href: "https://pptcorporation.com/smarter-inventory-and-warehouse-management-with-erp/",
  },
  {
    date: "July 25, 2025",
    category: "General",
    title: "How ERP Helps in Multi-Location or Multi-Entity Business Management",
    description:
      "ERP unifies operations, reporting, and compliance across multiple locations or entities, enabling centralized control with local flexibility.",
    image:
      "/assets/july 25.webp",
    href: "https://pptcorporation.com/how-erp-helps-in-multi-location-or-multi-entity-business-management/",
  },
  {
    date: "August 1, 2025",
    category: "Testing",
    title: "Testing Automation using Oracle Application Testing Suite (OATS)",
    description:
      "Oracle Application Testing Suite (OATS) automates ERP testing, ensuring faster deployments, improved accuracy, reduced risk, cost savings, and scalability.",
    image:
      "/assets/aug1.png",
    href: "https://pptcorporation.com/testing-automation-using-oracle-application-testing-suite-oats/",
  },
];

const categories = ["All", "Oracle", "SAP", "Microsoft Dynamics", "Testing", "General"];

export default function BlogsPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<(typeof posts)[number] | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const categoryMatch = active === "All" || post.category === active;
      const searchMatch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return categoryMatch && searchMatch;
    });
  }, [active, query]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f9ff] text-[#092b57]">
      {/* Premium hero */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#061b35]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,160,255,.28),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(105,60,255,.25),transparent_28%),linear-gradient(135deg,#031426,#0b3565)]" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-2xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full border border-blue-300/20 bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur"
            >
              Process Point Insights
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-8xl"
            >
              Ideas that move
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
                business forward.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/80 sm:text-xl"
            >
              Explore practical perspectives on Oracle, SAP, Microsoft Dynamics,
              ERP transformation, testing automation, migration and modern
              business operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#insights"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#06366d] shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-cyan-300/20"
              >
                Explore insights
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Talk to an expert
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="pointer-events-none absolute right-[-80px] top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 lg:block"
          >
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-10 rounded-full border border-cyan-300/15" />
            <div className="absolute inset-20 rounded-full border border-blue-300/15" />
            <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-cyan-300/50 to-blue-600/20 blur-2xl" />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f5f9ff] to-transparent" />
      </section>

      <section id="insights" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0067c5]">
              Knowledge library
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#072e5e] sm:text-5xl">
              Explore the latest thinking.
            </h2>
          </div>

          <div className="w-full lg:max-w-sm">
            <label className="sr-only" htmlFor="blog-search">
              Search articles
            </label>
            <input
              id="blog-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full rounded-2xl border border-blue-100 bg-white px-5 py-4 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="mb-14 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
                active === category
                  ? "bg-[#075db5] text-white shadow-lg shadow-blue-200"
                  : "border border-blue-100 bg-white text-[#345b83] hover:-translate-y-0.5 hover:border-blue-300 hover:text-[#075db5]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, index) => (
              <motion.article
                layout
                key={post.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.2) }}
                className="group relative overflow-hidden rounded-[30px] border border-blue-100 bg-white shadow-[0_15px_50px_rgba(5,64,120,.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(5,64,120,.16)]"
              >
                <button
                  type="button"
                  onClick={() => setSelected(post)}
                  className="block w-full text-left"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#eaf3ff]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061d39]/70 via-transparent to-transparent opacity-70" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#061d39]/65 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#2374c8]">
                      {post.date}
                    </div>
                    <h3 className="min-h-[84px] text-xl font-black leading-7 text-[#082f5d] transition group-hover:text-[#006dcc]">
                      {post.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                      {post.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between">
                      <span className="text-sm font-black text-[#075db5]">
                        Read insight
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf6ff] text-xl text-[#075db5] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#075db5] group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="rounded-3xl border border-blue-100 bg-white p-16 text-center shadow-sm">
            <h3 className="text-2xl font-black text-[#082f5d]">No insights found</h3>
            <p className="mt-3 text-slate-500">
              Try another search term or select a different category.
            </p>
          </div>
        )}
      </section>

      <section className="relative overflow-hidden bg-[#062b56] px-6 py-24 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,190,255,.22),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
            Your transformation starts here
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Have a business challenge?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-blue-100/75">
            Let’s turn your process, platform and transformation goals into a
            practical path forward.
          </p>
          <a
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black text-[#06366d] transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Talk to an expert →
          </a>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#031426]/75 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[32px] bg-white shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="max-h-[55vh] w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-black/80"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="p-7 sm:p-10">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-[#0870ca]">
                  {selected.category} · {selected.date}
                </div>
                <h3 className="mt-3 text-3xl font-black leading-tight text-[#082f5d] sm:text-4xl">
                  {selected.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {selected.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#075db5] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#004c99]"
                  >
                    Read full article →
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded-full border border-slate-200 px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
