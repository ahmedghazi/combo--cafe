"use client";
import React from "react";
import ReactFastMarquee from "react-fast-marquee";

type Props = {
  text: string;
  backgroundColor: string;
  foregroundColor: string;
};

const Marquee = ({ text, backgroundColor, foregroundColor }: Props) => {
  return (
    <div
      className="marquee"
      style={{
        background: backgroundColor,
        color: foregroundColor,
      }}
    >
      <ReactFastMarquee gradient={false} speed={100} play={true} className="">
        {new Array(20).fill(0).map((v, i) => (
          <div key={i} className="item">
            {text}
          </div>
        ))}
      </ReactFastMarquee>
    </div>
  );
};

export default Marquee;
