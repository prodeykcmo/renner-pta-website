import { useEffect } from 'react';
import { siteConfig } from '../siteConfig';

// Google Translate website widget. Free, supports 100+ languages.
// Renders an inline language selector inside #google_translate_element.
//
// Note: Google's website translate widget is officially "deprecated" but
// continues to work and is the only no-code, free way to translate a static
// site. If it ever stops working, swap to Weglot or build manual i18n.

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLayout?: number; includedLanguages?: string; autoDisplay?: boolean },
          el: string,
        ) => unknown;
      } & {
        TranslateElement: { InlineLayout: { SIMPLE: number } };
      };
    };
  }
}

export default function TranslateWidget() {
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const g = (window as any).google;
      if (!g?.translate?.TranslateElement) return;
      new g.translate.TranslateElement(
        {
          pageLayout: g.translate.TranslateElement.InlineLayout.SIMPLE,
          includedLanguages:
            siteConfig.translate.includedLanguages === 'all'
              ? ''
              : siteConfig.translate.includedLanguages,
          autoDisplay: false,
        },
        'google_translate_element',
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="text-xs sm:text-sm" aria-label="Translate this site">
      {/* Thin red spirit stripe at the very top of every page */}
      <div className="h-1 bg-scarlet-500" aria-hidden />
      <div className="bg-navy-700 text-cream-50">
        <div className="container-px flex flex-wrap items-center justify-between gap-2 py-1.5">
          <span className="opacity-90">🌐 Translate this site:</span>
          <div id="google_translate_element" />
        </div>
      </div>
    </div>
  );
}
