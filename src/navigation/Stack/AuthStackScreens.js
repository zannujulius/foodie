import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../../screens/AuthScreens/StartScreen";
import Home from "../../screens/Home";
const Stack = createNativeStackNavigator();

const AuthStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="onboarding" component={StartScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackScreens;
