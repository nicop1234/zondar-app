import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountScreen } from "../screens/Account/AccountScreen"
import { LoginScreen } from "../screens/Account/Login/LoginScreen"
import { screens } from "../utils"
const Stack = createNativeStackNavigator()

export function AccountStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screens.account.account} component={AccountScreen} options={{ title: "cuenta"}}/>
            <Stack.Screen name={screens.account.Login} component={LoginScreen} options={{ title: "iniciar sesion"}}/>
        </Stack.Navigator>
    )
}