"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    year: "Nov 2021 - Present",
    title: "Senior UI/UX Designer & Frontend Developer",
    company: "Nestormind Pvt. Ltd.",
    website: "https://nestormind.com",
    logo: "/logos/nestormind.png",
    location: "Mohali, Punjab",
    description:
      "Leading UI/UX strategy and frontend development for ERP, HRMS, Logistics, Healthcare, Pharma, and SaaS platforms. Designing scalable workflows, design systems, dashboards, and modern enterprise applications.",
    skills: [
      "Figma",
      "React",
      "Next.js",
      "Tailwind",
      "ERP",
      "HRMS",
      "Design Systems",
    ],
  },

  {
    year: "Jan 2019 - Oct 2021",
    title: "UI/UX Designer",
    company: "Rex Web Solutions",
    website: "#",
    logo: "/logos/rex.png",
    location: "Mohali, Punjab",
    description:
      "Designed responsive web and mobile applications, user flows, wireframes, prototypes, and collaborated closely with developers to deliver intuitive digital experiences.",
    skills: [
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping",
      "Adobe XD",
    ],
  },

  {
    year: "Jul 2018 - Dec 2018",
    title: "Junior UI/UX Designer",
    company: "Sensation Software Solutions",
    website: "https://sensationsolutions.com/",
    logo: "/logos/sensation.png",
    location: "Mohali, Punjab",
    description:
      "Worked on UI design, wireframes, and interactive prototypes while learning user-centered design methodologies and product thinking.",
    skills: [
      "Wireframes",
      "User Flows",
      "Mockups",
      "UI Design",
    ],
  },

  {
    year: "Jan 2017 - Jul 2018",
    title: "Graphic & Web Designer",
    company: "Rex Web Solutions",
    website: "#",
    logo: "/logos/rex.png",
    location: "Mohali, Punjab",
    description:
      "Created website layouts, branding materials, landing pages, banners, and marketing creatives for various industries.",
    skills: [
      "Photoshop",
      "Branding",
      "Web Design",
      "Graphic Design",
    ],
  },

  {
    year: "Apr 2012 - Aug 2016",
    title: "Desktop Services Specialist",
    company: "HCL Technologies",
    website: "https://www.hcltech.com",
    logo: "/logos/hcl.png",
    location: "Chandigarh",
    description:
      "Provided enterprise IT support, troubleshooting hardware, software, networking, and infrastructure-related issues for corporate clients.",
    skills: [
      "IT Support",
      "Networking",
      "Windows",
      "Infrastructure",
    ],
  },
];

export default function ExperienceTimeline() {
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
            Career Journey
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            9+ Years Building Digital Products
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl text-lg">
            From enterprise IT support to Senior Product Designer &
            Frontend Developer, I've helped businesses transform
            complex workflows into intuitive digital experiences.
          </p>
        </motion.div>

        {/* Experience Cards */}

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={item.company + index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-[#111111]
                p-8
                hover:border-blue-500/30
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col md:flex-row gap-6">

                {/* Logo */}

                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>

                {/* Content */}

                <div className="flex-1">

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="text-blue-400 mt-1 font-medium">
                        {item.company}
                      </p>

                      <p className="text-gray-500 mt-2">
                        {item.year} • {item.location}
                      </p>
                    </div>

                    {item.website !== "#" && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-blue-400
                          hover:text-blue-300
                          transition-all
                        "
                      >
                        Visit Company
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <p className="mt-6 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills */}

                  <div className="flex flex-wrap gap-3 mt-6">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          bg-white/5
                          border
                          border-white/10
                          text-sm
                          text-gray-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 p-8 text-center">
            <h3 className="text-3xl font-bold text-white">
              Senior Product Designer & Frontend Developer
            </h3>

            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              Specialized in ERP, HRMS, Logistics, Healthcare, Pharma,
              and SaaS products with expertise in UX strategy, design
              systems, React, Next.js, and scalable enterprise
              applications.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}