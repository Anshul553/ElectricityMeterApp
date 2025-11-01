import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [previousReading, setPreviousReading] = useState<string>('');
  const [currentReading, setCurrentReading] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [totalUnits, setTotalUnits] = useState<number | null>(null);
  const [totalBill, setTotalBill] = useState<number | null>(null);

  const calculateBill = () => {
    const prev = parseFloat(previousReading);
    const curr = parseFloat(currentReading);
    const ratePerUnit = parseFloat(rate);

    if (isNaN(prev) || isNaN(curr) || isNaN(ratePerUnit)) {
      Alert.alert('Invalid Input', 'Please enter valid numbers.');
      return;
    }

    const units = curr - prev;
    const bill = units * ratePerUnit;

    setTotalUnits(units);
    setTotalBill(bill);
  };

  const reset = () => {
    setPreviousReading('');
    setCurrentReading('');
    setRate('');
    setTotalUnits(null);
    setTotalBill(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ELECTRICITY BILL</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Previous Reading"
        keyboardType="numeric"
        value={previousReading}
        onChangeText={setPreviousReading}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Current Reading"
        keyboardType="numeric"
        value={currentReading}
        onChangeText={setCurrentReading}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Rate per Unit (₹)"
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate Bill" onPress={calculateBill} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Reset" color="#777" onPress={reset} />
      </View>

      {totalBill !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Total Units: {totalUnits}</Text>
          <Text style={styles.resultText}>Total Bill: ₹{totalBill.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    marginVertical: 6,
  },
  resultBox: {
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#E9ECEF',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginVertical: 4,
  },
});