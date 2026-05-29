"use client";

import Link from "next/link";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-bold text-white">
              Robin Sharma
            </h2>

            <p className="mt-4 text-gray-400 text-lg max-w-md">
              Senior Product Designer &
              Frontend Developer
            </p>

            <p className="mt-6 text-gray-500">
              ERP • SaaS • HRMS • Healthcare • Logistics
            </p>

          </div>

          {/* Right */}

          <div>

            <p className="text-gray-500 uppercase tracking-wider text-sm mb-5">
              Connect
            </p>

            <div className="space-y-4">

              <Link
                href="https://www.linkedin.com/in/robinsharmattri/"
                target="_blank"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-all"
              >
           
                LinkedIn
                <ArrowUpRight size={14} />
              </Link>

              <Link
                href="https://github.com/attrirobinwork"
                target="_blank"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-all"
              >
     
                GitHub
                <ArrowUpRight size={14} />
              </Link>

          

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-white/10 my-12" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between gap-4">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Robin Sharma.
            All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
}