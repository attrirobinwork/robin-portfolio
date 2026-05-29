"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Pill,
  ShoppingBag,
  Truck,
  Wallet,
} from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP",
    category: "Business Management",
    icon: Building2,
    description:
      "A complete ERP ecosystem for procurement, inventory, finance, and operational management.",
    tools: ["Figma", "Design System", "UX Research"],
  },
  {
    title: "Workify HRMS",
    category: "Human Resource Management",
    icon: Briefcase,
    description:
      "Employee management, attendance tracking, payroll, and performance management platform.",
    tools: ["Figma", "User Flows", "Wireframing"],
  },
  {
    title: "Nexushaul Logistics",
    category: "Logistics & Transportation",
    icon: Truck,
    description:
      "Fleet tracking, transportation operations, shipment management, and logistics workflows.",
    tools: ["Figma", "Dashboard Design", "Analytics"],
  },
  {
    title: "NIR Pharma",
    category: "Pharmaceutical Industry",
    icon: Pill,
    description:
      "Inventory management and stock movement platform for pharmaceutical businesses.",
    tools: ["Figma", "UX Research", "Prototyping"],
  },
  {
    title: "Anything Instantly",
    category: "Retail & E-Commerce",
    icon: ShoppingBag,
    description:
      "Modern grocery ordering platform focused on seamless shopping experiences.",
    tools: ["Figma", "UI Design", "User Testing"],
  },
  {
    title: "VaultSpace",
    category: "Web3 SaaS",
    icon: Wallet,
    description:
      "Token-gated collaboration platform for investors, startups, and communities.",
    tools: ["Figma", "Product Strategy", "Design System"],
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Selected Projects
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Products I've Helped Build
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg">
            Over the years, I've designed products across ERP, HRMS,
            Healthcare, Logistics, Pharma, E-Commerce, and SaaS domains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#111111]
                  p-8
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>

                    <ArrowUpRight className="text-gray-500 group-hover:text-white transition-all" />
                  </div>

                  <span className="inline-block mt-6 text-sm text-blue-400">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          text-sm
                          bg-white/5
                          border
                          border-white/10
                          text-gray-300
                        "
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}