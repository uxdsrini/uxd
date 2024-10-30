import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
    >
      <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 text-purple-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}