import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  LandingScreen,
} from '../screens';
import { ScreenKeys } from './const';

const ScreenNavigator = [
  {
    name: ScreenKeys.Landing,
    component: LandingScreen,
    options: {
      headerTitle: '',
    }
  },
];

const MainNavigationStack = createNativeStackNavigator();
export function MainTabNavigator() {
  return (
    <MainNavigationStack.Navigator>
      {ScreenNavigator.map(screen => (
        <MainNavigationStack.Screen
          key={screen.name}
          {...screen}
        />
      ))}
    </MainNavigationStack.Navigator>
  );
}
