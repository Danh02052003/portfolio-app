import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-lg bg-black/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="text-2xl font-bold text-blue-400">
              Danh's <span className="text-purple-400">portfolio</span>
            </Link>
          </motion.div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group"
                  >
                    <motion.span
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        location.pathname === item.path
                          ? 'text-blue-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {item.label}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                        layoutId="underline"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden flex items-center"
              whileTap={{ scale: 0.95 }}
            >
              <button className="text-gray-300 hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;