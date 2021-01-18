import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mulher Eleita Já!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
        <p className={styles.title}>
          Welcome to Next.js!
        </p>

      
   
        </div>
      

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
