import { motion } from 'framer-motion';
import { containerVariants } from '../data/animationVariants';
import Bio from '../components/about/Bio';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience';
import Skills from '../components/about/Skills';
import Achievements from '../components/about/Achievements';
import Certifications from '../components/about/Certifications';

const AboutPage = () => {
  return (
    <section className="min-h-screen pt-32 px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          <Bio />
          <Education />
          <Experience />
          <Skills />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Achievements />
            <Certifications />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;