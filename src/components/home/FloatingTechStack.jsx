import { motion } from 'framer-motion';

const technologies = [
  'React',
  'Node.js',
  'MongoDB',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'Express'
];

const FloatingTechStack = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {technologies.map((tech) => (
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
  );
};

export default FloatingTechStack; 