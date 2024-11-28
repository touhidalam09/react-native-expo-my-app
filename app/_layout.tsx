import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen name='(tab)' options={{ headerShown: false }} />
    <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
  </Stack>;
}
