import { motion } from 'framer-motion';
import { itemVariants } from '../../data/animationVariants';

const Bio = () => {
  return (
    <motion.div variants={itemVariants} className="text-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">About Me</h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        A passionate software engineer with strong problem-solving and collaborative skills.
        Eager to learn and adapt to new technologies, committed to delivering high-quality, user-friendly solutions.
      </p>
    </motion.div>
  );
};

export default Bio; 