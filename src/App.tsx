import { StyleSheet, View } from 'react-native';
import React from 'react';
import Map from './screens/Map';
import { registerRootComponent } from 'expo';

const App = () => {
	return (
		<View style={styles.container}>
			<Map />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
