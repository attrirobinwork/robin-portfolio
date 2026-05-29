"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  LayoutDashboard,
  Users,
  Trophy,
  Layers3,
} from "lucide-react";

const achievements = [
  {
    icon: BriefcaseBusiness,
    value: "50+",
    label: "Projects Delivered",
  },
  {
    icon: Trophy,
    value: "9+",
    label: "Years Experience",
  },
  {
    icon: Building2,
    value: "7+",
    label: "Industries Served",
  },
  {
    icon: LayoutDashboard,
    value: "100+",
    label: "User Flows Designed",
  },
  {
    icon: Layers3,
    value: "20+",
    label: "Enterprise Modules",
  },
  {
    icon: Users,
    value: "15+",
    label: "Happy Clients",
  },
];

export default function Achievements() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Achievements
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Impact By Numbers
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto">
            Over the years I've helped organizations build scalable
            enterprise products, improve user experiences, and
            deliver measurable business value.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#111111]
                  p-8
                  hover:border-blue-500/20
                  transition-all
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>

                <h3 className="text-5xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Building Products That Matter
          </h3>

          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            From ERP systems and HRMS platforms to Healthcare,
            Logistics, Pharma, and SaaS applications, my goal has
            always been to simplify complexity and create meaningful
            user experiences.
          </p>

        </div>

      </div>
    </section>
  );
}