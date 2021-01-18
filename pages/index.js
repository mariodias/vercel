import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    
    <p className={styles.title}>Mulher Eleita Já!</p>
    <img src="/1.png" className={styles.imagens1}/>
    <img src="/2.png" className={styles.imagens2}/>
    <img src="/3.png" className={styles.imagens3}/>
    <img src="/4.png" className={styles.imagens4}/>
    <img src="/5.png" className={styles.imagens5}/>
    
    <Image
  src="/1.png"
  alt="Picture of a triangle"
  width={400}
  height={815.93}
/>
    
    </div>
  )
}
