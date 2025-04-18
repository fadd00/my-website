import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function MyName() {
  return (
    <>
      <section
        className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
      >
        <>
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: { delay: 6.5, duration: 0.2 },
              y: { delay: 6.5, duration: 0.2 },
            }}
            className="text-AAsecondary font-mono"
          >
            Hi, my name is
          </motion.span>
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: { delay: 6.6, duration: 0.2 },
              y: { delay: 6.6, duration: 0.2 },
            }}
            className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
          >
            Andhika Hutama.
          </motion.span>
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: { delay: 6.7, duration: 0.2 },
              y: { delay: 6.7, duration: 0.2 },
            }}
            className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
          >
            I make website and other stuff.
          </motion.span>

          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: { delay: 6.8, duration: 0.2 },
              y: { delay: 6.8, duration: 0.2 },
            }}
            className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
          >
            I&apos;m a software engineer skilled in problem-solving and
            troubleshooting
            {/* <br className="md:block hidden" /> (and occasionally designing)
            exceptional digital experiences. Currently.{" "} */}
            <br className="md:block hidden" />
            I&apos;m focused on creating and depstroying{" "}
            {/* <span className="text-AAsecondary">Smart Contracts</span> on the
            Blockchain. */}
          </motion.span>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: { delay: 6.9, duration: 0.2 },
              y: { delay: 6.9, duration: 0.2 },
            }}
            className="mt-12"
          >
            {/* <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
              Check out my resume!
            </button> */}
          </motion.div>
        </>
      </section>
    </>
  );
}
