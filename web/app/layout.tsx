import "./styles/index.scss";
import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import website from "./config/website";
// import { getSettings } from "./utils/sanity-queries";
import { PageContextProvider } from "./context/PageContext";
import { LocaleContextProvider } from "./context/LocaleContext";
import Cursor from "./components/ui/Cursor";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import CookieConsent from "./components/ui/CookieConsent";
import { getSettings } from "./sanity-api/sanity-queries";

export const metadata = {
  metadataBase: new URL(website.url),
  title: {
    template: `%s — ${website.title}`,
  },
  description: website.description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();
  return (
    <html lang='fr'>
      <body className={""} data-theme='theme-xyz'>
        {/* <PageTransition> */}
        <LocaleContextProvider>
          <PageContextProvider>
            <div id='page'>
              <Header settings={settings} />

              <main>{children}</main>
              <Footer settings={settings} />
              {/* <Cursor color="#fff" size={10} /> */}

              {(await draftMode()).isEnabled && <VisualEditing />}
              <CookieConsent legals={settings.legalsUrl} />
            </div>
          </PageContextProvider>
        </LocaleContextProvider>
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
