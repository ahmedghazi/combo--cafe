"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";
import { publish } from "pubsub-js";
import { useAnimate } from "framer-motion";

type Props = {
  summary: ReactNode;
  detail: ReactNode;
  scrollIntoView?: boolean;
};
const SummaryDetailFramer = ({
  summary,
  detail,
  scrollIntoView = true,
}: Props) => {
  const [expand, setExpand] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [scope, animate] = useAnimate();
  // const controls = useAnimation();
  // const variants = {
  //   expanded: { opacity: 1, height: "auto" },
  //   collapsed: { opacity: 0, height: 0 },
  // };

  useEffect(() => {
    // console.log(expand, scope);
    if (expand) {
      // controls.start("expanded");
      animate(
        scope.current,
        { opacity: 1, height: "auto" },
        {
          duration: 0.3,
          onComplete: () => {
            publish("SUMMARY_DETAIL_CHANGE");
          },
        }
      );
      if (scrollIntoView && ref && ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // controls.start("collapsed");
      animate(
        scope.current,
        { opacity: 0, height: 0 },
        {
          duration: 0.3,
          onComplete: () => {
            publish("SUMMARY_DETAIL_CHANGE");
          },
        }
      );
    }
  }, [expand]);

  // useEffect(() => {
  //   onOpen(expand)
  // }, [expand, onOpen])

  return (
    <div className={clsx("summary-detail", expand && "is-expanded")} ref={ref}>
      <div
        className={clsx("summary ")}
        onClick={() => setExpand(!expand)}
        onKeyUp={() => setExpand(!expand)}
        tabIndex={-1}
        role="button"
      >
        <div className="pointer-events-none ">
          <div
            className={clsx(
              "icon-arrow transition-transform origin-center",
              expand && "rotate-180"
            )}
          >
            <svg
              width="33"
              height="36"
              viewBox="0 0 33 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 17.1L32.8 19.95L16.7 36L0.65 19.95L3.45 17.1L14.95 28.7V0.299998H18.95V28.2L30 17.1Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="title">{summary}</div>
        </div>
      </div>
      <div className="detail">
        {/* <motion.div
          initial="collapsed"
          className="z-0 overflow-hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.3 }}
          onAnimationEnd={() => {
            console.log("anime end");
            publish("SUMMARY_DETAIL_CHANGE");
          }}
        >
          {detail}
        </motion.div> */}
        <div className="z-0 overflow-hidden" ref={scope}>
          {detail}
        </div>
      </div>
    </div>
  );
};

export default SummaryDetailFramer;
