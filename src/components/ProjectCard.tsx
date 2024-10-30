import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export function ProjectCard({ title, description, image, category }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 p-6 text-white">
        <span className="mb-2 inline-block rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold">
          {category}
        </span>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </motion.div>
  );
}