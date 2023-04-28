import { useCallback, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import Map from './Map';
import Menu from './Menu';
import './styles/App.css';

interface Coordinates {
	lat: number;
	lng: number;
}
interface MapProps {
	googleMapsApiKey: string;
}

export default function App() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
	});

	return <>{isLoaded ? <Map /> : <div>Loading...</div>}</>;
}
