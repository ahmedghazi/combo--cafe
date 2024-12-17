"use client";
import React from "react";
import { hasCookie, setCookie, deleteCookie } from "cookies-next";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState<
    boolean | Promise<boolean>
  >(true);
  const has: boolean | Promise<boolean> = hasCookie("localConsent");

  React.useEffect(() => {
    setShowConsent(has);
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  const refuseCookie = () => {
    setShowConsent(true);
    deleteCookie("localConsent");
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className='cookies '>
      <div className='inner '>
        <div className='mb-md'>
          Ce site internet utilise des cookies. Nous utilisons des cookies sur
          notre site pour améliorer votre expérience de navigation
        </div>
        <div className='flex gap-1e'>
          <button
            className='btn--pill- underline'
            onClick={() => refuseCookie()}>
            REFUSER
          </button>
          <button className='btn--pill' onClick={() => acceptCookie()}>
            ACCEPTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
