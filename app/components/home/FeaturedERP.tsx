"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Package,
  ShoppingCart,
  Wallet,
} from "lucide-react";

const modules = [
  {
    icon: Package,
    title: "Inventory Management",
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
  },
  {
    icon: Wallet,
    title: "Finance & Accounts",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
  },
];

export default function FeaturedERP() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            Featured Case Study
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Enterprise ERP Platform
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-3xl">
            A modern ERP solution designed to simplify inventory,
            procurement, finance, and business operations through a
            unified user experience.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Screenshot */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111111] p-4">

              <Image
                src="/images/erp-dashboard.jpg"
                alt="ERP Dashboard"
                width={1200}
                height={900}
                className="rounded-2xl object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white">
              Transforming Complex Business Operations Into Simple Workflows
            </h3>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Designed an enterprise-grade ERP platform focused on
              improving operational efficiency, reducing manual
              processes, and enabling data-driven decision making for
              businesses.
            </p>

            {/* Problem */}

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-white mb-3">
                Challenge
              </h4>

              <p className="text-gray-400">
                Businesses were managing procurement, inventory,
                finance, and reporting through disconnected systems,
                resulting in inefficiencies and operational bottlenecks.
              </p>
            </div>

            {/* Solution */}

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-3">
                Solution
              </h4>

              <p className="text-gray-400">
                Designed a unified ERP ecosystem that centralizes
                workflows, streamlines approvals, and provides
                real-time operational visibility through interactive
                dashboards.
              </p>
            </div>

            {/* Modules */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {modules.map((module) => {
                const Icon = module.icon;

                return (
                  <div
                    key={module.title}
                    className="rounded-2xl border border-white/10 bg-[#111111] p-5"
                  >
                    <Icon className="w-6 h-6 text-blue-400 mb-3" />

                    <h5 className="font-medium text-white">
                      {module.title}
                    </h5>
                  </div>
                );
              })}
            </div>

            {/* CTA */}

            <button
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition-all
                text-white
              "
            >
              View Full Case Study
              <ArrowRight size={18} />
            </button>

          </motion.div>

        </div>

        {/* Bottom Metrics */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6 mt-20"
        >
          {[
            {
              value: "50+",
              label: "Business Workflows",
            },
            {
              value: "20+",
              label: "ERP Modules",
            },
            {
              value: "100+",
              label: "User Screens",
            },
            {
              value: "9+",
              label: "Years Experience",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-[#111111] p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-400">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}