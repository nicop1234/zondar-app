import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../utils";
import { Button, Text } from "@rneui/base";
import { db } from "../../utils";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { styles } from "./inicioScreenStyles";
import { FormularioCambios } from "../../components/FormularioCambios"

export function InicioScreen() {
  const [currentUser, setCurrentUser] = useState();
  const [_, setReload] = useState(false)

 
  const onReload = () => setReload((prevState) => !prevState)
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const goToaAcount = () => {
    navigation.navigate(screens.account.account, {
      screens: screens.account.account,
    });
  };
  return (
    <View style={styles.content}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>MiEconomia</Text>
      </View>
      {currentUser ? (
        <FormularioCambios  onReload={onReload}/>
      ) : (
        <View>
          <Text style={styles.description}>
            se necesita iniciar sesion para empezar
          </Text>
          <Button
            title='ir'
            buttonStyle={styles.btnStyle}
            onPress={() => goToaAcount()}
          />
        </View>
      )}
    </View>
  );
}
