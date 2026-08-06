import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* 1. Ocultamos el header y la barra en la pantalla principal de pestañas */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* 2. La barra superior con la pila y el botón de regresar SOLO aparecerá aquí */}
      <Stack.Screen 
        name="detalle" 
        options={{ 
          title: 'Detalle del Usuario',
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }} 
      />
      <Stack.Screen 
        name="actualizar" 
        options={{ 
          title: 'Actualizar Usuario',
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }} 
      />
    </Stack>
  );
}