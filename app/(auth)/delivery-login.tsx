import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { deliveryLogin } from '../../src/service/authService';
import CustomSafeAreaView from '../../src/components/global/CustomSafeAreaView';
import { screenHeight } from '../../src/utils/Scaling';
import LottieView from 'lottie-react-native';
import CustomText from '../../src/components/ui/CustomText';
import { Fonts } from '../../src/utils/Constants';
import CustomInput from '../../src/components/ui/CustomInput';
import Icon from 'react-native-vector-icons/Ionicons';
const IconComponent = Icon as any;
import { RFValue } from 'react-native-responsive-fontsize';
import Button from '../../src/components/ui/Button';

export default function DeliveryLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // await deliveryLogin(email, password);
      router.replace('/(dashboard)/delivery-dashboard');
    } catch (error) {
      Alert.alert('Login Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomSafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
        <View style={styles.container}>
          <View style={styles.lottieContainer}>
            <LottieView 
              autoPlay 
              loop 
              style={styles.lottie} 
              source={require('../../src/assets/animations/delivery_man.json')} 
            />
          </View>

          <CustomText variant="h3" fontFamily={Fonts.Bold}>
            Delivery Partner Portal
          </CustomText>

          <CustomText variant="h6" fontFamily={Fonts.SemiBold}>
            Faster than Flash⚡️
          </CustomText>

          <CustomInput
            onChangeText={setEmail}
            value={email}
            left={
              <IconComponent
                name="mail"
                color="#f8890e"
                style={{ marginLeft: 10 }}
                size={RFValue(18)} />
            }
            placeholder="Email"
            inputMode="email"
            right={false}
          />

          <CustomInput
            onChangeText={setPassword}
            value={password}
            left={
              <IconComponent
                name="key-sharp"
                color="#f8890e"
                style={{ marginLeft: 10 }}
                size={RFValue(18)} />
            }
            placeholder="Password"
            secureTextEntry
            right={false}
          />

          <Button
            disabled={email.length == 0 || password.length < 8}
            title="Login"
            onPress={handleLogin}
            loading={loading}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  lottie: {
    height: '100%',
    width: '100%',
  },
  lottieContainer: {
    height: screenHeight * 0.12,
    width: '100%',
  },
  text: {
    marginTop: 2,
    marginBottom: 25,
    opacity: 0.8,
  },
}); 
declare module 'lottie-react-native';