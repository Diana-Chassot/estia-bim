import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';

export default createMiddleware({
   defaultLocale: 'fr',
   locales,
   localePrefix
 
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};