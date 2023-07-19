"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { Command } from '@tauri-apps/api/shell';
import { inputParser } from '@/lib/utils/inputParser';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [show, setShow] = useState(false);

  const handleExecuteCommand = async () => {   
    const {commandString, argList} = inputParser(inputText);

    const command = new Command(commandString, argList);

    const output = await command.execute(); 

    if (output.stderr) {
      setOutputText(output.stderr);
    } else {
      setOutputText(output.stdout);
    }

    setShow(true);
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
        <input type='text' value={inputText} onChange={event => setInputText(event.target.value)}  />
      </div>

      <button onClick={handleExecuteCommand} className={styles.button}>
        Execute Command
      </button>

      {show && <p>{outputText}</p>}

      

    </main>
  )
}
