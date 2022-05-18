
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import {Login} from '../screens/login'
import { ListCrypto } from '../screens/listCrypto';

export function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  const _navigation = useNavigation();

  return (
    <Navigator>
      <Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
       <Screen
           options={{
          headerShown: true,
          headerTintColor: "#fff",
          headerTitle: "Lista de Criptomoedas",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#0E0E2C" },
        }}
        name="ListCrypto"
        component={ListCrypto}
      />
    </Navigator>
  );
}
