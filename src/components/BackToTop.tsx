import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

/** Floating button that appears after the hero, with a ring showing scroll progress. */
export default function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > window.innerHeight * 0.8));

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          className="to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <svg viewBox="0 0 48 48" className="to-top-ring" aria-hidden>
            <defs>
              <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="21" className="to-top-track" />
            <motion.circle cx="24" cy="24" r="21" className="to-top-progress" style={{ pathLength: progress }} />
          </svg>
          <ArrowUp size={18} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
