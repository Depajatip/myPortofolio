import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, level = 80 }) => {
  const hoverWidth = Math.min(level + 8, 100);
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full'
    >
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -8, scale: 1.03, rotate: 0.5 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className='group bg-[#0f1724] rounded-xl p-6 shadow-lg border border-white/5 hover:shadow-[0_12px_30px_rgba(99,102,241,0.12)]'
      >
        <div className='flex flex-col items-center'>
          <motion.div
            className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center mb-4'
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{ rotate: 12, scale: 1.12 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <motion.img
              src={icon}
              alt={title}
              className='w-8 h-8 md:w-10 md:h-10 object-contain'
              draggable={false}
              whileHover={{ scale: 1.18, rotate: -8 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>

          <h3 className='text-white text-sm md:text-base font-semibold mb-3 text-center group-hover:text-indigo-300 transition-colors'>
            {title}
          </h3>

          <div className='w-full'>
            <div className='w-full h-2 rounded-full bg-white/8 overflow-hidden'>
              <motion.div
                className='h-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                whileHover={{ width: `${hoverWidth}%` }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div>
            <div className='mt-2 text-xs text-white/60 text-center group-hover:text-white'>{level}%</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-12'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
