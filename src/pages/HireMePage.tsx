import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '../components/Calendar';
import { Check } from 'lucide-react';

export function HireMePage() {
  const packages = [
    {
      name: 'UX Audit',
      price: '$999',
      duration: '1 week',
      features: [
        'Detailed UX analysis',
        'User journey mapping',
        'Pain points identification',
        'Recommendations report',
        'One revision round'
      ]
    },
    {
      name: 'Design Sprint',
      price: '$2,499',
      duration: '2 weeks',
      features: [
        'Problem definition',
        'Solution ideation',
        'Prototype development',
        'User testing',
        'Implementation guide',
        'Two revision rounds'
      ]
    },
    {
      name: 'Full Project',
      price: 'Custom',
      duration: 'Variable',
      features: [
        'End-to-end design',
        'User research',
        'UI/UX design',
        'Design system',
        'Developer handoff',
        'Unlimited revisions'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          {/* Pricing Section */}
          <section>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Hire Me</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the package that best fits your needs, or schedule a call to discuss a custom solution for your project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">/ {pkg.duration}</span>
                  </div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-purple-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Booking Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Book a free 30-minute consultation to discuss your project requirements and how I can help you achieve your goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg">
              <Calendar />
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}