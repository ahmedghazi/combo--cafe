import { groq } from "next-sanity";
import { sanityFetch } from "./sanity.client";
import { Home, PageModulaire, Settings } from "../types/schema";
import { modules, seo } from "./fragments";
// import { revalidatePath } from "next/cache";

/*****************************************************************************************************
 * SETTINGS
 */
export const settingsQuery = groq`*[_type == "settings"][0]{
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
        // link->{
        //   _type,
        //   slug
        // }
        _type == 'linkInternal' => {
          ...,
          link->{
            _type,
            slug,
            subMenu
          },
        },
      }
    }
  },
  navSecondary[]{
    ...,
    _type == 'linkInternal' => {
      ...,
      link->{
        _type,
        slug,
        subMenu
      },
    },
  },
  comboLogo{
    ...,
    asset->
  },
  legalsUrl{
    ...,
    link->{
      _type,
      slug,
    }
  }
}`;

export async function getSettings(): Promise<Settings> {
  return sanityFetch({
    query: settingsQuery,
    tags: ["settings"],
  });
  // return client.fetch(

  // );
}

/*****************************************************************************************************
 * Landing
 */

// export const landingQ = groq`*[_type == "landing"][0]{
//   ...,
//   seo{
//     ${seo}
//   },

//   modules[]{
//     ...,
//     ${heroUI},
//     ${textUI},
//     ${contactsUI}
//   }
// }`;
// export async function getLanding(): Promise<Landing> {
//   // return client.fetch(landingQ, {});
//   return cachedClient(landingQ, {});
// }

/*****************************************************************************************************
 * Home
 */

export const HOME_QUERY = groq`*[_type == "home"][0]{
  ...,
  seo{
    ${seo}
  },

  modules[]{
    ${modules}
  }
}`;
export async function getHome(): Promise<Home> {
  return sanityFetch({
    query: HOME_QUERY,
    tags: ["home"],
  });
  // return cachedClient(HOME_QUERY, {});
}
/*****************************************************************************************************
 * PAGE MODULAIRE
 */
export const PAGE_MODULAIRE_QUERY = groq`*[_type == "pageModulaire" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  },
}`;
export async function getPageModulaire(slug: string): Promise<PageModulaire> {
  // revalidatePath(slug);
  return sanityFetch({
    query: PAGE_MODULAIRE_QUERY,
    tags: ["pageModulaire"],
    qParams: { slug: slug },
  });
  // return cachedClient(PAGE_MODULAIRE_QUERY, { slug: slug });
}

export const getAllPagesQuery = groq`*[_type == "pageModulaire"]{
  _type, slug
}`;
export async function getAllPagesModulaire(): Promise<PageModulaire[]> {
  // revalidatePath(slug);
  return sanityFetch({
    query: getAllPagesQuery,
    tags: ["pagesModulaire"],
  });
}
