import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLightbulb,
  FaCode,
  FaCircle,
  FaBullseye,
  FaPalette,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaBullseye />,
      title: "User-Centered Design",
      description:
        "Creating intuitive experiences focused on user needs and business goals.",
    },
    {
      icon: <FaPalette />,
      title: "Clean & Modern UI",
      description:
        "Designing elegant interfaces that are simple, engaging, and purposeful.",
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Thinking",
      description:
        "Building complete digital solutions from concept to implementation.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description:
        "Solving complex challenges through design thinking and modern technology.",
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
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading */}

      <motion.h2
        variants={itemVariants}
        className="flex items-center gap-3 text-3xl mb-10 font-bold"
      >
        <span className="text-bg-text">
          <FaCircle className="text-bg-text text-xs" />
        </span>
        About Me
      </motion.h2>

      {/* Content Grid */}

      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Content */}

        <motion.div variants={itemVariants}>
          <p className="leading-8 text-secondary-color mb-8">
            I'm Guhan, a UI/UX Designer and Web Developer passionate about
            creating modern, user-focused digital experiences.
          </p>

          <p className="text-secondary-color leading-8 mb-10">
            With a strong foundation in Computer Science and hands-on
            experience in design and development, I enjoy transforming ideas
            into intuitive interfaces and high-performance web applications
            that are both functional and visually engaging.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            border
            flex
            items-center
            gap-5
            text-bg-card
            bg-bg-text
            px-5
            py-4
            rounded-full
            hover:bg-bg-color
            hover:text-bg-text
            border-bg-text
            transition-all
            duration-300
            "
          >
            Explore My Journal
            <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Right Content */}

        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="
              bg-gradient-to-b
              from-bg-card
              to-[#0b0b0b]
              border
              border-zinc-800
              rounded-xl
              p-6
              hover:border-bg-text
              hover:shadow-[0_0_20px_rgba(234,187,122,0.15)]
              transition-all
              duration-300
              "
            >
              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                w-10
                h-10
                rounded-full
                bg-bg-text/10
                flex
                items-center
                justify-center
                text-bg-text
                text-lg
                mb-4
                "
              >
                {item.icon}
              </motion.div>

              {/* Title */}

              <h3 className="text-primary font-semibold text-lg mb-3">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-secondary-color text-sm leading-6">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;