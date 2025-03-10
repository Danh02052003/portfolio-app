import { motion } from 'framer-motion';
import { experiences } from '../../data/aboutData';
import { itemVariants } from '../../data/animationVariants';

const Experience = () => {
  return (
    <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-blue-300">{exp.company}</p>
            </div>
            <p className="text-gray-300 mt-2 md:mt-0">{exp.period}</p>
          </div>
          <ul className="mt-4 space-y-2">
            {exp.description.map((item, i) => (
              <li key={i} className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default Experience; 