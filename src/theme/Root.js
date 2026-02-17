import React, { useEffect } from 'react';
import Gleap from 'gleap'; // See https://gleap.io/docs/javascript/ and https://app.gleap.io/projects/62697858a4f6850036ae2e6a/widget
import { withRouter } from 'react-router-dom';
import useIsBrowser from '@docusaurus/useIsBrowser'; // https://docusaurus.io/docs/advanced/ssg#useisbrowser

function initializeGleap() {
  if (typeof window !== "undefined") {
    const gleapSdkToken = "K2v3kvAJ5XtPzNYSgk4Ulpe5ptgBkIMv";
    // do not check newTab here. Submit code prior to calling this to determine if this is a new tab in the session.
    Gleap.initialize(gleapSdkToken);
    // NEAR-247: Sanitize open-url messages from Gleap
    Gleap.setUrlHandler((url, newTab) => {
      try {
        const parsed = new URL(url, window.location.href);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
          console.warn(
            "Blocked invalid Gleap navigation to unsafe protocol:",
            parsed.protocol
          );
          return;
        }
        if (newTab) {
          window.open(parsed.href, "_blank")?.focus();
        } else {
          window.location.href = parsed.href;
        }
      } catch (e) {
        console.warn("Blocked invalid Gleap URL:", url, e);
      }
    });
  }
}

function Root({ children, location }) {
  const isBrowser = useIsBrowser();

  useEffect(() => {
    if (isBrowser) initializeGleap();
  }, [isBrowser]);

  return children;
}

const router = withRouter(Root);
export default router;
