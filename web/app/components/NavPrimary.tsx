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
import { usePathname, useRouter } from "next/navigation";
import LinkTransition from "./ui/LinkTransition";
import clsx from "clsx";
import { _linkResolver, _localizeField } from "../sanity-api/utils";

type NavLinkProps = {
  href: string;
  name: string;
  cta: boolean;
};

const NavLink = ({ href, name, cta }: NavLinkProps) => {
  // const { asPath } = useRouter();
  const pathname = usePathname();
  const ariaCurrent = href !== "/" && href === pathname ? "page" : undefined;

  return (
    <LinkTransition href={href} aria-current={ariaCurrent} cta={cta}>
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

  return (
    <nav>
      <ul className="menu flex justify-start items-center">
        {input.map((item, i) => (
          <li
            key={i}
            className={clsx(
              `menu--${item._type}`,
              item._type === "linkInternal" &&
                isLinkInternalWithSubmenu(item) &&
                "has-submenu",
              item._type === "linkInternal" && item.cta && "is-cta",
              item._type === "menuItem" && item.subMenu && "has-submenu",
            )}
          >
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
              cta={item._type === "linkInternal" && item.cta === true}
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
                    {subItem._type === "linkInternal" && (
                      <Link href={_linkResolver(subItem.link)}>
                        {_localizeField(subItem.label)}
                      </Link>
                    )}
                    {subItem._type === "linkExternal" && (
                      <a
                        href={subItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subItem.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPrimary;
