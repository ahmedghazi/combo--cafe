"use client";
import React from "react";
import { Settings } from "../types/schema";
import Image from "next/image";
import { urlFor } from "../utils/sanity-utils";
import { PortableText } from "next-sanity";
import { _localizeField } from "../utils/utils";
import portableTextComponents from "../utils/portableTextComponents";
import AOS from "./ui/AOS";

type Props = {
  settings: Settings;
};

const Footer = ({ settings }: Props) => {
  // const {}
  return (
    <footer>
      <div className="grid md:grid-cols-3 gap-lg md:gap-md">
        <div className="text">
          {settings.footerInfos && (
            <div className="text mx-auto">
              <AOS>
                <PortableText
                  value={_localizeField(settings.footerInfos)}
                  components={portableTextComponents}
                />
              </AOS>
            </div>
          )}
        </div>
        <div className="logo">
          {settings.comboLogo && (
            <Image
              src={urlFor(settings.comboLogo?.asset, 230)}
              width={
                settings.comboLogo.asset?.metadata?.dimensions.width || 230
              }
              height={
                settings.comboLogo.asset?.metadata?.dimensions.height || 230
              }
              alt={"Combo Studio settings.comboLogo"}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: `${settings.comboLogo.asset?.metadata?.dimensions.width} / ${settings.comboLogo.asset?.metadata?.dimensions.height}`,
                // objectFit: "cover",
              }}
              blurDataURL={settings.comboLogo.asset?.metadata?.lqip}
              // placeholder='blur'
              // placeholder={logo.asset?.metadata?.lqip}
            />
          )}
        </div>
        <nav id="nav-secondary">
          <AOS delay={1}>
            <ul className="flex flex-col md:items-end">
              {settings.navSecondary?.map((item, i) => (
                <li key={i}>
                  {item.link && item.label && item._type === "linkExternal" && (
                    <a href={item.link}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </AOS>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
