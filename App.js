import React from "react";
import Contants from "expo-constants"; //used for to separte from content present already
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import OrderList from './screens/OrderList';
import CreateOrder from "./screens/CreateOrder";


const Stack=createStackNavigator();

const myOptions= {
  title: "Home",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor: "#006aff"
  }
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
         component={Home} 
          options={myOptions}
         />
        <Stack.Screen name="OrderList"
         component={OrderList}
         options={{...myOptions,title:"Order List"}}/>
         <Stack.Screen name="CreateOrder"
         component={CreateOrder}
         options={{...myOptions,title:"Create Order"}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;