"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >
            <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
              Senior Product Designer & Frontend Developer
            </span>

            <h1 className="mt-8 text-6xl md:text-[48px] lg:text-[56px] font-bold text-white leading-[0.95]">
              Building
              <br />
              Digital Products
              <br />
              Since 2017
            </h1>

            <p className="mt-8 text-xl text-gray-300 max-w-xl leading-relaxed">
              Hi, I'm Robin Sharma.
            </p>

            <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
              I design and build enterprise products across ERP,
              HRMS, Logistics, Healthcare, Pharma and SaaS domains,
              combining UX strategy with modern frontend development.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="px-6 py-4 rounded-2xl bg-white text-black font-medium flex items-center gap-2">
                View Projects
                <ArrowRight size={18} />
              </button>

              <button className="px-6 py-4 rounded-2xl border border-white/10 text-white flex items-center gap-2">
                Resume
                <Download size={18} />
              </button>

            </div>

            {/* Stats */}

            <div className="flex flex-wrap gap-8 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-white">
                  9+
                </h3>
                <p className="text-gray-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  50+
                </h3>
                <p className="text-gray-500">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  7+
                </h3>
                <p className="text-gray-500">
                  Industries
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-[120px] opacity-20" />

              <div className="relative rounded-[40px] overflow-hidden border border-white/10">
                <Image
                  src="/images/robin.png"
                  alt="Robin Sharma"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>

            {/* Floating Badges */}

            <div className="absolute top-10 -left-10 px-4 py-3 rounded-2xl bg-[#111111] border border-white/10">
              <p className="text-white text-sm">
                ERP Specialist
              </p>
            </div>

            <div className="absolute bottom-20 -left-8 px-4 py-3 rounded-2xl bg-[#111111] border border-white/10">
              <p className="text-white text-sm">
                React & Next.js
              </p>
            </div>

            <div className="absolute top-1/2 -right-10 px-4 py-3 rounded-2xl bg-[#111111] border border-white/10">
              <p className="text-white text-sm">
                Design Systems
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}