import styles from './QueryImage.module.css'
import { useState, useEffect } from 'react'

export function useQuery(passed) {
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
    <div className={styles.query}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <div role="figure" aria-labelledby="caption" className={styles.figure}>
            {image && <img src={image.href} alt={info.title} className={styles.img} />}
            <p>
                <strong className={styles.title}>{info?.title}:</strong> 
              <div className={styles.discribe}>{info?.description} </div>
            </p>
    </div>        
    </div>

  )
}