import React from "react";
import { Landing } from "../types/schema";
import Modules from "./modules";

type Props = {
  input: Landing;
};

const ContentLanding = ({ input }: Props) => {
  return (
    <div className='content content--landing'>
      {input.modules && <Modules input={input.modules} />}
    </div>
  );
};

export default ContentLanding;
