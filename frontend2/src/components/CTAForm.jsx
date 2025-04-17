import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const CTAForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // In dev, '/api' is proxied to localhost:5000; in prod, we call the real backend directly
      const base = import.meta.env.DEV
        ? '/api'
        : 'https://memotag-task-backend.onrender.com/api'
      await axios.post(`${base}/contact`, formData)
      setStatus('SUCCESS')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('ERROR')
    }
  }

  return (
    <section id="cta" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-xl">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100"
        >
          Get in Touch
        </motion.h3>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-4"
        >
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            {status === 'SUCCESS' ? 'Submitted!' : 'Send Message'}
          </button>
        </motion.form>
        {status === 'ERROR' && (
          <p className="mt-4 text-center text-red-500">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  )
}

export default CTAForm

