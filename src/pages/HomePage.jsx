import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
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
              Frontend Developer
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

          <motion.p
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting next-generation web experiences with cutting-edge technology
          </motion.p>

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
        </motion.div>
      </div>

      {/* Tech stack floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {['HTML', 'CSS', 'MongoDB', 'React', 'Vue', 'Node.js', 'Java'].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-blue-400/20 text-xl font-bold"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;