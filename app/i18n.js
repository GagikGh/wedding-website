// app/i18n.js
export const locales = ['en', 'es'];
export const defaultLocale = 'en';

// Function to get messages based on your JSON structure
export async function getMessages(locale) {
  try {
    return (await import(`./i18n/${locale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for ${locale}`, error);
    return {};
  }
}