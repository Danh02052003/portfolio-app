import { motion } from 'framer-motion';
import { skills } from '../../data/aboutData';
import { itemVariants } from '../../data/animationVariants';

const Skills = () => {
  return (
    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skills.map((skillSet) => (
        <div
          key={skillSet.category}
          className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg"
        >
          <h3 className="text-xl font-bold text-blue-400 mb-4">{skillSet.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillSet.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills; 