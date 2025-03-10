import { motion } from 'framer-motion';
import { socialLinks } from '../../data/contactData';

const SocialLinks = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg p-6 rounded-xl">
      <h3 className="text-xl font-bold text-blue-400 mb-4">Social Media</h3>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social) => (
          <motion.a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
          >
            {social.icon}
            {social.platform}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks; 