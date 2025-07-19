import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="customer-login" options={{ headerShown: false }} />
      <Stack.Screen name="delivery-login" options={{ headerShown: false }} />
    </Stack>
  );
} 