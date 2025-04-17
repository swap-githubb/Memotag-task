import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiTrendingUp, FiShield } from 'react-icons/fi';

const steps = [
  { icon: <FiClock size={28} />, title: 'Continuous Monitoring', desc: 'Track day-to-day activity and detect anomalies in real time.' },
  { icon: <FiTrendingUp size={28} />, title: 'Progress Insights', desc: 'Analyze physical and cognitive trends over time.' },
  { icon: <FiShield size={28} />, title: 'Secure Data', desc: 'Robust, encrypted storage for sensitive information.' }
];

const Solution = () => (
  <section id="solution" className="py-16 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-6 text-center">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 dark:text-gray-100"
      >
        How MemoTag Works
      </motion.h3>
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex-1 bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <div className="text-blue-500 dark:text-blue-400 mb-4 flex justify-center">
              {step.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{step.title}</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;