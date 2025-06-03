import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTh, FaServer, FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import Backend from '@/sections/Backend';
import Frontend from '@/sections/Frontend';
import Designing from '@/sections/Designing';
import DevOps from '@/sections/DevOps';
import { projects } from '@/data/ProjectsData';
import Typewriter from '@/effects/typewriter';
import Link from 'next/link';


const Grid = () => {
  const [selectedGrid, setSelectedGrid] = useState<string | null>(null);

  const handleClick = (grid: string) => {
    setSelectedGrid(grid);
  };

  const handleBack = () => {
    setSelectedGrid(null);
  };

  // Grid item data with icons
  const grids = [
    { name: 'Backend', icon: <FaServer className="text-xl md:text-2xl" /> },
    { name: 'Frontend', icon: <FaCode className="text-xl md:text-2xl" /> },
    { name: 'Designing', icon: <FaPaintBrush className="text-xl md:text-2xl" /> },
    { name: 'DevOps', icon: <FaTools className="text-xl md:text-2xl" /> },
  ];

  const sidebarVariants = {
    hidden: { y: -200, opacity: 0 }, // Slide from top on mobile
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.2 } },
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-gray-800 flex flex-col">
      {/* Intro Section (shown only when no grid is selected) */}
      <AnimatePresence>
        {!selectedGrid && (
          <motion.div
            className="text-center pt-12 pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            
              <Typewriter text="👋, I'm Patrick – a creative full-stack developer." speed={80} />
          
            
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!selectedGrid && (
          <motion.div
            className="w-full max-w-3xl mx-auto px-4 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">About Me</h2>
            <p className="text-gray-300 font-body text-lg leading-relaxed">
              I\'m a passionate full-stack developer with a love for building creative, robust, and scalable web applications.
              My experience spans backend, frontend, design, and DevOps, allowing me to deliver end-to-end solutions.
              I thrive on learning new technologies and collaborating with others to turn ideas into reality.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row w-full">
        <AnimatePresence>
          {selectedGrid ? (
            // Dashboard Layout: Top Bar (mobile) or Sidebar (desktop) + Main Content
            <>
              {/* Top Bar (mobile) or Sidebar (desktop) */}
              <motion.div
                className="fixed md:static top-0 w-full md:w-1/5 bg-gray-800 p-4 flex flex-row md:flex-col gap-4 z-10 md:max-h-screen md:overflow-y-auto shadow-md"
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {grids
                  .filter((grid) => grid.name !== selectedGrid)
                  .map((grid) => (
                    <motion.div
                      key={grid.name}
                      className="flex items-center gap-2 p-2 md:p-3 bg-gray-700 text-white rounded-lg cursor-pointer hover:bg-navy-600 flex-1 md:flex-initial text-center md:text-left"
                      onClick={() => handleClick(grid.name)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {grid.icon}
                      <span className="text-xs md:text-sm font-heading truncate">{grid.name}</span>
                    </motion.div>
                  ))}
                {/* Back to Grid View */}
                <motion.button
                  className="flex items-center gap-2 p-2 md:p-3 bg-navy-600 text-white rounded-lg hover:bg-navy-500 flex-1 md:flex-initial text-center md:text-left"
                  onClick={handleBack}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaTh className="text-lg md:text-xl" />
                  <span className="text-xs md:text-sm font-heading">All</span>
                </motion.button>
              </motion.div>

              {/* Main Content Area */}
              <motion.div
                className="flex-1 mt-20 md:mt-0 md:ml-0 p-6 md:p-8 overflow-y-auto bg-gray-800"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {selectedGrid === 'Backend' && <Backend />}
                {selectedGrid === 'Frontend' && <Frontend />}
                {selectedGrid === 'Designing' && <Designing />}
                {selectedGrid === 'DevOps' && <DevOps />}
              </motion.div>
            </>
          ) : (
            // 2x2 Grid Layout
            <motion.div
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-4">
                {grids.map((grid) => (
                  <motion.div
                    key={grid.name}
                    className="flex flex-col items-center justify-center p-8 bg-gray-800 text-white rounded-xl shadow-lg cursor-pointer hover:bg-navy-600"
                    onClick={() => handleClick(grid.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {grid.icon}
                    <span className="mt-2 text-xl font-bold font-heading">{grid.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* About Me Section (shown only when no grid is selected) */}
      
      {/* Projects Section (shown only when no grid is selected) */}
      <AnimatePresence>
        {!selectedGrid && (
          <motion.div
            className="w-full max-w-4xl px-4 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white font-heading mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id='projects'>
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-white font-heading">{project.title}</h3>
                <p className="mt-2 text-gray-300 font-body">{project.description}</p>
                <p className="mt-2 text-sm text-gray-400 font-body">
                  Categories: {project.categories.join(', ')}
                </p>
                {project.title && (
                  <Link
                    href={`/projects/${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-white bg-sky-500 px-4 py-2 rounded-lg"
                  >
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      View Project
                    </motion.button>
                  </Link>
                )}
              </div>
            ))}
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    
  );
};

export default Grid;