import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale = 'es' }) => {
  if (!locale) throw new Error('No locale found in getRequestConfig!');

  const messages = (await import(`../app/i18n/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
