import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList148966Navigator from '../features/ArticleList148966/navigator';
import ArticleList148965Navigator from '../features/ArticleList148965/navigator';
import ArticleList148964Navigator from '../features/ArticleList148964/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList148966: { screen: ArticleList148966Navigator },
ArticleList148965: { screen: ArticleList148965Navigator },
ArticleList148964: { screen: ArticleList148964Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
