import React from 'react';
import { motion } from 'framer-motion';

const data = [
  { label: 'Preorders', value: '1,200+' },
  { label: 'Caregiver Partnerships', value: '50+' },
  { label: 'Pilot Programs', value: '10 Hospitals' }
];

const Traction = () => (
  <section id="traction" className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-6 text-center">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 dark:text-gray-100"
      >
        Our Impact So Far
      </motion.h3>
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{item.value}</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Traction;