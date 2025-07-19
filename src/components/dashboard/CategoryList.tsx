import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { categories } from '../../utils/dummyData';

export default function CategoryList() {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.image} style={styles.icon} />
          <Text style={styles.label}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { paddingVertical: 10, paddingHorizontal: 8 },
  item: { alignItems: 'center', marginRight: 18, width: 80 },
  icon: { width: 48, height: 48, marginBottom: 4, borderRadius: 12 },
  label: { fontSize: 12, textAlign: 'center' },
});
