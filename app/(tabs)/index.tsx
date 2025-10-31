import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [previousReading, setPreviousReading] = useState("");
  const [currentReading, setCurrentReading] = useState("");
  const [bill, setBill] = useState<number | null>(null);

  const calculateBill = () => {
    const prev = parseFloat(previousReading);
    const curr = parseFloat(currentReading);

    if (isNaN(prev) || isNaN(curr) || curr < prev) {
      setBill(null);
      alert("Please enter valid readings. Current must be greater than previous.");
      return;
    }

    const units = curr - prev;
    let amount = 0;

    // Simple sample rate logic
    if (units <= 100) amount = units * 5;          // ₹5 per unit for first 100
    else if (units <= 200) amount = 100 * 5 + (units - 100) * 7;  // ₹7 for next 100
    else amount = 100 * 5 + 100 * 7 + (units - 200) * 10;         // ₹10 beyond 200

    setBill(amount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚡ Electricity Bill Calculator ⚡</Text>

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

      <TouchableOpacity style={styles.button} onPress={calculateBill}>
        <Text style={styles.buttonText}>Calculate Bill</Text>
      </TouchableOpacity>

      {bill !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Units Consumed: {parseFloat(currentReading) - parseFloat(previousReading)}</Text>
          <Text style={styles.resultText}>Total Bill: ₹{bill.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#e8f5e9",
    borderRadius: 10,
  },
  resultText: {
    fontSize: 18,
    color: "#333",
  },
});