"use client";

import { motion } from "framer-motion";

const process = [
  {
    title: "Research",
    items: [
      {
        label: "Business",
        points: [
          "Stakeholder Interviews",
          "Requirement Analysis",
          "Competitive Benchmarking",
        ],
      },
      {
        label: "User",
        points: [
          "User Interviews",
          "User Personas",
          "Journey Mapping",
        ],
      },
    ],
  },
  {
    title: "Strategy",
    items: [
      {
        label: "Planning",
        points: [
          "Workflow Mapping",
          "Information Architecture",
          "Feature Prioritization",
        ],
      },
    ],
  },
  {
    title: "Design",
    items: [
      {
        label: "Execution",
        points: [
          "Wireframing",
          "UI Design",
          "Design Systems",
          "Interactive Prototypes",
        ],
      },
    ],
  },
  {
    title: "Validate",
    items: [
      {
        label: "Testing",
        points: [
          "Usability Testing",
          "Feedback Sessions",
          "Iteration",
          "Optimization",
        ],
      },
    ],
  },
  {
    title: "Deliver",
    items: [
      {
        label: "Launch",
        points: [
          "Developer Handoff",
          "Documentation",
          "QA Support",
          "Product Launch",
        ],
      },
    ],
  },
];

export default function DesignProcess() {
  return (
    <section className="bg-[#0A0A0A] py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Design Methodology
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            My Product Design Process
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl">
            A structured process used to design ERP, SaaS, HRMS,
            Healthcare and Enterprise applications.
          </p>
        </motion.div>

        {/* Timeline Line */}

        <div className="relative">

          <div className="hidden xl:block absolute top-5 left-0 right-0 h-[1px] bg-white/15" />

          <div className="grid xl:grid-cols-5 gap-12">

            {process.map((step, index) => (
              <motion.div
                key={step.title}
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
                className="relative"
              >
                {/* Dot */}

                <div className="hidden xl:flex absolute -top-[12px] left-0 w-10 h-10 rounded-full border border-white/20 bg-[#0A0A0A] items-center justify-center z-20">
                  <div className="w-5 h-5 rounded-full bg-blue-400" />
                </div>

                <div className="pt-12">

                  <h3 className="text-4xl font-bold text-white mb-10">
                    {step.title}
                  </h3>

                  {step.items.map((group) => (
                    <div key={group.label} className="mb-8">

                      <p className="text-gray-500 mb-4">
                        {group.label}
                      </p>

                      <ul className="space-y-3">
                        {group.points.map((point) => (
                          <li
                            key={point}
                            className="text-gray-300"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>

                    </div>
                  ))}

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl border border-white/10 bg-[#111111] p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white">
            Designing Beyond Screens
          </h3>

          <p className="mt-4 text-gray-400 max-w-3xl">
            My focus is not only on creating beautiful interfaces,
            but on solving business problems, simplifying workflows,
            and helping teams build products users love.
          </p>
        </div>

      </div>
    </section>
  );
}