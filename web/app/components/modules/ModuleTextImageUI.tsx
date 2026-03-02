// import React from "react";
// import { PortableText } from "@portabletext/react";
// import portableTextComponents from "@/app/sanity-api/portableTextComponents";
// import { TextImageUI } from "@/app/types/schema";
// import Figure from "../ui/Figure";
// import clsx from "clsx";

// type Props = {
//   input: TextImageUI;
// };

// const ModuleTexteImageUI = ({ input }: Props): JSX.Element => {
//   const { title, text, image, width, offset } = input;
//   // console.log(input);
//   return (
//     <section className='module module--text-image mb-lg'>
//       <div className='row no-gutter'>
//         <div
//           className={clsx(`col-md-${width} col-md-offset-${offset} col-xs-12`)}>
//           <div className='row'>
//             <div className='col-md-6 col-xs-12'>
//               <div className='media max-w-full mb-md'>
//                 {image && <Figure asset={image.asset} />}
//               </div>
//             </div>
//             <div className='col-md-6 col-xs-12'>
//               {text && (
//                 <PortableText
//                   value={text}
//                   components={portableTextComponents}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ModuleTexteImageUI;
