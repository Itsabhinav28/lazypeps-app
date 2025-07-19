import { router } from 'expo-router';

export async function navigate(routeName: string, params?: object) {
    router.push(routeName as any);
}

export async function replace(routeName: string, params?: object) {
    router.replace(routeName as any);
}

export async function resetAndNavigate(routeName: string) {
    router.replace(routeName as any);
}

export async function goBack() {
    router.back();
}

export async function push(routeName: string, params?: object) {
    router.push(routeName as any);
}

export async function prepareNavigation() {
    // No-op for Expo Router
}
