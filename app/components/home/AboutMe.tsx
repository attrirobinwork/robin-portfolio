"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    value: "9+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "7+",
    label: "Industries",
  },
  {
    value: "100+",
    label: "User Flows",
  },
];

export default function AboutMe() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">

              <div className="absolute inset-0 bg-blue-500/10 blur-[120px]" />

              <div className="relative rounded-[40px] overflow-hidden border border-white/10">
                <Image
                  src="/images/about-robin.jpg"
                  alt="Robin Sharma"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
              About Me
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Designing Products
              <br />
              With Purpose.
            </h2>

            <p className="mt-8 text-gray-400 leading-relaxed">
              My journey started in technology at HCL Technologies,
              where I developed a strong understanding of enterprise
              systems and problem solving.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Over the years, I evolved from Graphic Designer to
              UI/UX Designer, and today I work as a Senior Product
              Designer & Frontend Developer, helping businesses
              simplify complex workflows and build scalable digital
              products.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              I specialize in ERP, HRMS, Logistics, Healthcare,
              Pharma and SaaS platforms, combining user experience,
              product strategy, and frontend development.
            </p>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-white/10
                bg-[#111111]
                p-8
                text-center
              "
            >
              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}