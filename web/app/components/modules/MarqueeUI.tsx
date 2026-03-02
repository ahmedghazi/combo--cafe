import { MarqueeUI } from "@/app/types/schema";
import React from "react";
import Marquee from "../ui/Marquee";

type MarqueeProps = {
  input: MarqueeUI;
};

const ModuleMarqueeUI = ({ input }: MarqueeProps) => {
  // console.log(input);
  return (
    <Marquee
      text={input.text || ""}
      backgroundColor={input.backgroundColor || "#FEC81E"}
      foregroundColor={input.foregroundColor || "#000"}
    />
  );
};

export default ModuleMarqueeUI;
