import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.js');

const nextConfig = {
  // your other Next.js config
};

export default withNextIntl(nextConfig);