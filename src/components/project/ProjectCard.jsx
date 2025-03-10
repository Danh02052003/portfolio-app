import { motion } from 'framer-motion';
import ProjectLanguages from './ProjectLanguages';
import ProjectStats from './ProjectStats';
import ProjectTimeInfo from './ProjectTimeInfo';
import ProjectTopics from './ProjectTopics';

const ProjectCard = ({ project, onClick, getLanguageColor, formatDate }) => {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={onClick}
      className="relative group cursor-pointer"
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-800/80 border border-gray-700/50">
        {/* Glass effect background */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gray-900/20" />
        
        {/* Content */}
        <div className="relative p-6 z-10">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-200 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="space-y-6">
            <ProjectTimeInfo project={project} formatDate={formatDate} />
            <ProjectLanguages languages={project.languages} getLanguageColor={getLanguageColor} />
            <ProjectStats project={project} />
            <ProjectTopics topics={project.topics} />
          </div>
        </div>

        {/* Subtle hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card shadow */}
      <div className="absolute inset-0 -z-10 bg-black/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    </motion.div>
  );
};

export default ProjectCard; 