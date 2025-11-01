import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saved Bills</Text>

      <View style={styles.placeholderBox}>
        <Text style={styles.placeholderText}>No saved bills yet</Text>
        <Text style={styles.subText}>
          Your saved bills will appear here once you add them.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 30,
  },
  placeholderBox: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#E9ECEF',
    alignItems: 'center',
    width: '100%',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
});