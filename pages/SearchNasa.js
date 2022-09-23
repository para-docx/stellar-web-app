//imports
import styles from "./SearchNasa.module.css";
import Link from "next/link";
import { useState, useEffect } from 'react'

function useQuery(passed) {
    let [planet, setPlanet] = useState(passed)

    useEffect(() => {
        let current = true
        fetch(`https://images-api.nasa.gov/search?q=${passed}`)
            .then((res) => res.json())
            .then((res) => {
                if (current) {
                    setPlanet(res)
                }
            })
            .catch((error) => {
                console.log('error', error)
            })
        return () => {
            current = false
        }
    }, [planet])

    return planet
}

export default function QueryImage() {
    let [query, setQuery] = useState('nasa logo')
    let data = useQuery(query)
    let image = data.collection?.items[0] || null
    if (image?.links) {
        image = image.links[0]
    }
    let info = data.collection?.items[0]?.data[0]

    return (
        <div>
            <h1 className={styles.header}> <center> Search Nasa Database </center></h1>
            <div className={styles.main}>
            <input type="text" className={styles.searchbar} value={query} onChange={(e) => setQuery(e.target.value)} />
                {image && <img src={image.href} alt={info.title} className={styles.img} />}
              <p className={styles.data}>
                <strong className={styles.title}>{info?.title}:</strong>
                {info?.description} 
            </p>
            </div>
            <footer className={styles.footer}>
                <Link href="/#" >
                    <a className="btn btn-dark btn-lg " role="button" aria-pressed="true"> Back Home </a>
                </Link>
            </footer>
        </div>
    );
}
