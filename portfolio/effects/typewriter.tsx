import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';




interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-mono text-white"
    >
      {displayedText}
      <span className="animate-blink">|</span>
    </motion.div>
  );
};

export default Typewriter;
