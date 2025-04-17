import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'People living with dementia (2021)', value: 57 },
  { label: 'New cases each year', value: 10 },
  { label: 'Undiagnosed globally', value: '75%' },
  { label: 'Projected by 2050', value: 153 }
];

const ageGroupData = [
  { group: '10-20', patients: 0 },
  { group: '20-30', patients: 0 },
  { group: '30-40', patients: 0 },
  { group: '40-50', patients: 0 },
  { group: '50-60', patients: 0 },
  { group: '60-69', patients: 3 },
  { group: '70-79', patients: 8 },
  { group: '80-89', patients: 15 },
  { group: '90-99', patients: 10 }
];

const AgeGroupGraph = () => {
  const containerHeight = 200;
  const maxPatients = Math.max(...ageGroupData.map(d => d.patients));

  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="text-center text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Patients by Age
      </h4>
      <div className="flex justify-around items-end h-[200px] border-b-2 border-gray-200 dark:border-gray-700">
        {ageGroupData.map((d, idx) => {
          const barHeight = maxPatients > 0 ? (d.patients / maxPatients) * containerHeight : 0;
          return (
            <div key={idx} className="flex flex-col items-center">
              <motion.div
                className="w-8 bg-green-500 dark:bg-green-600"
                initial={{ height: '0px' }}
                whileInView={{ height: `${barHeight}px` }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              />
              <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">{d.group}</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">{d.patients}M</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Problem = () => (
  <section id="problem" className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100"
      >
        The Dementia Challenge
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-4 text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Dementia affects millions globally, yet many remain undiagnosed and without support.
      </motion.p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <h4 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {typeof stat.value === 'number' ? `${stat.value}M+` : stat.value}
            </h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      <AgeGroupGraph />
    </div>
  </section>
);

export default Problem;