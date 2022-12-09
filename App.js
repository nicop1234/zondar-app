import React from "react";
import { AppNavigations } from "./src/navigation/AppNavigations"
import { NavigationContainer } from "@react-navigation/native"
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"])

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigations />
      </NavigationContainer>
       <Toast/>
    </>
  );
}
