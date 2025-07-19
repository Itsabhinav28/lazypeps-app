import { View, StyleSheet, Image, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { router } from 'expo-router';
import { Colors } from '../src/utils/Constants';
import Logo from '../src/assets/images/splash_logo.jpeg';
import { screenHeight, screenWidth } from '../src/utils/Scaling';
import * as Location from 'expo-location';
import { useAuthStore } from '../src/state/authStore';
import { AsyncStorageStorage } from '../src/state/storage';
import { jwtDecode } from 'jwt-decode';
import { refetchUser, refresh_tokens } from '../src/service/authService';

interface DecodedToken {
    exp: number
}

export default function SplashScreen() {
    const { user, setUser } = useAuthStore();

    const tokenCheck = async () => {
        const accessToken = await AsyncStorageStorage.getItem('accessToken');
        const refreshToken = await AsyncStorageStorage.getItem('refreshToken');

        if (accessToken && refreshToken) {
            const decodedAccessToken = jwtDecode<DecodedToken>(accessToken);
            const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken);

            const currentTime = Date.now() / 1000;

            if (decodedRefreshToken?.exp < currentTime) {
                router.replace('/(auth)/customer-login');
                Alert.alert('Session expired Please login again');
                return false;
            }

            if (decodedAccessToken?.exp < currentTime) {
                try {
                    refresh_tokens();
                    await refetchUser(setUser);
                } catch (error) {
                    console.log(error);
                    Alert.alert('There was an error refreshing token');
                    return false;
                }
            }

            if (user?.role === 'Customer') {
                router.replace('/(dashboard)/product-dashboard');
            } else {
                router.replace('/(dashboard)/delivery-dashboard');
            }

            return true;
        } else {
            router.replace('/(auth)/customer-login');
            return false;
        }
    };

    useEffect(() => {
        const fetchUserLocation = async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert(
                        'Sorry we need to access location service to give you better shopping experience'
                    );
                }
                tokenCheck();
            } catch (error) {
                Alert.alert(
                    'Sorry we need to access location service to give you better shopping experience'
                );
            }
        };
        const timeoutId = setTimeout(fetchUserLocation, 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.logoImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: screenHeight * 0.7,
        width: screenWidth * 0.7,
        resizeMode: 'contain',
    },
}); 