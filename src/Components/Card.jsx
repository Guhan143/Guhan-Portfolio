import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCircle, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // New: Upcoming Projects Variants
  const upcomingContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const upcomingColumnVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const upcomingItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { 
      x: 10, 
      transition: { duration: 0.2 } 
    }
  };

  const uiuxProjects = [
    {
      title: "Salon Booking App",
      description:
        "Designed a seamless appointment booking experience with user flows, wireframes, and interactive prototypes.",
      tools: ["Figma", "Wireframe", "Prototype"],
    },
    {
      title: "Clinic Website",
      description:
        "Healthcare-focused website design with intuitive navigation and responsive user experience.",
      tools: ["Figma", "Wireframe", "Prototype"],
    },
    {
      title: "HR Dashboard",
      description:
        "Modern employee management dashboard with analytics, reporting, and admin workflows.",
      tools: ["Figma", "Wireframe", "Prototype"],
    },
    {
      title: "Photography Website",
      description:
        "Creative portfolio website focused on visual storytelling and premium presentation.",
      tools: ["Figma", "Wireframe", "Prototype"],
    },
  ];

  const developmentProjects = [
    {
      title: "E-Commerce Website",
      description:
        "Full-stack shopping platform with authentication, product management, cart, and order processing.",
      tools: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Fashion Shop",
      description:
        "Modern fashion marketplace featuring responsive UI, product filtering, and user authentication.",
      tools: ["React", "Node.js", "Express", "MongoDB"],
    },
  ];

  const upcomingProjects = {
    uiux: [
      "Travel Booking App",
      "Food Delivery App",
      "Fitness Tracker",
      "Real Estate Platform",
      "Learning Management System",
      "AI Productivity Dashboard",
    ],
    web: [
      "Job Portal",
      "Expense Tracker",
      "Project Management Tool",
      "Inventory Management System",
      "Hospital Management System",
      "AI Resume Builder",
    ],
    java: [
      "Library Management System",
      "Banking Application",
      "Employee Payroll System",
      "Hotel Reservation System",
      "Student Management System",
      "Online Examination System",
    ],
  };

  return (
    <>
      <motion.section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* UI / UX Section */}
        <div className="mb-20">
          <motion.h2
            className="flex items-center gap-3 text-3xl font-bold mb-4 tracking-wide"
            variants={fadeInUp}
          >
            <FaCircle className="text-bg-text text-xs" /> Crafting Meaningful
            Digital Experiences
          </motion.h2>

          <motion.p
            className="leading-8 text-secondary-color max-w-3xl mb-10"
            variants={fadeInUp}
          >
            From research and wireframes to high-fidelity prototypes, I design
            user-centered experiences that balance usability, aesthetics, and
            business goals.
          </motion.p>

          {/* UI / UX Card Grid with Stagger Effect */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {uiuxProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-bg-color border border-zinc-800 rounded-3xl p-8 hover:border-bg-text hover:translate-y-2 transition-all duration-300"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-bg-text text-sm mb-3">UI / UX Design</p>

                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                <p className="leading-8 text-secondary-color mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full text-bg-text border text-sm "
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-bg-text border rounded-full px-4 py-2 hover:scale-105 duration-300 transition-all ">
                  View Case Study <FaArrowRight className="text-bg-text" />{" "}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Development Section */}
        <div className="mb-20">
          <motion.h2
            className="flex items-center gap-3 text-3xl font-bold mb-4 tracking-wide"
            variants={fadeInUp}
          >
            <FaCircle className="text-bg-text text-sm" />
            Engineering Modern Web Solutions
          </motion.h2>

          <motion.p
            className="leading-8 text-secondary-color mb-10 max-w-3xl"
            variants={fadeInUp}
          >
            Building scalable, responsive, and high-performance web applications
            using modern technologies and development best practices.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {developmentProjects.map((project, index) => (
              <motion.div
                key={index}
                className=" bg-bg-color border border-zinc-800 rounded-3xl p-8 hover:border-bg-text hover:translate-y-2 duration-300 transition-all"
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-bg-text mb-3 text-sm">Web Development</p>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-secondary-color leading-8 mb-6 ">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className=" px-3 py-1 rounded-full text-bg-text border border-zinc-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button className="rounded-full px-4 py-2 flex items-center gap-2 border text-bg-text hover:scale-105 transistion-all duration-300 ">
                  View Project <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Upcoming Project - Enhanced Animations */}
        <motion.div
          className="bg-bg-color border border-zinc-800 rounded-3xl p-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="flex items-center gap-3 mb-4 text-3xl font-bold"
            variants={fadeInUp}
          >
            <FaCircle className="text-bg-text text-sm" />
            What's Next On My Journey
          </motion.h2>

          <motion.p
            className="leading-8 text-secondary-color mb-10"
            variants={fadeInUp}
          >
            Continuously learning, exploring new technologies, and building
            innovative digital experiences.
          </motion.p>

          <motion.div
            className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8"
            variants={upcomingContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Ui/Ux Project Column */}
            <motion.div variants={upcomingColumnVariant}>
              <h3 className="text-bg-text text-xl font-semibold mb-4">
                UI / UX Projects
              </h3>

              <div className="space-y-4">
                {upcomingProjects.uiux.map((project) => (
                  <motion.div
                    key={project}
                    className="border-l-2 border-bg-text pl-4 cursor-pointer"
                    variants={upcomingItemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  >
                    <span className="text-secondary-color hover:text-bg-text transition-colors duration-300">
                      {project}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Web Development Project Column */}
            <motion.div variants={upcomingColumnVariant}>
              <h3 className="text-bg-text text-xl font-semibold mb-4">
                Web Development Projects
              </h3>

              <div className="space-y-4">
                {upcomingProjects.web.map((project) => (
                  <motion.div
                    key={project}
                    className="border-l-2 border-bg-text pl-4 cursor-pointer"
                    variants={upcomingItemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  >
                    <span className="text-secondary-color hover:text-bg-text transition-colors duration-300">
                      {project}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Java Project Column */}
            <motion.div variants={upcomingColumnVariant}>
              <h3 className="text-bg-text text-xl font-semibold mb-4">
                Java Projects
              </h3>

              <div className="space-y-4">
                {upcomingProjects.java.map((project) => (
                  <motion.div
                    key={project}
                    className="border-l-2 border-bg-text pl-4 cursor-pointer"
                    variants={upcomingItemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  >
                    <span className="text-secondary-color hover:text-bg-text transition-colors duration-300">
                      {project}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Projects;