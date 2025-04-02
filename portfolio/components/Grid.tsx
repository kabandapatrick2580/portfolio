import { useState } from "react"; // Import useState hook to manage state
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations
import Backend from "@/sections/Backend"; 
import Frontend from "@/sections/Frontend"; // Import Frontend section component
import Designing from "@/sections/Designing"; // Import Designing section component
import DevOps from "@/sections/DevOps"; // Import DevOps section component

const Grid = () => {
  // State to track which grid is selected (null means no selection)
  const [selectedGrid, setSelectedGrid] = useState<string | null>(null);

  // Function to handle grid item click and set the selected grid
  const handleClick = (grid: string) => {
    setSelectedGrid(grid);
  };

  // Function to handle zooming out and resetting the selected grid
  const handleZoomOut = () => {
    setSelectedGrid(null);
  };

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gray-900">
      {/* If no grid is selected, show the main grid layout */}
      {!selectedGrid ? (
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
          {["Backend", "Frontend", "Designing", "DevOps"].map((grid) => (
            <motion.div
              key={grid} // Unique key for each grid item
              className="flex items-center justify-center p-10 bg-gray-800 text-white text-xl font-bold cursor-pointer rounded-xl hover:bg-gray-700"
              onClick={() => handleClick(grid)} // Set selected grid on click
              whileHover={{ scale: 1.05 }} // Slight scale-up on hover
              whileTap={{ scale: 0.95 }} // Slight scale-down on tap
            >
              {grid} {/* Display the grid name */}
            </motion.div>
          ))}
        </div>
      ) : (
        // If a grid is selected, show the zoomed-in content
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white p-10 rounded-xl"
          initial={{ scale: 0 }} // Start with scale 0 (hidden)
          animate={{ scale: 1 }} // Scale up to full size when displayed
          exit={{ scale: 0 }} // Scale down when exiting
        >
          {/* Back button to return to the main grid */}
          <button
            className="absolute top-5 right-5 bg-red-500 px-4 py-2 rounded-lg"
            onClick={handleZoomOut} // Call handleZoomOut on click
          >
            Back
          </button>

          {/* Render the selected grid's content */}
          {selectedGrid === "Backend" && <Backend />}
          {selectedGrid === "Frontend" && <Frontend />}
          {selectedGrid === "Designing" && <Designing />}
          {selectedGrid === "DevOps" && <DevOps />}
        </motion.div>
      )}
    </div>
  );
};

export default Grid;
