import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from '../screen/Splash';

import DzikirPagi from '../screen/DzikirPagi';
import DzikirPetang from '../screen/DzikirPetang';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let sizeIcon;

          if (route.name === 'DzikirPagi') {
            iconName = focused ? 'sun' : 'sun';
            sizeIcon = size
          } else if (route.name === 'DzikirPetang') {
            iconName = focused ? 'moon' : 'moon';
            sizeIcon = size;
          }
          return <Icon name={iconName} size={sizeIcon} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#148025',
        inactiveTintColor: '#1480246b',
        // showLabel: false,
      }}>
      <Tab.Screen name="DzikirPagi" component={DzikirPagi} />
      <Tab.Screen name="DzikirPetang" component={DzikirPetang} />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
