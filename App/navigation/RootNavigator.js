import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BookScreen from '../Screens/BookScreen';
import BookMarkScreen from '../Screens/BookmarkScreen';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  inactiveTintColor: '#2D3038',
  activeTintColor: '#FFFFFF',
  style: {
    height: '10%',
    backgroundColor: '#1E1B26',
    // borderTopColor: 'blue',
  },
};

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'BooksList':
      iconName = 'view-dashboard';
      break;
    case 'BookmarksList':
      iconName = 'bookmark-multiple-outline';
      break;
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={24} />;
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="BooksList"
        tabBarOptions={tabBarOptions}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen name="BooksList" component={BookScreen} />
        <Tab.Screen name="BookmarksList" component={BookMarkScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
