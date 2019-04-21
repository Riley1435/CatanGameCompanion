/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainGameListComponent from './components/MainGameListComponent';

AppRegistry.registerComponent(appName, () => MainGameListComponent);
