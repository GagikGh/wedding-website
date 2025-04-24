// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/:locale(en|es)', '/:locale(en|es)/:path*'],
};
