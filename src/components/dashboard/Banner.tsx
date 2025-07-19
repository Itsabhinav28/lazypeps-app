import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { banner } from '../../utils/dummyData';

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 12, alignItems: 'center' },
  img: { width: '95%', height: 120, borderRadius: 12, resizeMode: 'cover' },
});
