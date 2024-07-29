import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import GoToTopBtn from './components/GoToTopBtn/GoToTopBtn';
import GoogleAnalitics from './components/GoogleAnalitics/GoogleAnalitics';
export async function generateMetadata() {
  return {
    icons: {
      icon: "/favicon.ico",
    }
  }
}
const locales = ['en', 'fr' , 'de'];


export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages(locale);
  return (
    <html lang={locale} className='scroll-smooth'  translate='no' >
      <body>
      <NextIntlClientProvider locale={locale} messages={messages}>      
      <GoogleAnalitics/>
        <Navbar />
        {children}
        <Footer />
        </NextIntlClientProvider>  
        <GoToTopBtn/>
      </body>
    </html>
  )
}
