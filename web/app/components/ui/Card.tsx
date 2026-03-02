import { BlockContent, Figure } from "@/app/types/schema";
import React from "react";
import FigureUI from "./Figure";
import { PortableText } from "next-sanity";
import FigureComponent from "./Figure";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";

type Props = {
  image?: Figure;
  title?: string;
  tag?: string;
  excerpt?: string;
  text?: BlockContent;
};

const Card = ({ image, title, tag, excerpt, text }: Props) => {
  // console.log(title);
  // console.log(text);
  return (
    <article className='card'>
      <div className='inner'>
        {image && <FigureComponent asset={image.image} />}
        <div className='content'>
          <div className='header'>
            {title && <h3>{title}</h3>}
            {tag && <span className='cartouche cartouche--sm'>{tag}</span>}
          </div>
          {!text && excerpt && <p className='excerpt'>{excerpt}</p>}
          {text && (
            <div className='text'>
              <PortableText value={text} components={portableTextComponents} />
            </div>
          )}
        </div>
      </div>
      {/* <pre>{JSON.stringify(text, null, 2)}</pre> */}
    </article>
  );
};

export default Card;
