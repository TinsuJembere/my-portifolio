import React from "react";
import { motion } from "framer-motion";

function About() {
  const interests = [
    {
      name: "Open Source Contributing",
      emoji: "🌐",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Frontend Systems",
      emoji: "⚡",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      name: "Backend systems",
      emoji: "🔧",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Machine Learning",
      emoji: "🤖",
      color: "from-indigo-500 to-blue-500",
    },
    { name: "Tech blogging", emoji: "✍️", color: "from-cyan-500 to-blue-500" },
  ];

  const languages = [
    {
      name: "English",
      level: "Fluent",
      emoji: "🇬🇧",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Amharic",
      level: "Native",
      emoji: "🇪🇹",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      name: "Afan Oromo",
      level: "Native",
      emoji: "🇪🇹",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      className="bg-[#0c0f11] text-white py-10 md:py-10 relative overflow-hidden"
      id="about"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-[47.7rem] px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About Me Heading */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 rounded-full mb-12"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* About Me Paragraph */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="relative border border-gradient-to-r from-blue-500/30 via-indigo-500/30 to-cyan-500/30 rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[#1a1f24]/80 to-[#0c0f11]/80 backdrop-blur-sm shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.p
                className="text-white text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Software Engineering student at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-semibold">
                  Addis Ababa University
                </span>{" "}
                with hands-on experience in full-stack web development. Skilled
                in building scalable, user-focused applications using{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                  React
                </span>
                ,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 font-semibold">
                  Next.js
                </span>
                ,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                  FastAPI
                </span>
                , and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-semibold">
                  Node.js
                </span>
                , with experience in AI features, real-time communication, and
                secure authentication.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Interests Section - Playful Animated Cards */}
          <motion.div variants={itemVariants} className="mt-16">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Interests
            </motion.h3>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ amount: 0.7 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -10,
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Floating Animation */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className={`relative px-6 py-4 rounded-2xl bg-gradient-to-br ${interest.color} shadow-lg cursor-pointer overflow-hidden`}
                    >
                      {/* Shine */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-3">
                        <motion.span
                          className="text-2xl"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          {interest.emoji}
                        </motion.span>
                        <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
                          {interest.name}
                        </span>
                      </div>

                      {/* Glow */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${interest.color} rounded-2xl blur-md opacity-0 group-hover:opacity-50`}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section - Animated Progress Cards */}
          <motion.div variants={itemVariants} className="mt-16">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Languages
            </motion.h3>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  className="relative group"
                  initial={{ opacity: 0, x: -50, rotateY: -90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: [0, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Card */}
                  <motion.div
                    className={`relative w-48 p-5 rounded-2xl bg-gradient-to-br ${language.color} shadow-xl cursor-pointer overflow-hidden`}
                    animate={{
                      boxShadow: [
                        `0 10px 30px rgba(0,0,0,0.2)`,
                        `0 15px 40px rgba(0,0,0,0.3)`,
                        `0 10px 30px rgba(0,0,0,0.2)`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {/* Animated Background Pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-10"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span
                          className="text-3xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          {language.emoji}
                        </motion.span>
                        <div>
                          <h4 className="text-white font-bold text-lg">
                            {language.name}
                          </h4>
                          <p className="text-white/80 text-sm">
                            {language.level}
                          </p>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${language.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              language.level === "Native"
                                ? "100%"
                                : language.level === "Fluent"
                                ? "90%"
                                : "70%",
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: 0.8 + index * 0.2,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Fun Fact
            </motion.h3>
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative border border-[#a0a0a0]/30 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#1a1f24]/80 to-[#0c0f11]/80 backdrop-blur-sm">
                <motion.p
                  className="text-white text-lg md:text-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  I light up with joy at every "Aha!" moment after a victorious
                  debugging adventure. Horses captivate my heart and soul. 🐴
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
