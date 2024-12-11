"use client";
import React from "react";
import {
  KeyVal,
  LinkExternal,
  LinkInternal,
  MenuItem,
  SanityKeyed,
} from "../types/schema";
import Link from "next/link";
import { _linkResolver, _localizeField, _localizeText } from "../utils/utils";
import { usePathname, useRouter } from "next/navigation";
import LinkTransition from "./ui/LinkTransition";

type NavLinkProps = {
  href: string;
  name: string;
};

const NavLink = ({ href, name }: NavLinkProps) => {
  // const { asPath } = useRouter();
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? "page" : undefined;

  return (
    <LinkTransition href={href} aria-current={ariaCurrent}>
      {name}
    </LinkTransition>
  );
};

type Props = {
  input: Array<
    | SanityKeyed<LinkInternal>
    | SanityKeyed<LinkExternal>
    | SanityKeyed<MenuItem>
  >;
};
const NavPrimary = ({ input }: Props) => {
  // console.log(input);
  const isLinkInternalWithSubmenu = (item: SanityKeyed<LinkInternal>) => {
    return (
      item.link?._type === "pageModulaire" &&
      item.link.subMenu &&
      item.link.subMenu.length > 0
    );
  };
  const isMenuItemWithSubmenu = (item: SanityKeyed<MenuItem>) => {
    return item.subMenu && item.subMenu.length > 0;
  };
  // console.log(input);
  return (
    <nav>
      <ul className="menu flex justify-center">
        {input.map((item, i) => (
          <li key={i}>
            <NavLink
              href={
                item._type === "menuItem"
                  ? _linkResolver(item.link?.link)
                  : _linkResolver(item.link)
              }
              name={
                item._type === "menuItem"
                  ? _localizeField(item.link?.label)
                  : _localizeField(item.label)
              }
            />
            {item._type === "linkInternal" &&
              isLinkInternalWithSubmenu(item) && (
                <ul className="sub-menu">
                  {item.link?._type === "pageModulaire" &&
                    item.link.subMenu &&
                    item.link.subMenu.map((subItem: KeyVal, j: number) => (
                      <li key={j}>
                        <Link
                          href={`${_linkResolver(item.link)}#${subItem.val}`}
                        >
                          {_localizeField(subItem.key)}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}

            {item._type === "menuItem" && isMenuItemWithSubmenu(item) && (
              <ul className="sub-menu">
                {item.subMenu?.map((subItem, j) => (
                  <li key={j}>
                    <Link href={_linkResolver(subItem.link)}>
                      {_localizeField(subItem.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {/* {item._type === "linkInternal" &&
              isLinkInternalWithSubmenu(item) && (
                <ul className="sub-menu">
                  {item.link.subMenu.map((subItem: KeyVal, j: number) => (
                    <li key={j}>
                      <Link href={`${_linkResolver(item.link)}#${subItem.val}`}>
                        {_localizeField(subItem.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            {item._type === "menuItem" && isMenuItemWithSubmenu(item) && (
              <ul className="sub-menu">
                {item.subMenu &&
                  item.subMenu.map((subItem, j: number) => (
                    <li key={j}>
                      <Link href={_linkResolver(subItem.link)}>
                        {_localizeField(subItem.label)}
                      </Link>
                    </li>
                  ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPrimary;
