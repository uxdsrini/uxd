import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '../components/Calendar';
import { ProjectCard } from '../components/ProjectCard';
import { SocialLinks } from '../components/SocialLinks';
import { ServiceCard } from '../components/ServiceCard';
import { Briefcase, Palette, Layout, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const projects = [
    {
      id: 'e-commerce-redesign',
      title: "E-commerce Redesign",
      description: "Complete UX overhaul for a major retail platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "UX Design"
    },
    {
      id: 'banking-app',
      title: "Banking App",
      description: "Mobile-first banking experience",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      category: "UI/UX"
    },
    {
      id: 'healthcare-platform',
      title: "Healthcare Platform",
      description: "Accessible design for medical services",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      category: "Product Design"
    }
  ];

  const services = [
    {
      title: "UX Design",
      description: "User-centered design solutions",
      icon: Layout
    },
    {
      title: "UI Design",
      description: "Beautiful, intuitive interfaces",
      icon: Palette
    },
    {
      title: "Product Design",
      description: "End-to-end product solutions",
      icon: Briefcase
    },
    {
      title: "Mobile Design",
      description: "Native & responsive experiences",
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
            alt="Background"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 px-4 py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-7xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              AIO:Design&Development Solution
            </h1><br></br>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              UX Designer & Product Strategist
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg">
              Creating intuitive digital experiences that delight users and drive business growth
            </p>
            <div className="mt-10">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <ProjectCard {...project} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Book a Consultation</h2>
              <p className="text-gray-600 mb-8">
                Let's discuss your project and explore how we can work together to create exceptional user experiences.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600">1</span>
                  </span>
                  Choose a convenient time slot
                </li>
                <li className="flex items-center">
                  <span className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600">2</span>
                  </span>
                  Fill in your project details
                </li>
                <li className="flex items-center">
                  <span className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600">3</span>
                  </span>
                  Get a personalized consultation
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg">
              <Calendar />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">uxdsrini@gmail.com</p>
              <p className="text-gray-400">+91 9963092123</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-gray-400">Hyderabad, INDIA</p>
              <p className="text-gray-400">Available Worldwide</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>UX Design</li>
                <li>UI Design</li>
                <li>Product Design</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <SocialLinks />
            </div>
          </div>
         <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
  <p>&copy; {new Date().getFullYear()} AIO. All rights reserved.</p>
</div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
