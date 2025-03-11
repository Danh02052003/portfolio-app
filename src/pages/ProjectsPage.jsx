import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useGithubProjects from '../hooks/useGithubProjects';
import ProjectCard from '../components/project/ProjectCard';
import ProjectModal from '../components/project/ProjectModal';
import { getLanguageColor, formatDate } from '../utils/formatters';
import { FaGithub } from 'react-icons/fa';

const ProjectsPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { projects, loading, error } = useGithubProjects('Danh02052003');

  return (
    <section className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center gap-3 mb-4">
            <FaGithub />
            My GitHub Projects
          </h1>
          <p className="text-xl text-gray-300">
            Exploring and building with modern technologies
          </p>
        </motion.div>

        {loading && (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <motion.div
              className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-gray-400">Fetching projects...</p>
          </div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="bg-red-500/10 text-red-400 p-4 rounded-lg inline-block">
              {error}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedId(project.id)}
              getLanguageColor={getLanguageColor}
              formatDate={formatDate}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            >
              <ProjectModal
                project={projects.find(p => p.id === selectedId)}
                onClose={() => setSelectedId(null)}
                formatDate={formatDate}
                getLanguageColor={getLanguageColor}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsPage;