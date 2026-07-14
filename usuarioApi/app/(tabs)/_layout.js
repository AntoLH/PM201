import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout(){
    return(
        <Tabs>
        
        <Tabs.Screen name="index" options={{title:"inicio", href:null,}} />

        <Tabs.Screen name="Alta" options={{ title: "Alta",tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={size} color={color} />)}} />

        <Tabs.Screen name="Consulta" options={{ title: "Consulta",tabBarIcon: ({ color, size }) => (
            <Ionicons name="eye" size={size} color={color} />)}} />

        </Tabs>
    );
}