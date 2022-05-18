
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import {Login} from '../screens/login'

export function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  const _navigation = useNavigation();

/*   useEffect(() => {
   if ((!signIn?.user || !signIn.success) && signIn.status === "NONE") {
      dispatch(checkToken());
    }

    verifyAuthentication().then((verify) => {
      const navi = _navigation.getCurrentRoute();
      if (
        verify &&
        signIn.success &&
        signIn.boolTerm &&
        (navi.name === "SignIn" || navi.name === "Terms")
      ) {
        _navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else if (!signIn.boolTerm && signIn.user && navi.name === "Home") {
        _navigation.reset({
          index: 0,
          routes: [{ name: "Terms" }],
        });
      } else if (
        !signIn.success &&
        navi.name !== "SignIn" &&
        navi.name !== "Terms"
      )
        _navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
    });
  }, [signIn]);  */

  return (
    <Navigator>
      <Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
    </Navigator>
  );
}
