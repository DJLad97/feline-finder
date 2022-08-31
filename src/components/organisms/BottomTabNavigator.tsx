import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Map from '../../screens/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCat, faUser } from '@fortawesome/free-solid-svg-icons';
import { NativeBaseProvider, Box, Input } from 'native-base';
// D5E7EB
// A5948D
// EAA74A
// 667290
// 17224C

const BottomTabNavigator = () => {
	const Tab = createBottomTabNavigator();

	const HelloWorld = () => {
		return (
            <Box style={styles.mapMarkerInfo}>
                <Input isFullWidth={false} placeholder="Cat Breed" style={{ marginLeft: 10}}/>
            </Box>
		)
	}

	return (
        <NavigationContainer>
            <Tab.Navigator
                detachInactiveScreens={true}
                screenOptions={{
                    tabBarActiveBackgroundColor: '#667290',
                    tabBarInactiveBackgroundColor: '#17224C',
                    tabBarInactiveTintColor: '#667290',
                    tabBarActiveTintColor: '#EAA74A',
                    tabBarStyle: {
                        borderTopColor: '#667290',
                    }
                }}
            >
                <Tab.Screen
                    name="Cat Map"
                    component={Map}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <FontAwesomeIcon icon={ faCat } size={ 24 } color={ color }/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesomeIcon icon={ faUser } size={ 24 } color={ color }/>
                        ),
                    }}
                    component={HelloWorld}
                />
            </Tab.Navigator>
        </NavigationContainer>
	);
}

const styles = StyleSheet.create({
	mapMarkerInfo: {
		flex: 1,
		backgroundColor: '#D5E7EB',
        margin: 50,
        borderRadius: 10,
		zIndex: 1234
	}
});

export default BottomTabNavigator;
