import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTh, FaServer, FaCode, FaPaintBrush, FaTools } from 'react-icons/fa'; // Icons for grid items
import Backend from '@/sections/Backend';
import Frontend from '@/sections/Frontend';
import Designing from '@/sections/Designing';
import DevOps from '@/sections/DevOps';

const Grid = () => {
  const [selectedGrid, setSelectedGrid] = useState<string | null>(null);

  const handleClick = (grid: string) => {
    setSelectedGrid(grid);
  };

  const handleZoomOut = () => {
    setSelectedGrid(null);
  };

  // Grid item data with icons
  const grids = [
    { name: 'Backend', icon: <FaServer className="text-3xl" /> },
    { name: 'Frontend', icon: <FaCode className="text-3xl" /> },
    { name: 'Designing', icon: <FaPaintBrush className="text-3xl" /> },
    { name: 'DevOps', icon: <FaTools className="text-3xl" /> },
  ];

  // Placeholder projects2014 projects
  const projects = [
    { title: 'Project 1: E-commerce API', description: 'Built a scalable REST API for an e-commerce platform using Flask and PostgreSQL.' },
    { title: 'Project 2: Portfolio Website', description: 'Designed and developed a responsive portfolio site with React and Tailwind CSS.' },
    { title: 'Project 3: CI/CD Pipeline', description: 'Implemented a CI/CD pipeline using Jenkins and AWS for automated deployments.' },
  ];

  // Animation variants for grid items
  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-gray-800 flex flex-col items-center justify-center py-12">
      {/* Intro Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-white font-heading">
          Patrick Kabanda
        </h1>
        <p className="mt-2 text-lg text-gray-300 font-body">
          Full-Stack Developer | Crafting Scalable Solutions
        </p>
      </motion.div>

      {/* Grid Layout */}
      <AnimatePresence>
        {!selectedGrid ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {grids.map((grid) => (
              <motion.div
                key={grid.name}
                className="flex flex-col items-center justify-center p-8 bg-gray-800 text-white rounded-xl shadow-lg cursor-pointer hover:bg-navy-600"
                onClick={() => handleClick(grid.name)}
                variants={gridItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {grid.icon}
                <span className="mt-2 text-xl font-bold font-heading">{grid.name}</span>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0 bg-gray-800 p-8 rounded-xl overflow-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="absolute top-4 right-4 text-white bg-navy-600 p-2 rounded-full hover:bg-navy-500"
              onClick={handleZoomOut}
            >
              <FaTh className="text-xl" />
            </button>
            {selectedGrid === 'Backend' && <Backend />}
            {selectedGrid === 'Frontend' && <Frontend />}
            {selectedGrid === 'Designing' && <Designing />}
            {selectedGrid === 'DevOps' && <DevOps />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Placeholder */}
      {!selectedGrid && (
        <motion.div
          className="mt-12 w-full max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white font-heading mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-white font-heading">{project.title}</h3>
                <p className="mt-2 text-gray-300 font-body">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Grid;