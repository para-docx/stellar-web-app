import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ParticleBg from '../components/ParticleBg'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Stellar web app</title>
      </Head>
    
      <ParticleBg />
      <main className={styles.main}>
      
        <h1 className={styles.title}>
          Welcome to Stellar web app
        </h1>
        <h3 className={styles.description}>
        <div className="d-grid d-md-flex justify-content-md-center ">
          <ul className={styles.ul}>
            <li>
              <Link href="/SearchNasa">
                <a className="btn btn-dark btn-lg">Search NASA</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/Apod">
                <a className="btn btn-dark btn-lg">Astronomy Picture of the day</a>
              </Link>
            </li>
            <li>
              <Link href="/Asteroid">
                <a className="btn btn-dark btn-lg">Asteroid Tracker</a>
              </Link>
            </li>
          </ul>
        </div>
        </h3>
      </main>


      <footer className={styles.footer}>
        Made with ❤️ by Dhruv Kumar
      </footer>

    </div>
  )
}

