import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-lg p-8 rounded-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-blue-400 mb-2">Name</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-blue-500/30 text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-blue-400 mb-2">Email</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-blue-500/30 text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-blue-400 mb-2">Message</label>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-blue-500/30 text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm; 