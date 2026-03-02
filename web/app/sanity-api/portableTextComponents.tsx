import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "./sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { _linkResolver } from "./utils";
import Figure from "../components/ui/Figure";
import { VideoWrapper } from "../components/ui/player";

const portableTextComponents: PortableTextComponents = {
  // block(props) {
  //   console.log(props)
  //   switch (props.node?.style) {
  //     case "h2":
  //       return <h2>{props.children}</h2>
  //     case "text-lg":
  //       return <p className="text-lg">{props.children}</p>
  //     case "text-xl":
  //       return <p className="text-xl">{props.children}</p>
  //     default:
  //       return <p>{props.children}</p>
  //   }
  // },
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    "h2 text-lg": ({ children }) => (
      <p className='text-md md:text-lg'>{children}</p>
    ),
    "h2 text-2lg": ({ children }) => (
      <p className='text-m-2lg md:text-2lg'>{children}</p>
    ),
    "h3 text-2lg": ({ children }) => (
      <p className='text-m-2lg md:text-2lg'>{children}</p>
    ),
    "h3 text-lg": ({ children }) => (
      <p className='text-md md:text-lg'>{children}</p>
    ),
    "text-lg": ({ children }) => (
      <p className='text-md md:text-lg '>{children}</p>
    ),
    "text-2lg": ({ children }) => (
      <p className='text-m-2lg md:text-2lg '>{children}</p>
    ),
    "text-xl": ({ children }) => <p className='text-md headline'>{children}</p>,
  },
  types: {
    image: ({ value }) => {
      return <Figure asset={value.asset} />;
    },
    embed: ({ value }) => {
      if (value.url) {
        return <VideoWrapper url={value.url} />;
      }
      if (value.iframe) {
        return <div dangerouslySetInnerHTML={{ __html: value.iframe }} />;
      }
    },
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    linkInternal: ({ children, value }) => {
      return <Link href={_linkResolver(value.reference)}>{children}</Link>;
    },
    linkInternalCta: ({ children, value }) => {
      return (
        <Link href={_linkResolver(value.reference)} className='btn--pill'>
          {children}
        </Link>
      );
    },
    linkExternal: ({ children, value }) => {
      return (
        <a
          href={value.href}
          rel={"noreferrer noopener"}
          target='_blank'
          className={value.cta ? "btn--pill" : ""}>
          {children}
        </a>
      );
    },
    align_left: ({ children, value }) => (
      <span className='text-left block'>{children}</span>
    ),
    align_center: ({ children, value }) => (
      <span className='text-center block'>{children}</span>
    ),
    align_right: ({ children, value }) => (
      <span className='text-right block'>{children}</span>
    ),
  },
};

export default portableTextComponents;
