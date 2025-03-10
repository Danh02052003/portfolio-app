import { motion } from 'framer-motion';
import { achievements } from '../../data/aboutData';
import { itemVariants } from '../../data/animationVariants';

const Achievements = () => {
  return (
    <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex justify-between items-center">
            <h3 className="text-white">{achievement.title}</h3>
            <span className="text-gray-400">{achievement.year}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements; 