import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Dashboard,
  Signup,
  Profile,
} from '@kelvinofoli/marigold-component-library';
// import {Login,Signup} from '@kelvinofoli/marigold-component-library';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="signup" options={{title: 'Signup',headerShown: false}}>
        {props => <Signup {...props} location="dashboard"  secLocation={"login"}/>}
      </Stack.Screen>
      <Stack.Screen name="login" options={{title: 'Login',headerShown: false}}>
        {props => <Login {...props} location={'dashboard'} secLocation={"signup"} />}
      </Stack.Screen>
      <Stack.Screen name="dashboard" options={{title: 'Dashboard',headerShown: false}}>
        {props => <Dashboard {...props} location={'profile'} />}
      </Stack.Screen>
      <Stack.Screen name="profile" options={{title: 'Login',headerShown: false}}>
        {props => <Profile {...props} location={'dashboard'} />}
      </Stack.Screen>
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
};
