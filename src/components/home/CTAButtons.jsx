import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTAButtons = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="mt-10 flex justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium"
        onClick={() => navigate('/projects')}
      >
        View Projects
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full border border-blue-400 text-blue-400 font-medium"
        onClick={() => navigate('/contact')}
      >
        Contact Me
      </motion.button>
    </motion.div>
  );
};

export default CTAButtons; 