function getAllPlaces(map){
	axios.get('/api/').then((response) => {
		const places = response.data.allPlaces;

		for (let i = 0; i < places.length; i++) {
			const place = places[i];
			
			const marker = new google.maps.Marker({
				position: {
					lat: place.location.coordinates[1],
					lng: place.location.coordinates[0]
				},
				map: map,
				title: place.name
			});
		}
	});
}

function initMap() {

	const ulanBator = {
		lat: 47.91975080750108, 
		lng: 106.91197048317713
	};


	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: ulanBator
	});

	getAllPlaces(map);
}

initMap();