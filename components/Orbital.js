import Hazard from './Hazard';
import Passing from './Passing';

export default function Orbital({
	name,
	is_potentially_hazardous_asteroid,
	close_approach_data,
	nasa_jpl_url,
}) {
	return (
		<div className="d-flex justify-content-around">
			<div className="text-bg-primary p-3 border-dark mb-3 text-center rounded-4">
				<div
					className={is_potentially_hazardous_asteroid ? 'is-hazard' : 'no-hazard'}
				>
					<h2>Name: {name.replace(/[()]/g, '')}</h2>
					<p>
						Potentially hazardous?{' '}
						<Hazard yes={is_potentially_hazardous_asteroid} />
					</p>
					<Passing data={close_approach_data} />
				</div>
			</div>
		</div>
	);
}