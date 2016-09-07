var bmap = {
	center: [104.114129, 37.550339],
	zoom: 6,
	roam: true,
	mapStyle: {
		styleJson: [{
			"featureType": "water",
			"elementType": "all",
			"stylers": {
				"color": "#282c34"
			}
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": {
				"color": "#282c34"
			}
		}, {
			'featureType': 'arterial',
			'elementType': 'labels',
			'stylers': {
				'visibility': 'off'
			}
		}, {
			'featureType': 'railway',
			'elementType': 'all',
			'stylers': {
				'visibility': 'off'
			}
		}, {
			'featureType': 'highway',
			'elementType': 'all',
			'stylers': {
				/*'color': '#3c4a5d',
				'weights': 1,*/
				'visibility': 'off'
			}
		}, {
			'featureType': 'poi',
			'elementType': 'all',
			'stylers': {
				'visibility': 'off'
			}
		}, {
			'featureType': 'green',
			'elementType': 'all',
			'stylers': {
				'visibility': 'off'
			}
		}, {
			'featureType': 'subway',
			'elementType': 'all',
			'stylers': {
				'visibility': 'off'
			}
		}, {
			"featureType": "arterial",
			"elementType": "geometry.stroke",
			"stylers": {
				"color": "#0b3d51"
			}
		}, {
			"featureType": "local",
			"elementType": "geometry",
			"stylers": {
				"color": "#5c6a7d"
			}
		}, {
			"featureType": "land",
			"elementType": "all",
			"stylers": {
				"color": "#343a46"
			}
		}, {
			"featureType": "building",
			"elementType": "geometry.fill",
			"stylers": {
				"color": "#282c34"
			}
		}, {
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": {
				"color": "#857f7f"
			}
		}, {
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": {
				"color": "#282c34"
			}
		}, {
			"featureType": "building",
			"elementType": "geometry",
			"stylers": {
				"color": "#282c34",
				'visibility': 'off'
			}
		}, {
			"featureType": "boundary",
			"elementType": "all",
			"stylers": {
				"color": "#5c6a7d"
			}
		}, {
			"featureType": "manmade",
			"elementType": "all",
			"stylers": {
				"color": "#5c6a7d",
				'visibility': 'off'
			}
		}]
	}
};
module.exports = bmap;