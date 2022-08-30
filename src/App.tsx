import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Map from './screens/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCat, faUser } from '@fortawesome/free-solid-svg-icons';
// D5E7EB
// A5948D
// EAA74A
// 667290
// 17224C

const App = () => {
	const Tab = createBottomTabNavigator();

	const HelloWorld = () => {
		return (
			<Text>Hello World</Text>
		)
	}
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Tab.Navigator
					detachInactiveScreens={true}
					screenOptions={{
						tabBarActiveBackgroundColor: '#667290',
						tabBarInactiveBackgroundColor: '#17224C',
						tabBarInactiveTintColor: '#667290',
						tabBarActiveTintColor: '#EAA74A',
					}}
				>
					<Tab.Screen
						name="Cat Map"
						component={Map}
						options={{
							headerShown: false,
							tabBarIcon: ({ color }) => (
								<FontAwesomeIcon icon={ faCat } size={ 24 } color={ color }/>
							),

						}}
					/>
					<Tab.Screen
						name="Profile"
						options={{
							tabBarIcon: ({ color }) => (
								<FontAwesomeIcon icon={ faUser } size={ 24 } color={ color }/>
							),
						}}
						component={HelloWorld} />
				</Tab.Navigator>
			</NavigationContainer>
		</View>
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
