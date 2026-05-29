"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  PenTool,
  Search,
  Code2,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Product Design",
    icon: PenTool,
    skills: [
      "Figma",
      "UX Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Information Architecture",
      "WCAG Accessibility",
    ],
  },

  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Responsive Design",
      "API Integration",
    ],
  },

  {
    title: "Enterprise Products",
    icon: LayoutDashboard,
    skills: [
      "ERP Systems",
      "HRMS",
      "Healthcare",
      "Logistics",
      "Pharma",
      "Inventory Management",
      "Procurement",
      "Analytics Dashboards",
    ],
  },
];

export default function SkillsTools() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Expertise
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Skills & Tools
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl">
            Combining product design, enterprise experience,
            and frontend development to build scalable digital products.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#111111]
                  p-8
                  hover:border-blue-500/20
                  transition-all
                "
              >
                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {group.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-gray-300
                        text-sm
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}