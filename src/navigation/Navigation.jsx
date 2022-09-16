import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "../screens/AuthScreen";
import HomeScreenContainer from "../screens/HomeScreenContainer";
import { Initialization } from "../hocs/Initialization";

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth" screenOptions={{
                headerShown: false
            }}>
                
                    <Stack.Screen name="Home">
                        {(props) => <Initialization {...props}>
                                    <HomeScreenContainer {...props}/>
                            </Initialization>}
                    </Stack.Screen>
                    <Stack.Screen name="Auth"  >
                    {(props) => <Initialization {...props}>
                                    <AuthScreen {...props}/>
                            </Initialization>}
                    </Stack.Screen>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}