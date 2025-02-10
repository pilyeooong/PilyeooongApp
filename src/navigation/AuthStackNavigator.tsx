import { createStackNavigator } from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHomeScreen';
import LoginScreen from '../screens/LoginScreen';

function AuthStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={'AuthHome'} component={AuthHomeScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
