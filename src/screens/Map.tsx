import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import MapView, { LatLng, MapEvent, Marker } from 'react-native-maps';
import MapMarker from '../components/atoms/MapMarker';

const Map = () => {
	const coords: LatLng = {
		latitude: 53.4213251,
		longitude: -1.5302868,
	}

	const [markers, setMarker] = useState<LatLng[]>([
		{
			"latitude": 11.679623454188,
			"longitude": 14.70170259475708,
		},
		{
			"latitude": 52.95192937840459,
			"longitude": -1.2238933145999908,
		},
		{
			"latitude": 54.079786167481004,
			"longitude": -1.683766096830368,
		},
	]);


	const handlePress = (e: MapEvent) => {
		console.log(markers);
		setMarker([...markers, {
			latitude: e.nativeEvent.coordinate.latitude,
			longitude: e.nativeEvent.coordinate.longitude
		}])
	}

	const mapMarkers = () => {
		return markers.map((marker: LatLng) =>
			<MapMarker
				coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
			/>
		)
	}

	return (
        <MapView
            style={styles.map}
            onPress={(e: MapEvent) => handlePress(e)}
        >
            {mapMarkers()}
        </MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});

export default Map;
