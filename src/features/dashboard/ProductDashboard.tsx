import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import CategoryList from '../../components/dashboard/CategoryList';
import Banner from '../../components/dashboard/Banner';
import ProductGrid from '../../components/dashboard/ProductGrid';

export default function ProductDashboard() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.delivery}>Delivery in <Text style={styles.time}>15 minutes</Text></Text>
        <Text style={styles.location}>176/A, Sector-1, Sult...</Text>
      </View>
      <TextInput
        style={styles.search}
        placeholder="Search 'milk'"
        placeholderTextColor="#888"
      />
      <Banner />
      <Text style={styles.section}>Grocery & Kitchen</Text>
      <CategoryList />
      <ProductGrid />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 16, backgroundColor: '#e3f2fd' },
  delivery: { fontSize: 16, fontWeight: 'bold' },
  time: { color: '#388e3c' },
  location: { fontSize: 12, color: '#555' },
  search: { backgroundColor: '#fff', margin: 16, borderRadius: 8, padding: 10, fontSize: 16, elevation: 1 },
  section: { fontSize: 18, fontWeight: 'bold', marginLeft: 16, marginTop: 8 },
});
