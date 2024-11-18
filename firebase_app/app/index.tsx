// App.js or any component
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { database, ref, onValue, off } from '../firebaseConfig';

export default function App() {
  const [sensorData, setSensorData] = useState({
    alert: false,
    gas_value: 0,
  });

  // Fetch data from Firebase Realtime Database
  useEffect(() => {
    const dataRef = ref(database, 'sensor_data'); // Reference to the "sensor_data" node in your DB

    // Set up a listener to get the data in real-time
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val(); // Get the data from Firebase
      if (data) {
        setSensorData({
          alert: data.alert,
          gas_value: data.gas_value,
        });
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      off(dataRef);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ESP32 Sensor Data</Text>

      <View style={styles.dataContainer}>
        <Text style={styles.text}>
          Alert: {sensorData.alert ? 'Triggered' : 'Not Triggered'}
        </Text>
        <Text style={styles.text}>Gas Value: {sensorData.gas_value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});
