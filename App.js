import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreenComponent from './src/Screens/LoginScreen/LoginScreen';
import RegisterScreenComponent from './src/Screens/RegisterScreen/RegisterScreen';
import CompleteYourProfileScreenComponent from './src/Screens/CompleteYourProfile/CompleteYourProfileScreen';
import HomeScreenComponent from './src/Screens/HomeScreen/HomeScreen';

const Stack= createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginScreen' component={LoginScreenComponent}/> 
        <Stack.Screen name='RegisterScreen' component={RegisterScreenComponent}/> 
        <Stack.Screen name='CompleteYourProfileScreen' component={CompleteYourProfileScreenComponent}/> 
        <Stack.Screen name='HomeScreen' component={HomeScreenComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
