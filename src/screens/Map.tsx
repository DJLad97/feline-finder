import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, View } from 'react-native';
import React, { useRef, useState } from 'react';
import MapView, { LatLng, MapEvent, Marker, Point } from 'react-native-maps';
import { Box, Input, NativeBaseProvider, Stack, Text } from 'native-base';
import MapMarker from '../components/atoms/MapMarker';

const Map = () => {
	const coords: LatLng = {
		latitude: 53.4213251,
		longitude: -1.5302868,
	}

	const mapRef = useRef<MapView>(null);
	const [lastMarkerPosition, setLastMarkerPosition] = useState(0);
	const [displayForm, setDisplayForm] = useState<boolean>(false);

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


	const handlePress = async (e: MapEvent) => {
		// console.log(e.nativeEvent);
		// setLastMarkerPosition(e.nativeEvent.position.y);
		setDisplayForm(true);
		mapRef.current?.animateCamera({
			center: e.nativeEvent.coordinate,
		}, { duration: 0 });

		mapRef.current?.pointForCoordinate(e.nativeEvent.coordinate).then((res) => {
			setLastMarkerPosition(res.y);
		});
		// try {
		// 	const point: Point | undefined = await mapRef.current?.pointForCoordinate(e.nativeEvent.coordinate);

		// 	if (point) {
		// 		setLastMarkerPosition(point.y);
		// 	}
		// } catch (e) {
		// 	throw new Error(e);
		// }
		setMarker([...markers, {
			latitude: e.nativeEvent.coordinate.latitude,
			longitude: e.nativeEvent.coordinate.longitude
		}])
	}

	const mapMarkers = () => {
		return markers.map((marker: LatLng) =>
			<View>
				<MapMarker
					coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
				/>
			</View>
		)
	}

	return (
		<View>
			<MapView
				ref={mapRef}
				style={styles.map}
				onPress={(e: MapEvent) => handlePress(e)}
			>
				{mapMarkers()}
			</MapView>
			{
				displayForm &&
				<Box style={[styles.mapMarkerInfo, { top: lastMarkerPosition}]}>
					<Stack direction="column" space="3" m={'3'}>
						<Input isFullWidth={false} size={'xs'} placeholder="Cat Breed" variant={'filled'} style={styles.inputStyle}/>
						<Input isFullWidth={false} size={'xs'} placeholder="Description" variant={'filled'} style={styles.inputStyle}/>
					</Stack>
				</Box>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	mapMarkerInfo: {
		position: 'absolute',
		backgroundColor: '#D5E7EB',
		width: '50%',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 10
	},
	inputStyle: {
		paddingTop: 5,
	}
});

export default Map;
