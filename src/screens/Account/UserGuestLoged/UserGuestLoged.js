import React from "react";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils"
import { View, ScrollView, Text} from "react-native";
import { Button } from "@rneui/base";
import { styles } from "./UserGuestStyles"


export function UsersGuestSceen() {
  const navigation = useNavigation();

  const goToLoggin = () =>{
    navigation.navigate(screens.account.Login, {
      screens: screens.account.Login,
  });
  }
  return (
    <ScrollView centerContent={true} style={styles.content}>

      <Text style={styles.title}>iniciar sesion</Text>
      <Text style={styles.description}>
        Para empezar hay que iniciar sesion
      </Text>

      <View>
        <Button title="iniciar sesion" onPress={() =>(goToLoggin())} buttonStyle={styles.btnStyle}/>
      </View>
    </ScrollView>
  );
}