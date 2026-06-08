import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

// ✅ Moved outside LeftContent as its own component
const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 100;

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  // ✅ Return moved here, inside the component
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const LeftContent = () => {
  const stats = [
    { value: 8,   suffix: "+", title: "Projects Completed"   },
    { value: 2,   suffix: "",  title: "Internships Completed" },
    { value: 7,   suffix: "+", title: "Technologies Mastered" },
    { value: 100, suffix: "%", title: "Passion & Dedication"  },
  ];

  return (
    <div className="w-full">
      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-primary mb-4 text-lg"
      >
        Hi, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6"
      >
        Guhan <span className="text-bg-text">M</span>
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-2xl md:text-3xl text-bg-text font-semibold mb-8"
      >
        UI / UX Designer & Web Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-secondary-color leading-8 max-w-2xl mb-10"
      >
        I design intuitive user experiences and build modern web applications
        that are fast, responsive, and impactful. With a passion for innovation
        and problem-solving, I transform ideas into seamless digital products
        that deliver value, enhance usability, and create meaningful connections
        between users and technology.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex flex-wrap gap-4 mb-10"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-bg-text text-bg-color px-6 py-4 rounded-full
          flex items-center gap-2 border border-bg-text
          hover:bg-transparent hover:text-bg-text transition-all duration-300"
        >
          View My Work
          <FaArrowRight />
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          href="/Guhan_Resume.pdf"
          download="Guhan_Resume.pdf"
          className="border border-bg-text text-bg-text px-6 py-4
          rounded-full flex items-center gap-2
          hover:bg-bg-text hover:text-bg-color transition-all duration-300"
        >
          Download Resume
          <FaDownload />
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex gap-4 mb-12"
      >
        <motion.a
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/guhan-m-804799268/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center
          border border-zinc-800 rounded-lg
          hover:border-bg-text hover:text-bg-text transition-all duration-300"
        >
          <FaLinkedin size={22} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/Guhan143"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center
          border border-zinc-800 rounded-lg
          hover:border-bg-text hover:text-bg-text transition-all duration-300"
        >
          <FaGithub size={22} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:mguhan8@gmail.com"
          className="w-12 h-12 flex items-center justify-center
          border border-zinc-800 rounded-lg
          hover:border-bg-text hover:text-bg-text transition-all duration-300"
        >
          <FaEnvelope size={22} />
        </motion.a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.03 }}
            className="border-l border-zinc-700 pl-5"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-primary">
              {/* ✅ AnimatedCounter used correctly here */}
              <AnimatedCounter target={item.value} suffix={item.suffix} />
            </h3>
            <p className="text-sm text-secondary-color mt-2">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LeftContent;