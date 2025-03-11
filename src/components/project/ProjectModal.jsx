import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ project, onClose, formatDate, getLanguageColor }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-gray-800/90 backdrop-blur-lg rounded-xl w-full max-w-2xl p-6 relative border border-gray-700/50"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
      >
        <FaTimes size={20} />
      </button>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <FaGithub className="text-blue-400" />
          {project.name}
        </h2>
        <p className="text-gray-300">{project.description}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2 text-gray-300">
          <FaStar className="text-yellow-400" />
          {project.stars} stars
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <FaCodeBranch className="text-blue-400" />
          {project.forks} forks
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {project.languages?.map((lang) => (
              <div
                key={lang.name}
                className="px-3 py-1 text-sm rounded-full"
                style={{
                  backgroundColor: `${getLanguageColor(lang.name)}20`,
                  color: getLanguageColor(lang.name),
                }}
              >
                {lang.name} ({lang.percentage}%)
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Topics</h3>
          <div className="flex flex-wrap gap-2">
            {project.topics?.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Timeline</h3>
          <div className="text-gray-300 space-y-1">
            <p>Created: {formatDate(project.createdAt)}</p>
            <p>Last updated: {formatDate(project.updatedAt)}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FaGithub /> View on GitHub
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectModal;