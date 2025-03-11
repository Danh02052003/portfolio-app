import { motion } from 'framer-motion';
import { skills } from '../../data/aboutData';
import { itemVariants } from '../../data/animationVariants';

const Skills = () => {
  return (
    <motion.div variants={itemVariants}>
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillSet) => (
          <div
            key={skillSet.category}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">{skillSet.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillSet.items.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills; 