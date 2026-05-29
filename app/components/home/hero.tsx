"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="text-blue-400 mb-4">
            Senior Product Designer
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Designing
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Enterprise ERP
            </span>
            Experiences
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            UI/UX Designer with 9+ years of experience building ERP,
            HRMS, Healthcare, Logistics and SaaS products.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-blue-600 rounded-xl text-white">
              View Projects
            </button>

            <button className="px-6 py-3 border border-gray-700 rounded-xl text-white">
              Download Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-[1px]">
              <div className="bg-[#111111] rounded-3xl p-8">
                <img
                  src="/images/profile.png"
                  alt="Robin Sharma"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}