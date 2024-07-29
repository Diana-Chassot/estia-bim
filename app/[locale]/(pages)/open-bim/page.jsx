import Content from "./Content";
import {baseUrl} from '../../utils/baseUrl';
import {localeDetect} from '../../utils/localeDetect';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params }) {    
  const locale = params.locale;
  const url = localeDetect(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(baseUrl),
    title: t('openbim-meta-title'),
    description: t('openbim-meta-description'),
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/en`,
        'de': `${baseUrl}/de`,
        'fr': baseUrl
      }
    },
  };
}
function openBim() {
  return (
    <main className="">
      <Content />
    </main>
  );
}

export default openBim;
