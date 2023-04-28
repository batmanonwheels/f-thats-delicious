export interface Restaurant {
	id: number;
	name: string;
	cuisine: string;
	food_ordered: string[];
	geographies: Geography;
	season: number;
	episode_number: number;
	episode_title: string;
	cast_members_present: string[];
	noteworthy_mentions: string[];
}

interface Geography {
	street_address: string;
	city: string;
	state: string;
	zip_code: number;
	country: string;
	coordinates: number[];
}

export const restaurants: Restaurant[] = [
	{
		id: 1,
		name: "Rose's Luxury",
		cuisine: 'American',
		food_ordered: [
			'Aged Hennessy',
			'Smoked Trout Mousse on Rice Crisp',
			'Chicken Fried Oysters',
			'Lychee and Pork Salad',
			'Scrambled Eggs over Soft Boiled Eggs',
			'12 Hour Smoked Brisket',
			'Catfish',
		],
		geographies: {
			street_address: '717 8th St SE',
			city: 'Washington D.C.',
			state: 'Washington D.C.',
			zip_code: 20003,
			country: 'US',
			coordinates: [38.88079750610072, -76.99515735876835],
		},
		season: 1,
		episode_number: 1,
		episode_title: 'Multiculturalism at Its Best',
		cast_members_present: [
			'Action Bronson',
			'Alchemist',
			'Meyhem Lauren',
			'Big Body Bes',
		],
		noteworthy_mentions: [
			'Action loves the exposed brickery',
			'When Mey walks in it becomes a soul food restaurant',
		],
	},
	{
		id: 2,
		name: "Wyatt's Country BBQ",
		cuisine: 'BBQ',
		food_ordered: ['Barbecue Chicken', 'Barbecue Ribs', 'Bev'],
		geographies: {
			street_address: '1674 Memorial Dr SE',
			city: 'Atlanta',
			state: 'Georgia',
			zip_code: 30317,
			country: 'US',
			coordinates: [33.74810951233384, -84.3329796166144],
		},
		season: 1,
		episode_number: 1,
		episode_title: 'Multiculturalism at Its Best',
		cast_members_present: [
			'Action Bronson',
			'Alchemist',
			'Meyhem Lauren',
			'Big Body Bes',
		],
		noteworthy_mentions: [
			"Brought there by FRKO RICO, Action's album cover illustrator",
			'Cooked with an old-fashioned rock pit',
			'Only the true connoissuer, the lover of all delicious things would know that this is the place to come to.',
		],
	},
	{
		id: 3,
		name: 'Foxx Original Jamaican Restaurant',
		cuisine: 'Jamaican',
		food_ordered: [
			'Jerk Chicken Meal (White Meat)',
			'Curry Chicken with Roti',
			'Jerk Patty and Bread',
		],
		geographies: {
			street_address: '378 Edgewood Ave SE',
			city: 'Atlanta',
			state: 'Georgia',
			zip_code: 30312,
			country: 'US',
			coordinates: [33.7553577594717, -84.37559790735878],
		},
		season: 1,
		episode_number: 1,
		episode_title: 'Multiculturalism at Its Best',
		cast_members_present: [
			'Action Bronson',
			'Alchemist',
			'Meyhem Lauren',
			'Big Body Bes',
		],
		noteworthy_mentions: [
			"Brought there by FRKO RICO, Action's album cover illustrator",
			'Action made the woman at the register laugh, and FRKO RICO had never seen her smile before',
			'Meyhem has ',
		],
	},
	{
		id: 4,
		name: 'The Dutch',
		cuisine: 'American',
		food_ordered: ['Summer Papaya Salad', '', ''],
		geographies: {
			street_address: '2201 Collins Ave',
			city: 'Miami Beach',
			state: 'Florida',
			zip_code: 33139,
			country: 'US',
			coordinates: [25.79792186985193, -80.12759672494492],
		},
		season: 1,
		episode_number: 1,
		episode_title: 'Multiculturalism at Its Best',
		cast_members_present: [
			'Action Bronson',
			'Alchemist',
			'Meyhem Lauren',
			'Big Body Bes',
		],
		noteworthy_mentions: ['The salad made Action feel like a man'],
	},
];

// {
// 		id: 5,
// 		name: '',
// 		cuisine: '',
// 		food_ordered: [' ', '', ''],
// 		geographies: {
// 			street_address: '',
// 			city: '',
// 			state: '',
// 			zip_code: 1,
// 			country: '',
// 			coordinates: [],
// 		},
// 		season: 1,
// 		episode_number: 2,
// 		episode_title: '',
// 		cast_members_present: [
// 			'Action Bronson',
// 			'Alchemist',
// 			'Meyhem Lauren',
// 			'Big Body Bes',
// 		],
// 		noteworthy_mentions: [],
// 	},
