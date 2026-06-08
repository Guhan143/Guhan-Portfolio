import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCircle, FaGraduationCap } from "react-icons/fa";

const Journey = () => {
  const journey = [
    {
      year: "2025",
      title: "UI/UX Intern",
      company: "Duzhine IT Solutions",
      month:"3 month"
    },
    {
      year: "2025 - 2026",
      title: "UI/UX Freelancer",
      company: "Infotech Solutions",
      month:"2 month"
    },
    {
      year: "2024",
      title: "Computer Networks",
      company: "Great Learning",
    },
    {
      year: "2024",
      title: "DBMS Certificate",
      company: "NPTEL Course",
    },
     {
      year: "2024",
      title: "Cloud Computing Foundations",
      company: "Alison",
    }
  ];

  const education = [
    {
      degree: "M.Sc Computer Science",
      college: "Sri Ramakrishna College of Arts & Science",
      marks: "7.6 CGPA",
    },
    {
      degree: "PG Diploma in Advanced Computing",
      college: "Sri Ramakrishna College of Arts & Science",
      marks: "81%",
    },
    {
      degree: "B.Sc Computer Science",
      college: "Kongu College of Arts and Science",
      marks: "78%",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
      },
    },
  };

  return (
    <motion.section
      id="journey"
      className="max-w-7xl mx-auto px-6 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Journey Card */}

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -5,
          }}
          className="
          bg-bg-card
          p-8
          rounded-2xl
          border
          border-zinc-800
          hover:border-bg-text
          hover:shadow-[0_0_25px_rgba(234,187,122,0.15)]
          transition-all
          duration-300
          "
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold mb-10">
            <FaCircle className="text-bg-text text-xs" />
            My Journey
          </h2>

          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8"
          >
            {journey.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  x: 5,
                }}
              >
                <h3 className="text-bg-text font-bold mb-2">
                  {item.year}
                </h3>

                <h4 className="font-semibold">
                  {item.title}
                </h4>

                <p className="text-secondary-color text-sm">
                  {item.company}
                </p>

                 <p className="text-secondary-color text-sm">
                  {item.month}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Card */}

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -5,
          }}
          className="
          bg-bg-card
          p-8
          rounded-2xl
          border
          border-zinc-800
          hover:border-bg-text
          hover:shadow-[0_0_25px_rgba(234,187,122,0.15)]
          transition-all
          duration-300
          "
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold mb-10">
            <FaCircle className="text-bg-text text-xs" />
            Education
          </h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  x: 8,
                }}
                className="flex items-start gap-4"
              >
                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                  }}
                  className="
                  min-w-[40px]
                  w-10
                  h-10
                  rounded-full
                  bg-bg-text
                  text-bg-color
                  flex
                  items-center
                  justify-center
                  "
                >
                  <FaGraduationCap />
                </motion.div>

                {/* Content */}

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.degree}
                  </h3>

                  <p className="text-secondary-color text-sm mt-1">
                    {item.college}
                  </p>

                  <p className="text-bg-text font-semibold mt-2">
                    {item.marks}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Journey;