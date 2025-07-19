import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageStorage = {
    setItem: async (key: string, value: string) => {
        await AsyncStorage.setItem(key, value);
    },
    getItem: async (key: string) => {
        const value = await AsyncStorage.getItem(key);
        return value ?? null;
    },
    removeItem: async (key: string) => {
        await AsyncStorage.removeItem(key);
    },
};
