import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  y?: number;
  opacity?: boolean;
};

const AOS = ({
  children,
  duration = 0.4,
  delay = 0,
  opacity = true,
  y = 20,
}: // onAnimationComplete = null,
Props) => {
  // console.log(delay);
  return (
    <div className="aos">
      <motion.div
        initial={{ opacity: opacity ? 0 : 1, y: y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: duration,
          delay: delay,
          // ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
      {/* {children} */}
    </div>
  );
};

export default AOS;
