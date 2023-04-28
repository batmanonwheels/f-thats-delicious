import { useMemo, useState } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import './styles/Map.css';
import { Restaurant, restaurants } from '../data/restaurant';
import Menu from './Menu';

export default function Map() {
	const [locationData, setLocationData] = useState<Restaurant | null>(null);
	console.log(locationData);

	const center = useMemo(() => ({ lat: 40.6958, lng: -73.9171 }), []);

	const markers: JSX.Element[] = restaurants.map((rest) => (
		<MarkerF
			key={rest.id}
			position={{
				lat: rest.geographies.coordinates[0],
				lng: rest.geographies.coordinates[1],
			}}
			onClick={() => setLocationData(rest)}
		/>
	));

	return (
		<GoogleMap
			zoom={3}
			center={center}
			mapContainerStyle={{
				width: '100%',
				height: '100%',
			}}
			mapContainerClassName='map-container'
		>
			{markers}
			{locationData !== null ? (
				<Menu data={locationData} setLocationData={setLocationData} />
			) : null}
		</GoogleMap>
	);
}
