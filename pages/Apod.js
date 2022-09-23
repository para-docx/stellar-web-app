import { useState, useEffect } from 'react'
import styles from './Apod.module.css'
import Link from 'next/link'
import axios from 'axios'

export default function Apod() {

  function getApod() {
    return axios.get("https://api.nasa.gov/planetary/apod?api_key=vRjbG1KkWxFf5DJQPypSpEFd3GuIbRXDNeyt9Vfs")
  }
  
  const [apod, setapod] = useState({})

  useEffect(() => {
    getApod().then(apodData => {
      setapod(apodData.data)
    })
  }, [])

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Astronomy Picture of the day</h1>
      {apod && (<article className={styles.container}>
        <h2 className={styles.apodname}>{apod.title}</h2>
        <img className={styles.img} src={apod.url} alt={apod.title} width="800" height="auto" />
        <div className={styles.spacer}> 
        <p>{apod.explanation}</p> </div>
      </article>)}
      <footer className={styles.footer}> 
            <Link href="/#" >
            <a className="btn btn-dark btn-lg " role="button" aria-pressed="true"> Back Home </a>
            </Link>
            </footer>
    </div>
  )
}
