import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";

const Stack = createNativeStackNavigator();

const HomeContainer = (props) => {
  const { rest, search, setSearch, onEnd } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
      >
        {(props) => (
          <HomeScreen
            {...props}
            rest={rest}
            search={search}
            setSearch={setSearch}
            onEnd={onEnd}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Details" component={Details} 
       options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({});
