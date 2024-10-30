import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

// This would typically come from an API or CMS
const projectsData = {
  'e-commerce-redesign': {
    title: 'E-commerce Redesign',
    client: 'Fashion Retailer',
    duration: '3 months',
    role: 'Lead UX Designer',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1500',
    description: 'A complete redesign of the e-commerce experience for a major fashion retailer, focusing on improving conversion rates and user satisfaction.',
    challenge: 'The existing platform had a high cart abandonment rate and users reported difficulty in finding products they were looking for.',
    solution: 'Implemented a new search and filtering system, streamlined the checkout process, and created a more intuitive navigation structure.',
    results: [
      '35% reduction in cart abandonment',
      '50% increase in search usage',
      '25% improvement in conversion rate'
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
    ]
  },
  // Add more projects as needed
};

export function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
            <Button className="flex items-center">
              View Live Site
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Project Hero */}
          <div className="relative h-[60vh] rounded-2xl overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4">
                <div>
                  <span className="text-gray-300">Client:</span>
                  <span className="ml-2 font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="text-gray-300">Duration:</span>
                  <span className="ml-2 font-medium">{project.duration}</span>
                </div>
                <div>
                  <span className="text-gray-300">Role:</span>
                  <span className="ml-2 font-medium">{project.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600">{project.description}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-600">{project.challenge}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-gray-600">{project.solution}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-purple-600 mr-3" />
                      {result}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-gray-500">Client</dt>
                    <dd className="font-medium">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Timeline</dt>
                    <dd className="font-medium">{project.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Role</dt>
                    <dd className="font-medium">{project.role}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Interested in working together?</h3>
                <p className="text-gray-600 mb-4">
                  Let's discuss how we can create an amazing user experience for your project.
                </p>
                <Button className="w-full">Schedule a Call</Button>
              </div>
            </div>
          </div>

          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="rounded-xl shadow-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}