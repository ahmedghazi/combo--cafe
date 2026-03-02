// import React, { useEffect, useState } from "react";
// import clsx from "clsx";
// import { VideoWrapper } from "@/app/components/ui/player";
// import { Embed, LocaleBlockContent } from "@/app/types/schema";
// import { PortableText } from "@portabletext/react";
// import portableTextComponents from "@/app/sanity-api/portableTextComponents";
// import { _localizeField } from "@/app/sanity-api/utils";

// type Props = {
//   input: {
//     embed: Embed;
//     width: number;
//     offset: number;
//     defaultUi: boolean;
//     caption: LocaleBlockContent;
//   };
// };

// const EmbedUI = ({ input }: Props) => {
//   const { embed, width, offset, defaultUi, caption } = input;

//   return (
//     <section className='module module--embed w-full mb-xl'>
//       {embed.url && (
//         <div className='row'>
//           <div
//             className={clsx(
//               `inner col-md-${width} col-md-offset-${offset} col-xs-12`,
//               "col-xs-12 col-xs-offset-0"
//             )}>
//             <div>
//               <VideoWrapper
//                 url={embed.url}
//                 showControls={true}
//                 defaultUi={defaultUi}
//               />
//               {caption && (
//                 <figcaption className='text-xs md:text-sm text-right py-xs text-muted absolute right-0'>
//                   <PortableText
//                     value={_localizeField(caption)}
//                     components={portableTextComponents}
//                   />
//                 </figcaption>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default EmbedUI;
