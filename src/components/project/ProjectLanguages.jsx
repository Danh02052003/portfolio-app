import { motion } from 'framer-motion';

const ProjectLanguages = ({ languages, getLanguageColor }) => {
  return (
    <div className="space-y-2.5">
      {languages.map((lang) => (
        <div key={lang.name} className="flex items-center group">
          <span className="text-sm text-gray-300 w-24 group-hover:text-white transition-colors">
            {lang.name}
          </span>
          <div className="flex-1 h-1.5 bg-gray-900/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${lang.percentage}%` }}
              className="h-full rounded-full"
              style={{ 
                backgroundColor: getLanguageColor(lang.name),
                opacity: 0.8
              }}
            />
          </div>
          <span className="text-sm text-gray-300 ml-2 group-hover:text-white transition-colors">
            {lang.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProjectLanguages; 