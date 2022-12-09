import React from "react";
import { View, ScrollView } from "react-native";
import {  Text, Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { styles } from "./loginScreen.styles";
import { LoginForm } from "../../../components/Login"

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screens.account.Register, {
      screens: screens.account.Register,
    });
  };
  return (
    <ScrollView>

      <LoginForm/>

      
    </ScrollView>
  );
}