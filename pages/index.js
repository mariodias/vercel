import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Head>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet" />
        </Head>
    
    <p className={styles.title}>Mulher Eleita Já!</p>
    <img src="/1.svg" className={styles.imagens1}/>
    <img src="/2.svg" className={styles.imagens2}/>
    <img src="/3.svg" className={styles.imagens3}/>
    <img src="/4.svg" className={styles.imagens4}/>
    <img src="/5.svg" className={styles.imagens5}/>
    
    </div>
  )
}
