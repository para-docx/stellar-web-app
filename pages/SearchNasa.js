//imports
import QueryImage from "../components/QueryImage";
import styles from "./SearchNasa.module.css";
import Link from "next/link";

export default function Searchnasa() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                    <div className={styles.main}>
                        <div> <h1>Search the database </h1>  <br />
                            <QueryImage />
                        </div>
            </div>
            </div>
            <footer className={styles.footer}> 
            <Link href="/#" >
            <a className="btn btn-dark btn-lg " role="button" aria-pressed="true"> Back Home </a>
            </Link>
            </footer>
        </div>
    );
}
