import { motion } from 'framer-motion';
import { education } from '../../data/aboutData';
import { itemVariants } from '../../data/animationVariants';

const Education = () => {
  return (
    <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Education</h2>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
          <p className="text-blue-300">{education.school}</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-gray-300">{education.period}</p>
          <p className="text-blue-300">GPA: {education.gpa}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-400">Relevant coursework:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {education.courses.map(course => (
            <span key={course} className="px-3 py-1 bg-gray-700/50 rounded-full text-gray-300 text-sm">
              {course}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education; 