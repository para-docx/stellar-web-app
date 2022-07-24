import addDays from "date-fns/addDays";
import format from "date-fns/format";
import { useAsync } from 'react-async-hook';
import Orbital from "../components/Orbital";
import styles from './Asteroid.module.css';
import Link from "next/link";


function getDate(d = new Date()) {
	return d.toJSON().split('T')[0];
}

const fetchData = () =>
	fetch(
		`https://api.nasa.gov/neo/rest/v1/feed?start_date=${getDate()}&api_key=vRjbG1KkWxFf5DJQPypSpEFd3GuIbRXDNeyt9Vfs`
	).then((res) => res.json());

export default function App() {

	const data = useAsync(fetchData, []);

	if (data.loading) {
		// document.title = 'Counting potential earth HAZARDS…';

		return (
			<p>
				Getting data from NASA API...
			</p>
		);
	}

	const day = getDate(addDays(new Date(), 1));
	const hazards = data.result.near_earth_objects[day].reduce((acc, curr) => {
		if (curr.is_potentially_hazardous_asteroid) {
			return acc + 1;
		}
		return acc;
	}, 0);


	const results = data.result.near_earth_objects[day];
	return (
		<div className={styles.container}>
			<div className={styles.main}>
		<div className={styles.top}>	
		   <img src="/nasa.png" alt="..." className={styles.images}></img>			
				<center> <h1>
					{format(addDays(new Date(), 1), 'EEEE d-MMM')} there will be {' '}
					<strong>{results.length}</strong> near misses
				</h1> </center>
				</div>
				<hr></hr>	

				{results
					.sort((a) => (a.is_potentially_hazardous_asteroid ? -1 : 1))
					.map((data) => (
						<div className="d-flex justify-content-around">
							<div className="text-bg-primary p-3 border-dark mb-3 text-center rounded-4">
								<Orbital key={data.id} {...data} />
							</div>
						</div>
					))}
			
			<footer> 
                <Link href="/#" >
            <a className="btn btn-dark btn-lg " role="button" aria-pressed="true"> Back Home </a>
            </Link>
            </footer>
			</div>
		</div>


	);
}