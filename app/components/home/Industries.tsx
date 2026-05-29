"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  HeartPulse,
  Truck,
  Pill,
  ShoppingCart,
  Building2,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "ERP Systems",
    description:
      "Designing enterprise platforms for inventory, finance, procurement, and operations management.",
  },
  {
    icon: Briefcase,
    title: "HRMS",
    description:
      "Building employee management, payroll, attendance, and workforce solutions.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Creating transportation, fleet tracking, and supply chain management experiences.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Designing patient-centric healthcare applications and medical management systems.",
  },
  {
    icon: Pill,
    title: "Pharma",
    description:
      "Developing inventory, stock movement, procurement, and pharmaceutical workflows.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Crafting seamless shopping journeys and scalable retail experiences.",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            Industries & Expertise
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Products I've Designed
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg">
            Over 9+ years, I've designed enterprise platforms, SaaS products,
            and business management systems across multiple industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative rounded-3xl border border-white/10 bg-[#111111] p-8 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              9+ Years of Building Digital Products
            </h3>

            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              From ERP dashboards to healthcare systems and logistics
              platforms, I help businesses transform complex workflows into
              intuitive user experiences.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}