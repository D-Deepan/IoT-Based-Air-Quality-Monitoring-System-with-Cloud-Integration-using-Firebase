# IoT-Based Air Quality Monitoring System with Cloud Integration using Firebase

This project involves monitoring air quality and detecting harmful gases using an MQ135 sensor. The sensor's readings are transmitted via an ESP8266 module to Firebase Realtime Database (RTDB). A React Native app, built with Expo, retrieves this data from Firebase for real-time monitoring.

---

## Project Structure

### 1. Arduino Code (`arduino/esp_iot`)
- Contains the code for connecting the MQ135 sensor to the ESP8266 module.
- Reads gas values from the sensor and sends the data to Firebase RTDB.
- Requires Firebase RTDB URL and API Key for configuration.

### 2. React Native App (`firebase_app`)
- Built with Expo for cross-platform mobile development.
- Contains essential files and folders:
  - `app/`: Main app components.
  - `scripts/`: Scripts for app functionalities.
  - `components/`: Reusable UI components.
  - `app.json`, `package.json`: Project configuration and dependencies.
- **Important**: 
  - After creating the Firebase web project, you need to generate a `firebaseconfig.js` file. 
  - Manually paste this file into the `firebase_app` folder to enable Firebase integration.

---

## Firebase Setup

### 1. Create a Firebase Project
- Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
- Enable **Realtime Database** and **Authentication** services.

### 2. Setup Realtime Database (RTDB)
- Copy the RTDB URL from the Firebase Console.
- Paste the URL into the Arduino code (`arduino/esp_iot`) to link the ESP8266 module with Firebase.

### 3. Setup Authentication
- Enable Email/Password Authentication in the Firebase Console.

### 4. Create a Web App
- In the Firebase Console, create a new **web app**.
- Download the `firebaseconfig.js` file containing the Firebase credentials (API Key, Sender ID, Database URL, etc.).
- Manually place this file in the `firebase_app` directory of your React Native project.

---

## How It Works

### **Arduino ESP8266**
- Reads gas values from the MQ135 sensor.
- Transmits data to Firebase RTDB via Wi-Fi.

### **React Native App**
- Fetches data from Firebase RTDB.
- Displays real-time air quality data on the mobile app.

---

## Getting Started

### Clone This Repository:
```bash
git clone https://github.com/your_username/your_repository_name.git

