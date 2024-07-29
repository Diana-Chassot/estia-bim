import Banner from './components/Banner/index.jsx';
import Companies from './components/Companies/index';
import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Faq from './components/Faq/index';
import Advantages from './components/Advantages/index';
import {baseUrl} from './utils/baseUrl';
import {localeDetect} from './utils/localeDetect';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params }) {    
  const locale = params.locale;
  const url = localeDetect(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(baseUrl),
    title: t('home-meta-title'),
    description: t('home-meta-description'),
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
export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Features />
      <Simple />
      <Advantages/>
      <Faq />
    </main>
  )
}
