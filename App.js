import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreenComponent from './src/Screens/LoginScreen/LoginScreen';
import RegisterScreenComponent from './src/Screens/RegisterScreen/RegisterScreen';

const Stack= createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginScreen' component={LoginScreenComponent}/> 
        <Stack.Screen name='RegisterScreen' component={RegisterScreenComponent}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
