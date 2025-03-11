import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, slideInFromLeft, slideInFromRight, springHover } from '../data/animationVariants';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourusername',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:your.email@example.com',
    },
  ];

  return (
    <motion.section
      className="min-h-screen pt-20 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Info */}
          <motion.div variants={slideInFromLeft}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            >
              Get in Touch
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="prose prose-invert max-w-none"
            >
              <p className="text-xl text-gray-300 mb-8">
                I'm always open to new opportunities, collaborations, or just a friendly chat. 
                Feel free to reach out through any of the channels below or send me a message 
                using the contact form.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={springHover}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors"
                >
                  <span className="text-2xl text-blue-400">{link.icon}</span>
                  <span className="font-medium text-white">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Location</h2>
              <p className="text-gray-300">Ho Chi Minh City, Vietnam</p>
              <p className="text-gray-300">Available for remote work worldwide</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInFromRight}
            className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold text-white mb-6"
            >
              Send a Message
            </motion.h2>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;