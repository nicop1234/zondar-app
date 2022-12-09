import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { InicioScreen } from "../screens/Inicio/InicioScreen"
import { CambiarCalidaAire } from "../screens/Inicio/CambiarCalidaAire"
import { CambiarHumedad } from "../screens/Inicio/CambiarHumedad"
import { CambiarPosicion } from "../screens/Inicio/CambiarPosicion"
import { CambiarTemperatura } from "../screens/Inicio/CambiarTemperatura"
import { CamciarUbicacion } from "../screens/Inicio/CambiarUbicacion"
import { CambiarVelocidad } from "../screens/Inicio/CambiarVelocidad"
import { screens } from "../utils"
const Stack = createNativeStackNavigator()

export function InicioStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screens.inicio.inicio} component={InicioScreen} options={{ title: "Inicio"}}/>
            <Stack.Screen name={screens.inicio.cambiarCalidaAire} component={CambiarCalidaAire} options={{ title: "Cambiar calidad de Aire"}}/>   
            <Stack.Screen name={screens.inicio.cambiarHumedad} component={CambiarHumedad} options={{ title: "Cambiar humedad"}}/>   
            <Stack.Screen name={screens.inicio.cambiarPosicion} component={CambiarPosicion} options={{ title: "Cambiar posicion"}}/>   
            <Stack.Screen name={screens.inicio.cambiarTemperatura} component={CambiarTemperatura} options={{ title: "Cambiar temperatura"}}/>   
            <Stack.Screen name={screens.inicio.cambiarUbicacion} component={CamciarUbicacion} options={{ title: "Cambiar ubicacion"}}/>   
            <Stack.Screen name={screens.inicio.cambiarVelocidad} component={CambiarVelocidad} options={{ title: "Cambiar velodidad"}}/>   
   
        </Stack.Navigator>
    )
}