import es from '@/i18n/es.json'
import en from '@/i18n/en.json'

export const getI18N = ({
  currentLocale = 'es',
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === 'en') return { ...es, ...en }
  return es
}
