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
      <h2 className="text-md md:text-lg">{children}</h2>
    ),
    "h3 text-2lg": ({ children }) => (
      <h3 className="text-md md:text-2lg">{children}</h3>
    ),
    "text-xl": ({ children }) => (
      <p className="text-md md:text-xl- headline">{children}</p>
    ),
  },
  types: {
    image: ({ value }) => {
      // console.log(value);
      return <Figure asset={value.asset} />;
    },
    embed: ({ value }) => {
      return <VideoWrapper url={value.url} />;
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
        <Link href={_linkResolver(value.reference)} className="btn--pill">
          {children}
        </Link>
      );
    },
    linkExternal: ({ children, value }) => {
      // console.log(value);
      return (
        <a
          href={value.href}
          rel={"noreferrer noopener"}
          target="_blank"
          className={value.cta ? "btn--pill" : ""}
        >
          {children}
        </a>
      );
    },
    align_left: ({ children, value }) => (
      <span className="text-left block">{children}</span>
    ),
    align_center: ({ children, value }) => (
      <span className="text-center block">{children}</span>
    ),
    align_right: ({ children, value }) => (
      <span className="text-right block">{children}</span>
    ),
  },
};

export default portableTextComponents;
