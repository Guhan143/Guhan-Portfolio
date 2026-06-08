import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
      sticky
      top-0
      z-50
      bg-bg-color/90
      backdrop-blur-md
      border-b
      border-zinc-900
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* Logo */}

        <motion.a
          href="#home"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="text-3xl font-bold tracking-wider text-bg-text"
        >
          GM
        </motion.a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <a
                href={`#${link.id}`}
                className="
                relative
                text-primary
                hover:text-bg-text
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-bg-text
                after:transition-all
                after:duration-300
                hover:after:w-full
                "
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hire Me Button */}

        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
          hidden md:flex
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
          transition-all
          duration-300
          "
        >
          Hire Me
          <FaArrowRight />
        </motion.a>

        {/* Mobile Menu Button */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-bg-text text-xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            md:hidden
            overflow-hidden
            border-t
            border-zinc-900
            "
          >
            <div className="px-6 py-5 bg-bg-card">

              <ul className="flex flex-col gap-6">

                {navLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="
                      text-primary
                      hover:text-bg-text
                      transition-all
                      duration-300
                      "
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}

              </ul>

              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                mt-8
                flex
                items-center
                justify-center
                gap-2
                bg-bg-text
                text-bg-color
                py-3
                rounded-full
                font-medium
                "
              >
                Hire Me
                <FaArrowRight />
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;