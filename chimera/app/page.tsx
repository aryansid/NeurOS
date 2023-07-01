"use client";
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.scss'


export default function Home() {

  const [inputText, setInputText] = useState('');

  const handleInput = (event: any) => {
    setInputText(event.target.value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello Aryan
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
          <h2>
            Input Text Prompt:
          </h2>

          <input type='text' value={inputText} onChange={handleInput} />
          <h1> Test: {inputText}</h1>
      </div>
    </main>
  )
}
