/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
