import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  duration?: number;
  className?: string;
}

const TypeWriter = ({ text, duration = 1.2, className = "" }: TypeWriterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration,
      ease: "easeInOut",
      onComplete: () => setDone(true),
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayText(text.slice(0, latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [text, duration, count, rounded]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.6,
          repeat: done ? 3 : Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {}}
        className="inline-block w-[3px] ml-0.5 h-[0.85em] align-middle bg-current rounded-full"
        style={{ verticalAlign: "baseline", marginBottom: "-0.05em" }}
      />
    </span>
  );
};

export default TypeWriter;
