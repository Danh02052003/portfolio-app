import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import ProjectLanguages from './ProjectLanguages';
import ProjectStats from './ProjectStats';
import ProjectTimeInfo from './ProjectTimeInfo';
import ProjectTopics from './ProjectTopics';

const ProjectCard = ({ project, onClick, getLanguageColor, formatDate }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all cursor-pointer"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <FaGithub className="text-blue-400" />
          {project.name}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        {/* Project Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {project.stars}
          </div>
          <div className="flex items-center gap-1">
            <FaCodeBranch className="text-blue-400" />
            {project.forks}
          </div>
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-2">
          {project.languages?.map((lang) => (
            <span
              key={lang.name}
              className="px-3 py-1 text-sm rounded-full"
              style={{
                backgroundColor: `${getLanguageColor(lang.name)}20`,
                color: getLanguageColor(lang.name),
              }}
            >
              {lang.name} ({lang.percentage}%)
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard; 