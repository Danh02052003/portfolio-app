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
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-400 mb-2">{project.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          
          <ProjectTimeInfo project={project} formatDate={formatDate} />
          <ProjectLanguages languages={project.languages} getLanguageColor={getLanguageColor} />
          <ProjectStats project={project} />
          <ProjectTopics topics={project.topics} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 