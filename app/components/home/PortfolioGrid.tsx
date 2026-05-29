"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise ERP",
    category: "ERP Platform",
    image: "/portfolio/erp.webp",
    slug: "erp",
  },
  {
    title: "Workify HRMS",
    category: "Human Resource Management",
    image: "/portfolio/workify.webp",
    slug: "workify",
  },
  {
    title: "Nexushaul Logistics",
    category: "Logistics Platform",
    image: "/portfolio/nexushaul.webp",
    slug: "nexushaul",
  },
  {
    title: "NIR Pharma",
    category: "Inventory Management",
    image: "/portfolio/pharma.webp",
    slug: "nir-pharma",
  },
  {
    title: "Anything Instantly",
    category: "E-Commerce",
    image: "/portfolio/anything.webp",
    slug: "anything-instantly",
  },
  {
    title: "VaultSpace",
    category: "Web3 SaaS",
    image: "/portfolio/vaultspace.webp",
    slug: "vaultspace",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Selected Work
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl">
            A collection of enterprise platforms, SaaS products,
            healthcare solutions, logistics systems, and modern
            digital experiences I've designed over the years.
          </p>
        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <Link
                href={`/case-studies/${project.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]">

                  {/* Image */}

                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-blue-400 text-sm">
                          {project.category}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        className="
                          text-white
                          transition-all
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}