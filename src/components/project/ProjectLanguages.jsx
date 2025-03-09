import { motion } from 'framer-motion';

const ProjectLanguages = ({ languages, getLanguageColor }) => {
  return (
    <div className="space-y-2">
      {languages.map((lang) => (
        <div key={lang.name} className="flex items-center">
          <span className="text-sm text-gray-400 w-24">{lang.name}</span>
          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${lang.percentage}%` }}
              className="h-full rounded-full"
              style={{ backgroundColor: getLanguageColor(lang.name) }}
            />
          </div>
          <span className="text-sm text-gray-400 ml-2">{lang.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectLanguages; 