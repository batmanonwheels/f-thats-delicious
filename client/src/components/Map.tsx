export default function Map() {
	const initializeMap = async (): Promise<void> => {
		//@ts-ignore
		let map: google.maps.Map;

		//@ts-ignore
		const { Map } = await google.maps.importLibrary('maps');
		map = new Map(document.getElementById('map') as HTMLElement, {
			center: { lat: 40.712, lng: 74.006 },
			zoom: 8,
		});
	};

	initializeMap();

	// const loader = new Loader({
	// 	apiKey: '',
	// 	version: 'weekly',
	// });

	// loader.load().then(async () => {
	// 	// @ts-ignore google
	// 	const { Map } = (await google.maps.importLibrary(
	// 		'maps'
	// 	)) as google.maps.MapsLibrary;
	// 	let map = new Map(document.getElementById('map') as HTMLElement, {
	// 		center: { lat: -34.397, lng: 150.644 },
	// 		zoom: 8,
	// 	});

	return <div id='map'></div>;
}
