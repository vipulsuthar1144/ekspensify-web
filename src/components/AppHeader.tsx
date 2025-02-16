import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { appFullLogo } from "../assets";
import { URL_PLAY_STORE } from "../utils/constants";

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AppHeader = () => {
  return (
    <motion.header
      className="w-full sticky top-0 left-0 shadow-md bg-main z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="flex container mx-auto max-w-7xl justify-between items-center py-6 px-5 md:px-0">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
        >
          <Link to="/">
            <img
              src={appFullLogo}
              className="w-24 h-auto select-none cursor-pointer"
              draggable={false}
            />
          </Link>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/privacy-policy"
                className="text-primary text-sm hover:text-linkHover no-underline transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/terms-conditions"
                className="text-primary text-sm hover:text-linkHover no-underline transition-colors duration-300"
              >
                Terms & Condition
              </Link>
            </motion.div>
          </nav>

          {/* Button */}
          <motion.a
            href={URL_PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-button cursor-pointer outline-none border-none md:text-sm text-white px-6 py-2 rounded-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default AppHeader;
