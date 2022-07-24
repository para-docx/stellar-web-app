import styles from './BuiltImage.module.css'

export default function BuiltImage({ image, info }) {
    return (
        <div role="figure" aria-labelledby="caption" className={styles.figure}>
            <img className={styles.img} src={image} alt={info?.discription} />
            <p id="caption">
                <strong className={styles.title}>{info?.title}:</strong> {info?.description}
            </p>
        </div>
    )
}