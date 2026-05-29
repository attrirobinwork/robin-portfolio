"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#0A0A0A] py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            rounded-[40px]
            border
            border-white/10
            bg-[#111111]
            p-10 md:p-16
            text-center
          "
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Contact
          </span>

          <h2 className="mt-8 text-5xl  md:text-[42px] 2xl:text-[56px] font-bold text-white">
            Let's Build
            <br />
            Something Great
          </h2>

          <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always interested in discussing product design,
            enterprise applications, frontend development,
            and exciting new opportunities.
          </p>

          {/* Services */}

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {[
              "Product Design",
              "UI/UX Consulting",
              "Frontend Development",
              "ERP Systems",
              "SaaS Products",
              "Design Systems",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-gray-300
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Contact Info */}

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="rounded-2xl border border-white/10 p-6">
              <Mail className="mx-auto text-blue-400" />
              <p className="mt-4 text-white">
                attrirobinwork@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <Phone className="mx-auto text-blue-400" />
              <p className="mt-4 text-white">
                +91 98135 65288
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <MapPin className="mx-auto text-blue-400" />
              <p className="mt-4 text-white">
                Mohali, Punjab
              </p>
            </div>

          </div>

          {/* CTA Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mt-12">

            <a
              href="mailto:your@email.com"
              className="
                px-8
                py-4
                rounded-2xl
                bg-white
                text-black
                font-medium
                flex
                items-center
                gap-2
              "
            >
              Get In Touch
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume/resume.pdf"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                text-white
                flex
                items-center
                gap-2
              "
            >
              Download Resume
              <Download size={18} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}