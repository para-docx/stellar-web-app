import { useState, useEffect } from 'react'
import HttpClientapod from './HttpClientapod' 
import styles from './Apod.module.css'
import Link from 'next/link'

export default function Apod() {
  const [apod, setapod] = useState({})

  useEffect(() => {
    HttpClientapod.getApod().then(apodData => {
      setapod(apodData.data)
    })
  }, [])

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Astronomy Picture of the day</h1>
      {apod && (<article className={styles.container}>
        <h2 className={styles.apodname}>{apod.title}</h2>
        <img src={apod.url} alt={apod.title} width="800" height="auto" />
        <p>{apod.explanation}</p>
      </article>)}
      <footer> 
            <Link href="/#" >
            <a class="btn btn-dark btn-lg " role="button" aria-pressed="true"> Back Home </a>
            </Link>
            </footer>
    </div>
  )
}
