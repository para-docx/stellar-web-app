//imports
import BuiltImage from "../components/BuiltImage";
import QueryImage from "../components/QueryImage";
import styles from "./SearchNasa.module.css";
import Link from "next/link";

export default function Searchnasa(props) {

    let { image, info } = props;

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.main}>
                        <div className="build-time">
                            <h1>Checking the API </h1> <br />
                            <div className={styles.spacer}></div>
                            <BuiltImage image={image} info={info} />
                        </div>
                        <div> <h1>Search the database </h1>  <br />
                            <QueryImage />
                        </div>
                    </div>
                </div>
            </div>
            <footer> 
                <Link href="/#" >
            <a class="btn btn-dark btn-lg " role="button" aria-pressed="true"> Back Home </a>
            </Link>
            </footer>
        </div>
    );
}


export async function getStaticProps() {
    const res = await fetch(`https://images-api.nasa.gov/search?q=neptune`)
    const data = await res.json()

    let image = data.collection.items[0].links[0].href
    let info = data.collection.items[0].data[0]

    return {
        props: { image, info },
    }
}