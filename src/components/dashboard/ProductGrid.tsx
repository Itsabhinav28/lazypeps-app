import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { products } from '../../utils/dummyData';

export default function ProductGrid() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.image} style={styles.img} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { paddingBottom: 80 },
  item: { flex: 1, alignItems: 'center', margin: 10, backgroundColor: '#fff', borderRadius: 12, padding: 10, elevation: 2 },
  img: { width: 80, height: 80, marginBottom: 8, borderRadius: 8 },
  name: { fontWeight: 'bold', fontSize: 14, marginBottom: 2 },
  price: { color: '#388e3c', fontWeight: 'bold' },
});
