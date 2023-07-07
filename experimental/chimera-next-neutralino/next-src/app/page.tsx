
"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { filesystem } from '@neutralinojs/lib'
import { useEffect, useState } from 'react'
import { init } from '@neutralinojs/lib';

export default function Home() {

  const [show, setShow] = useState(false);
  const [fileText, setFileText] = useState('');

  useEffect(() => {
    init();

    console.log("in useEffect");
    filesystem.readDirectory('./').then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hot module replacement practicecd 
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>


      <div className={styles.grid}>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>
            {fileText}
          </h1>
        </a>

      </div>
    </main>
  )
}
