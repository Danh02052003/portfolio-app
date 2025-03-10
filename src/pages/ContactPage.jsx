import { motion } from 'framer-motion';
import { containerVariants } from '../data/animationVariants';
import ContactInfo from '../components/contact/ContactInfo';
import SocialLinks from '../components/contact/SocialLinks';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <section className="min-h-screen pt-32 px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-400 mb-4">Get in Touch</h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out to me through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ContactInfo />
              <SocialLinks />
            </div>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;