import React, { useState } from "react";
import { View } from "react-native";
import { ListItem, Icon, Text } from "@rneui/base";
import { map } from "lodash";
import { styles } from "./FormStyles";

import { useNavigation } from "@react-navigation/native";
import { screens } from "../../utils";
export function FormularioCambios() {

    const navigation = useNavigation();

    const goToVelocidad = () => {
        navigation.navigate(screens.inicio.cambiarVelocidad, {
          screens: screens.inicio.cambiarVelocidad,
        });
      };
      const goToUbicacion = () => {
        navigation.navigate(screens.inicio.cambiarUbicacion, {
          screens: screens.inicio.cambiarUbicacion,
        });
      };
      const goToHumedad = () => {
        navigation.navigate(screens.inicio.cambiarHumedad, {
          screens: screens.inicio.cambiarHumedad,
        });
      };
      const goToCalidad = () => {
        navigation.navigate(screens.inicio.cambiarCalidaAire, {
          screens: screens.inicio.cambiarCalidaAire,
        });
      };
      const goToTemperatura = () => {
        navigation.navigate(screens.inicio.cambiarTemperatura, {
          screens: screens.inicio.cambiarTemperatura,
        });
      };
      const goToPosicion = () => {
        navigation.navigate(screens.inicio.cambiarPosicion, {
          screens: screens.inicio.cambiarPosicion,
        });
      };

  const selectedComponent = (key) => {
    if (key === "CambiarVelocidad") {
        goToVelocidad()
    }
    if (key === "CambiarUbicacion") {
        goToUbicacion()
    }
    if (key === "CambiarHumedad") {
        goToHumedad()
    }
    if (key === "CambiarCalidaAire") {
        goToCalidad()
    }
    if (key === "CambiarTemperatura") {
        goToTemperatura()
    }
    if (key === "CambiarPosicion") {
        goToPosicion()
    }
  };

  const menuOptions = menuOption(selectedComponent);

  return (
    <View style={styles.content}>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.IconColorRight}
          />
        </ListItem>
      ))}
      {/*<Modal show={show} close={() => onCloseOpenModel()}>
        {render}
      </Modal>*/}
    </View>
  );
}

function menuOption(selectedComponent) {
  return [
    {
      title: "Camiar velocidad",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      IconColorRight: "#ccc",
      onPress: () => selectedComponent("CambiarVelocidad"),
    },
    {
      title: "Camiar Ubicacion",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      IconColorRight: "#ccc",
      onPress: () => selectedComponent("CambiarUbicacion"),
    },
    {
      title: "Camiar Humedad",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      IconColorRight: "#ccc",
      onPress: () => selectedComponent("CambiarHumedad"),
    },
    {
      title: "Camiar Calidad De Aire",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      IconColorRight: "#ccc",
      onPress: () => selectedComponent("CambiarCalidaAire"),
    },
    {
      title: "Camiar Temperatura",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      IconColorRight: "#ccc",
      onPress: () => selectedComponent("CambiarTemperatura"),
    },
    {
      title: "Camiar Posicion de sonda",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      IconColorRight: "#ccc",
      onPress: () => selectedComponent("CambiarPosicion"),
    },
  ];
}
