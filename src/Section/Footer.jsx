import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaGithub,
  FaLinkedinIn,
  FaFacebookMessenger,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

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
      y: 30,
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
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="border-t border-zinc-800 mt-24 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        w-96
        h-96
        bg-bg-text/10
        blur-[180px]
        rounded-full
        left-1/2
        -translate-x-1/2
        bottom-0
        pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Top Section */}

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Brand */}

          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-5">
              Guhan <span className="text-bg-text">M</span>
            </h2>

            <p className="text-secondary-color leading-8 max-w-md">
              Crafting meaningful digital experiences through design,
              development, and innovation. Focused on building modern
              interfaces that combine aesthetics with functionality.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://www.linkedin.com/in/guhan-m-804799268/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-12 h-12
                rounded-xl
                border border-zinc-800
                flex items-center justify-center
                hover:border-bg-text
                hover:text-bg-text
                hover:shadow-[0_0_20px_rgba(234,187,122,0.2)]
                transition-all duration-300
                "
              >
                <FaLinkedinIn />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://github.com/Guhan143"
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-12 h-12
                rounded-xl
                border border-zinc-800
                flex items-center justify-center
                hover:border-bg-text
                hover:text-bg-text
                hover:shadow-[0_0_20px_rgba(234,187,122,0.2)]
                transition-all duration-300
                "
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="mailto:mguhan8@gmail.com"
                className="
                w-12 h-12
                rounded-xl
                border border-zinc-800
                flex items-center justify-center
                hover:border-bg-text
                hover:text-bg-text
                hover:shadow-[0_0_20px_rgba(234,187,122,0.2)]
                transition-all duration-300
                "
              >
                <FaFacebookMessenger />
              </motion.a>

            </div>
          </motion.div>

          {/* Navigation */}

          <motion.div variants={itemVariants}>
            <h3 className="text-bg-text text-xl font-semibold mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4 text-secondary-color">

              {[
                "home",
                "about",
                "projects",
                "skills",
                "contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  whileHover={{
                    x: 8,
                  }}
                  className="
                  capitalize
                  hover:text-bg-text
                  transition-all
                  duration-300
                  "
                >
                  {item}
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* Contact */}

          <motion.div variants={itemVariants}>
            <h3 className="text-bg-text text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-secondary-color"
              >
                <FaEnvelope className="text-bg-text" />
                <span>mguhan8@gmail.com</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-secondary-color"
              >
                <FaMapMarkerAlt className="text-bg-text" />
                <span>Tamil Nadu, India</span>
              </motion.div>

              <motion.div className="mt-8">

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="#contact"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  border
                  border-bg-text
                  text-bg-text
                  hover:bg-bg-text
                  hover:text-bg-color
                  hover:shadow-[0_0_25px_rgba(234,187,122,0.3)]
                  transition-all
                  duration-300
                  "
                >
                  Let's Connect
                </motion.a>

              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="border-t border-zinc-800 my-12"></div>

        {/* Bottom Footer */}

        <motion.div
          variants={itemVariants}
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
          "
        >
          <div className="text-center md:text-left">
            <p className="text-secondary-color text-sm">
              © {year} Guhan M. All Rights Reserved.
            </p>

            <p className="text-zinc-500 text-sm mt-2">
              Designed & Developed by Guhan M
            </p>
          </div>

          <motion.a
            whileHover={{
              y: -5,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="#home"
            className="
            w-12
            h-12
            rounded-full
            bg-bg-card
            border
            border-zinc-800
            flex
            items-center
            justify-center
            hover:border-bg-text
            hover:text-bg-text
            hover:shadow-[0_0_20px_rgba(234,187,122,0.25)]
            transition-all
            duration-300
            "
          >
            <FaArrowUp />
          </motion.a>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;