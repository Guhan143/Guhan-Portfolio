import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Profile_image from "../assets/Profile_image.png";

const RightContent = () => {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Figma",
    "Python",
    "Tailwind",
    "MongoDB",
  ];

  const imageCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const skillsCardVariants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center gap-4 py-8 px-4 sm:py-10 sm:px-6"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        w-48 h-48
        sm:w-64 sm:h-64
        lg:w-96 lg:h-96
        bg-bg-text/10
        blur-[80px]
        sm:blur-[120px]
        rounded-full
        top-10
        pointer-events-none
        "
      />

      {/* Profile Card */}
      <motion.div
        variants={imageCardVariants}
        whileHover={{
          scale: 1.03,
          rotate: -1,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
        relative
        w-[200px]
        h-[260px]
        sm:w-[260px]
        sm:h-[340px]
        md:w-[300px]
        md:h-[390px]
        lg:w-[380px]
        lg:h-[480px]
        rounded-[24px]
        border
        border-zinc-800
        bg-bg-card
        p-2.5
        shadow-xl
        "
      >
        <motion.img
          src={Profile_image}
          alt="Guhan"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
          w-full
          h-full
          object-cover
          rounded-[18px]
          "
        />

        {/* Experience Badge */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          -top-3
          -left-3
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-2xl
          bg-bg-card
          border
          border-zinc-800
          flex
          flex-col
          items-center
          justify-center
          shadow-lg
          "
        >
          <h4 className="text-base sm:text-lg font-bold text-bg-text leading-none">
            8+
          </h4>
          <p className="text-[9px] sm:text-[10px] text-center text-secondary-color mt-0.5">
            Projects
          </p>
        </motion.div>

        {/* Border Highlight */}
        <div className="absolute inset-0 rounded-[24px] border border-bg-text/20 pointer-events-none" />
      </motion.div>

      {/* Skills Card */}
      <motion.div
        variants={skillsCardVariants}
        whileHover={{
          scale: 1.03,
          y: -5,
        }}
        className="
        relative
        w-full
        sm:w-[280px]
        lg:absolute
        lg:w-[220px]
        xl:w-[240px]
        lg:-right-6
        xl:-right-10
        lg:bottom-10
        bg-bg-card/95
        backdrop-blur-lg
        border
        border-zinc-800
        rounded-3xl
        p-5
        shadow-2xl
        "
      >
        <h3 className="font-semibold text-bg-text mb-4 text-sm sm:text-base leading-6">
          UI / UX Designer
          <br />
          Full Stack Developer
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-3">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.1 + 0.8,
              }}
              whileHover={{
                x: 5,
              }}
              className="
              flex
              items-center
              gap-2
              text-xs
              sm:text-sm
              text-secondary-color
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-bg-text flex-shrink-0" />
              {item}
            </motion.div>
          ))}
        </div>

        {/* Status */}
        <div className="mt-5 pt-4 border-t border-zinc-800">
          <motion.span
            animate={{
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
            flex
            items-center
            gap-2
            text-green-500
            text-xs
            sm:text-sm
            font-medium
            "
          >
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Available for Work
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RightContent;