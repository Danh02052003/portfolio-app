import { useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../data/animationVariants';
import { projects, categories } from '../data/projectData';
import ProjectCard from '../components/projects/ProjectCard';

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="min-h-screen pt-32 px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-400 mb-4">My Projects</h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Explore my latest work and personal projects. Each project demonstrates my skills
              and passion for creating meaningful applications.
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage; 