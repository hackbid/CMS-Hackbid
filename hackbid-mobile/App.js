import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
//importing Stacks
import { HomePageStack } from './src/stacks/index';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MainApp() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='HomePageStack' component={HomePageStack} options={{ title: 'HOME' }} />
        </Tab.Navigator>
    );
}

export default function App() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            {isLogin ? (
                <SafeAreaView style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            ) : (
                <View>
                    <Text>Please Login</Text>
                </View>
            )}
        </>
    );
}
