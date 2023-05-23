'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale, i18n } from '@/i18n-config';

import styles from './LocaleSwitcher.module.css'

interface LocaleProps {
  lang: Locale;
}

export default function LocaleSwitcher({ lang }: LocaleProps) {
  const pathName = usePathname()
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div>
      <ul className={styles.listWrapper}>
        {i18n.locales.map((locale) => {
          const redirectedPath = redirectedPathName(locale);
          const isActive = `/${lang}` === redirectedPath;
          const customLocale = locale === 'ca' ? 'cat' : locale
          
          return (
            <li key={locale} className={styles.localeItem}>
              <Link
                href={redirectedPath}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
              >
                {customLocale}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
