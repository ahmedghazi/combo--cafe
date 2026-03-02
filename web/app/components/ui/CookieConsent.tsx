"use client";
import React from "react";
import { hasCookie, setCookie, deleteCookie } from "cookies-next";
import { LinkInternal } from "@/app/types/schema";
import Link from "next/link";
import { _linkResolver, _localizeField } from "@/app/sanity-api/utils";

type LegalslinkProps = {
  input: LinkInternal;
};
const Legalslink = ({ input }: LegalslinkProps) => (
  <Link className="underline" href={_linkResolver(input.link)}>
    {_localizeField(input.label)}
  </Link>
);
type Props = {
  legals?: LinkInternal;
};

const CookieConsent = ({ legals }: Props) => {
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
    <div className="cookies ">
      <div className="inner ">
        <div className="mb-md">
          Ce site internet utilise des cookies. Nous utilisons des cookies sur
          notre site pour améliorer votre expérience de navigation.{" "}
          {legals && <Legalslink input={legals} />}
        </div>
        <div className="flex gap-md">
          <button
            className="btn--pill- underline"
            onClick={() => refuseCookie()}
          >
            REFUSER
          </button>
          <button className="btn--pill" onClick={() => acceptCookie()}>
            ACCEPTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
