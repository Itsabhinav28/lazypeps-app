import { Stack } from 'expo-router';

export default function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen name="product-dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="delivery-dashboard" options={{ headerShown: false }} />
    </Stack>
  );
} 