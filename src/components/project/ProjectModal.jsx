import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose, formatDate }) => {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      className="bg-gray-900 p-8 rounded-2xl w-full max-w-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-blue-400">
            {project.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-300 mb-4">
            {project.description}
          </p>
          
          {/* Detailed Time Info */}
          <div className="space-y-2 text-sm text-gray-400">
            <p>Created: {formatDate(project.createdAt)}</p>
            <p>Last Updated: {formatDate(project.updatedAt)}</p>
            {project.lastCommit && (
              <div>
                <p>Last Commit: {formatDate(project.lastCommit.date)}</p>
                <p>Commit Message: {project.lastCommit.message}</p>
                <p>Author: {project.lastCommit.author}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            View on GitHub
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal; 