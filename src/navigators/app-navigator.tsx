import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, useBackButtonHandler } from './navigation-utilities';
import { MainTabNavigator } from './screen-navigator';

export type NavigatorParamList = {
  home: undefined;
  shop: undefined;
  favorites: undefined;
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  useBackButtonHandler(canExit);
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

const exitRoutes = ['home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
