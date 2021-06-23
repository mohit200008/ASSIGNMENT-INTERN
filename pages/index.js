import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
       <title>ML-app</title>
       <meta name="keywords" content="ml-app"></meta>
    
    </Head>
    <div>
      
       <h1 className={styles.title}>Homepage</h1>
       <p className={styles.text}>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
       Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
       <p className={styles.text}>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. </p>
       <Link href="/covid">
           <a className={styles.btn}>See CovidListing</a>
       </Link>
    </div>
    </>
  )
}
