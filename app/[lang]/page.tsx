import Image from 'next/image';
import { getFileUrl, getImageUrl, getPage } from '@/sanity/sanity-utils';
import { GiCrane } from "react-icons/gi";

import styles from './page.module.css';

import { Params } from '@/types/params';
import { Content, LocaleSwitcher } from './components';

export default async function Home({params: { lang } }: Params) {
  const data = await getPage('underConstruction', lang);

  return (
    <main className={styles.main}>
      <LocaleSwitcher lang={lang} />
      <div className={styles.hero}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Content content={data.hero.title} />
          </div>
          <div className={styles.desc}>
            <Content content={data.hero.desc} />
          </div>
          <a 
            className={styles.button}
            download
            href="https://cdn.sanity.io/files/te1jbfhy/production/d4765077ea5e8acc18e1d16257b03ea55954628c.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <Content content={data.downloadFile.title} />
          </a>
        </div>
        <Image
          alt="profile"
          height={400}
          priority
          src={getImageUrl(data.hero.image) || '/pol.png'}
          width={400}
        />
      </div>
      <div className={styles.underConstructionText}>
        {data.hero.text}
        <GiCrane />
      </div>
    </main>
  )
}
