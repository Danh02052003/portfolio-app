import { motion } from 'framer-motion';
import AnimatedTitle from '../components/home/AnimatedTitle';
import CTAButtons from '../components/home/CTAButtons';
import FloatingTechStack from '../components/home/FloatingTechStack';

const HomePage = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatedTitle />
          
          <motion.p
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting next-generation web experiences with cutting-edge technology
          </motion.p>

          <CTAButtons />
        </motion.div>
      </div>

      <FloatingTechStack />
    </section>
  );
};

export default HomePage;