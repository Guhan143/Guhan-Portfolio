import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCircle,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_wl5lwkp",
        "template_bni4f75",
        formData,
        "qpP-sY2jDBwFrByxG"
      );

      setStatus("success");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
      id="contact"
      className="max-w-7xl py-20 px-6 mx-auto relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        w-96
        h-96
        bg-bg-text/10
        blur-[150px]
        rounded-full
        left-1/2
        -translate-x-1/2
        top-20
        pointer-events-none
        "
      />

      {/* Heading */}

      <motion.div
        variants={itemVariants}
        className="mb-12 relative z-10"
      >
        <h2 className="flex items-center gap-3 text-3xl font-bold mb-4 tracking-wide">
          <FaCircle className="text-bg-text text-sm" />
          Let's Build Something Great Together
        </h2>

        <p className="leading-8 text-secondary-color max-w-2xl">
          Interested in collaborating, discussing a project, or exploring
          opportunities? Feel free to reach out. I'm always open to meaningful
          conversations and new challenges.
        </p>
      </motion.div>

      {/* Content */}

      <div className="grid lg:grid-cols-2 gap-10 relative z-10">

        {/* Contact Info */}

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -8,
          }}
          className="
          border
          border-zinc-800
          p-8
          rounded-3xl
          bg-bg-card/90
          backdrop-blur-xl
          hover:border-bg-text
          hover:shadow-[0_0_30px_rgba(234,187,122,0.15)]
          transition-all
          duration-300
          "
        >
          <h3 className="text-2xl font-semibold mb-10">
            Contact Information
          </h3>

          <div className="space-y-10">

            {/* Email */}

            <motion.div
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                }}
                className="
                w-12
                h-12
                rounded-xl
                bg-bg-text
                text-bg-color
                flex
                items-center
                justify-center
                "
              >
                <FaEnvelope />
              </motion.div>

              <div>
                <h4 className="font-semibold mb-1">
                  Email
                </h4>

                <p className="text-secondary-color">
                  mguhan8@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Phone */}

            <motion.div
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                }}
                className="
                w-12
                h-12
                rounded-xl
                bg-bg-text
                text-bg-color
                flex
                items-center
                justify-center
                "
              >
                <FaPhoneAlt />
              </motion.div>

              <div>
                <h4 className="font-semibold mb-1">
                  Phone
                </h4>

                <p className="text-secondary-color">
                  +91 9789133761
                </p>
              </div>
            </motion.div>

            {/* Location */}

            <motion.div
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                }}
                className="
                w-12
                h-12
                rounded-xl
                bg-bg-text
                text-bg-color
                flex
                items-center
                justify-center
                "
              >
                <FaMapMarkedAlt />
              </motion.div>

              <div>
                <h4 className="font-semibold mb-1">
                  Location
                </h4>

                <p className="text-secondary-color">
                  Dindigul, Tamil Nadu, India
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -8,
          }}
          className="
          bg-bg-card/90
          backdrop-blur-xl
          border
          border-zinc-800
          p-8
          rounded-3xl
          hover:border-bg-text
          hover:shadow-[0_0_30px_rgba(234,187,122,0.15)]
          transition-all
          duration-300
          "
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
              className="
              w-full
              bg-bg-color
              border
              border-zinc-800
              rounded-xl
              p-4
              outline-none
              focus:border-bg-text
              "
            />

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
              className="
              w-full
              bg-bg-color
              border
              border-zinc-800
              rounded-xl
              p-4
              outline-none
              focus:border-bg-text
              "
            />

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="
              w-full
              bg-bg-color
              border
              border-zinc-800
              rounded-xl
              p-4
              outline-none
              focus:border-bg-text
              "
            />

            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="
              w-full
              bg-bg-color
              border
              border-zinc-800
              rounded-xl
              p-4
              outline-none
              focus:border-bg-text
              "
            />

            {status === "success" && (
              <p className="text-green-500 text-sm">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm">
                ❌ Failed to send message.
              </p>
            )}

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              type="submit"
              disabled={status === "sending"}
              className="
              flex
              items-center
              gap-3
              bg-bg-text
              text-bg-color
              px-6
              py-4
              rounded-xl
              font-semibold
              hover:shadow-[0_0_25px_rgba(234,187,122,0.4)]
              transition-all
              disabled:opacity-50
              "
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}

              <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;