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
    
    <p className={styles.content}>Vote em Mulheres e ajude a criar
uma sociedade mais justa e com 
maior representatividade!</p>
    
    <div className={styles.line}></div>
    
    <p className={styles.explain}>O APP Mulher Eleita Já!, tem como intuíto garantir visibilidade à candidatura de Mulheres para os cargos públicos a nível Municipal, Estadual e Federal, além de permitir acesso ao perfil das candidatas eleitas, estatísticas eleitorais e muito mais.</p>
    
   <a href="https://play.google.com/store/apps/details?id=com.doxaufpi.mulhereleitaja" target="_blank"> <img className={styles.badge} src="/google-play-badge.png" /></a>
    
     <p className={styles.footer}><a href="https://github.com/mariodias/" target="_blank">Developed by Mário Dias</a></p>
    
    </div>
  )
}
