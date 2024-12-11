import { groq } from "next-sanity";
import { cachedClient, client } from "./sanity-client";
import { Home, Infos, Landing, PageModulaire, Settings } from "../types/schema";
import { contactsUI, heroUI, modules, seo, textUI } from "./fragments";

/*****************************************************************************************************
 * SETTINGS
 */
export async function getSettings(): Promise<Settings> {
  return client.fetch(
    groq`*[_type == "settings"][0]{
      ...,
      comboStudioLogo{
        ...,
			  asset->
      },
      navPrimary[]{
        ...,
        _type == 'linkInternal' => {
          ...,
          link->{
            _type,
            slug,
            subMenu
          },
        },
        _type == 'menuItem' => {
          ...,
          link{
            ...,
            link->{
              _type,
              slug,
              subMenu
            }
          },
          subMenu[]{
            ...,
            link->{
              _type,
              slug
            }
          }
        }
      },
      comboLogo{
        ...,
			  asset->
      },
    }`
  );
}

/*****************************************************************************************************
 * Landing
 */

export const landingQ = groq`*[_type == "landing"][0]{
  ...,
  seo{
    ${seo}
  },

  modules[]{
    ...,
    ${heroUI},
    ${textUI},
    ${contactsUI}
  }
}`;
export async function getLanding(): Promise<Landing> {
  // return client.fetch(landingQ, {});
  return cachedClient(landingQ, {});
}

/*****************************************************************************************************
 * Home
 */

export const homeQ = groq`*[_type == "home"][0]{
  ...,
  seo{
    ${seo}
  },

  modules[]{
    ${modules}
  }
}`;
export async function getHome(): Promise<Home> {
  return cachedClient(homeQ, {});
}
/*****************************************************************************************************
 * PAGE MODULAIRE
 */
export const pageModulaireQuery = groq`*[_type == "pageModulaire" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  },
}`;
export async function getPageModulaire(slug: string): Promise<PageModulaire> {
  return cachedClient(pageModulaireQuery, { slug: slug });
}
