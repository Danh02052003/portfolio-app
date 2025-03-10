import { motion } from 'framer-motion';

const AnimatedTitle = () => {
  return (
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.span
        className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          color: ['#60A5FA', '#8B5CF6']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        Full Stack Developer
      </motion.span>
      <motion.span
        className="block text-blue-400 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Danh Nguyễn
      </motion.span>
    </motion.h1>
  );
};

export default AnimatedTitle; 