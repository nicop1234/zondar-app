import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from "@rneui/base";
import { getAuth, signOut} from "firebase/auth"
import { LoadingModal } from "../../../components/Modal/LoadingModal"
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils"
import { styles } from "./UserLoged.styles.js"
import { InfoUser } from "../../../components/InfoUser/InfoUser"



export function UserLogedScreen() {
 const [load, setLoad] = useState(false)
 const [loadText, setLoadText] = useState("")
 const navigation = useNavigation();

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth)
    navigation.navigate(screens.inicio.inicio,{
      screens: screens.inicio.inicio,
  });

  } 
  return (
    <View style={styles.content}>
       <InfoUser/>
      <Button onPress={() => (logout())} title="cerrar sesión" buttonStyle={styles.buttonStyle} titleStyle={styles.text}/>
      <LoadingModal show={load} text={loadText}/>
    </View>
  )
}