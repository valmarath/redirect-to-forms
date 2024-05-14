"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const formIds = [
      '1FAIpQLSfTL0TkC7JAHm3P5tgcZbxqZQVAUQknqY08dme6LeTqf2TU9A', 
      '1FAIpQLSfG1a2V0m4qCTdDs-Iu5exk1aTbPmFjjmaf6Al92zhYr_2VbQ', 
      '1FAIpQLScD_Ip1qFMc5HxDscp9D5Dh9Fc_3FijKKirMMUtNT9ZoAxeKg', 
      '1FAIpQLSdBn5Rg4d7W-g2EirN71Ef6EHiKtx6L1AHCoBP9amVEzjhTEg'
      ];
    
      const formId = formIds[Math.floor(Math.random() * formIds.length)];
      const formUrl = 'https://docs.google.com/forms/d/e/' + formId + '/viewform';

      window.location.replace(formUrl)
  }, [])

  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <span>
          Redirecionando...
        </span>
        <br></br>
        <div class="loader"></div>
      </div>
    </main>
  );
}
