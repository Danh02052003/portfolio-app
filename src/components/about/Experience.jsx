import { motion } from 'framer-motion';
import { experiences } from '../../data/aboutData';
import { itemVariants } from '../../data/animationVariants';

const Experience = () => {
  return (
    <motion.div variants={itemVariants}>
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50"
          >
            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
            <p className="text-blue-400">{exp.company}</p>
            <p className="text-gray-400 mb-4">{exp.period}</p>
            <ul className="space-y-2">
              {exp.description.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience; 