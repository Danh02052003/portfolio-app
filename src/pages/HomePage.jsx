import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { staggerContainer, fadeInUp, floatingAnimation, springHover } from '../data/animationVariants';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold"
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
              variants={fadeInUp}
              className="block text-blue-400 mt-2"
            >
              Danh Nguyễn
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Crafting next-generation web experiences with cutting-edge technology
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex justify-center gap-4"
          >
            <motion.button
              whileHover={springHover}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium relative group overflow-hidden"
              onClick={() => navigate('/projects')}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              whileHover={springHover}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-blue-400 text-blue-400 font-medium relative group overflow-hidden"
              onClick={() => navigate('/contact')}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js', 'Tailwind', 'Express'].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-blue-400/20 text-xl font-bold"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      {/* Gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </section>
  );
};

export default HomePage;