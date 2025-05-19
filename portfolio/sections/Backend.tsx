import { motion } from 'framer-motion'; // For animations
import { FaServer, FaDatabase } from 'react-icons/fa'; // For icons (requires react-icons package)

const Backend = () => {
  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="py-12 bg-gray-50" // Light background for contrast
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-navy-900 md:text-5xl">
          Backend Expertise
        </h1>
        {/* Subheading */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          I specialize in building scalable backend systems using Flask, Node.js,
          and SQL databases, ensuring performance and reliability.
        </p>
        {/* Icons for visual appeal */}
        <div className="flex justify-center gap-8 mt-8">
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaServer className="text-4xl text-navy-600" />
            <span className="mt-2 text-sm text-gray-700">Flask & Node.js</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaDatabase className="text-4xl text-navy-600" />
            <span className="mt-2 text-sm text-gray-700">SQL Databases</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Backend;