function initMap() {

	const id = document.getElementById('map-id').innerHTML;
	
	const location = axios.get(`/api/${id}`).then((response) => {
		point = response.data.onePlace.location.coordinates
		
		const map = new google.maps.Map(document.getElementById('map'), {
			zoom: 18,
			center: {
				lat: point[1],
				lng: point[0]
			}
		});

		const newMarker = new google.maps.Marker({
			position: {
				lat: point[1],
				lng: point[0]
			},
			map: map,
			title: response.data.onePlace.name
		});
	})

}

initMap();