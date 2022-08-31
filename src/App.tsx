import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCat, faUser } from '@fortawesome/free-solid-svg-icons';
import Map from './screens/Map';
import BottomTabNavigator from './components/organisms/BottomTabNavigator';
import { NativeBaseProvider } from 'native-base';
// D5E7EB
// A5948D
// EAA74A
// 667290
// 17224C

const App = () => {
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<BottomTabNavigator />
			</View>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	nav: {
		// flex: 6,
		flexDirection: 'row',
		// justifyContent: 'space-between',
		// alignItems: 'flex-start'
		// width: 200
	}
});

export default App;
