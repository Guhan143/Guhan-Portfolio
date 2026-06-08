/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FaCircle,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaFigma />,
      name: "Figma",
      desc: "UI Design & Prototyping",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      desc: "Semantic Web Structure",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      desc: "Responsive Styling",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      desc: "Interactive Web Apps",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      desc: "Utility First CSS",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      desc: "Modern Frontend",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      desc: "Backend Framework",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      desc: "Server Runtime",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      desc: "NoSQL Database",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      desc: "Relational Database",
    },
    {
      icon: <FaPython />,
      name: "Python",
      desc: "Automation & Backend",
    },
    {
      icon: <FaJava />,
      name: "Java",
      desc: "OOP Development",
    },
  ];

  const additionalSkills = [
    "Git",
    "GitHub",
    "REST APIs",
    "Framer-Motion",
    "Responsive Design",
    "UI/UX Design",
    "Problem Solving",
    "Wireframing",
    "Prototyping",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading */}

      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="flex items-center gap-3 text-3xl font-bold">
          <FaCircle className="text-bg-text text-xs" />
          Skills & Technologies
        </h2>

        <p className="text-secondary-color mt-4 max-w-2xl">
          Technologies and tools I use to design, develop, and deliver modern
          digital experiences.
        </p>
      </motion.div>

      {/* Skills Grid */}

      <motion.div
        variants={containerVariants}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="
            group
            bg-bg-card
            border
            border-zinc-800
            rounded-2xl
            p-6
            hover:border-bg-text
            hover:shadow-[0_0_25px_rgba(234,187,122,0.15)]
            transition-all
            duration-300
            "
          >
            {/* Icon */}

            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
              w-14
              h-14
              rounded-xl
              bg-bg-text/10
              text-bg-text
              flex
              items-center
              justify-center
              text-2xl
              mb-5
              group-hover:bg-bg-text
              group-hover:text-bg-color
              transition-all
              duration-300
              "
            >
              {item.icon}
            </motion.div>

            <h3 className="text-lg font-semibold mb-2 text-primary">
              {item.name}
            </h3>

            <p className="text-secondary-color text-sm leading-6">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills */}

      <motion.div
        variants={itemVariants}
        className="
        mt-12
        bg-bg-card
        border
        border-zinc-800
        rounded-2xl
        p-6
        "
      >
        <h3 className="text-bg-text font-semibold mb-4">
          Additional Skills
        </h3>

        <div className="flex flex-wrap gap-3">
          {additionalSkills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{
                scale: 1.08,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              px-4
              py-2
              rounded-full
              bg-bg-color
              border
              border-zinc-800
              text-sm
              cursor-pointer
              hover:border-bg-text
              transition-all
              duration-300
              "
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;