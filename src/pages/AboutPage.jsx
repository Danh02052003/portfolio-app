import { motion } from 'framer-motion';

const AboutPage = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "SQL Server"]
    },
    {
      category: "Tools",
      items: ["Git", "Firebase", "AWS", "Figma", "Postman"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Bio Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-blue-400 mb-6">About Me</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate frontend developer with a keen eye for design and a drive for creating
              exceptional user experiences. Specializing in modern web technologies and interactive
              interfaces.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            {[2023, 2024, 2025].map((year, index) => (
              <motion.div
                key={year}
                className="relative pl-8 pb-12 md:flex md:items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-2xl font-bold text-blue-400">{year}</h3>
                  <p className="mt-2 text-gray-300">
                    Significant achievement or milestone description for {year}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;