import { useState } from 'react';
import { Restaurant } from '../data/restaurant';

interface MenuProps {
	data: Restaurant | null;
	setLocationData: (state: Restaurant | null) => void;
}

export default function Menu({ data, setLocationData }: MenuProps) {
	console.log(data);
	return (
		<div className='menu'>
			{data !== null ? (
				<>
					<p>{data.name}</p>
					<p>{data.cuisine}</p>
					<button onClick={() => setLocationData(null)}>Close</button>
				</>
			) : (
				<p>click a location to see more info!</p>
			)}
		</div>
	);
}
