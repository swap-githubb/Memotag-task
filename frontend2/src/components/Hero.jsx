import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import brainAnimation from '../assets/brain-animation.json';

const Hero = () => (
  <section
    id="hero"
    className="relative h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center"
  >
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4">
      <div className="md:w-1/2 mt-8 md:mt-0">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100"
        >
          AI for Dementia Care
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg text-gray-700 dark:text-gray-300"
        >
          Empowering caregivers with real-time insights and personalized support.
        </motion.p>
        <motion.a
          href="#cta"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-block mt-6 px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
        >
          Request a Demo
        </motion.a>
      </div>
      <div className="md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full h-full"
        >
          <Lottie animationData={brainAnimation} loop={true} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
