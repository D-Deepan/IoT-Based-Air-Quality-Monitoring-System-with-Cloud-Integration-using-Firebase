# IoT-Based Air Quality Monitoring System with Cloud Integration using Firebase

This project involves monitoring air quality and smoke detection using an **MQ-135 sensor** connected to an **ESP8266 module**. The sensor data is sent to **Firebase Realtime Database (RTDB)**. A **React Native** app integrated with **Firebase** is used for live monitoring of the sensor values on your mobile device.

## Project Overview

- The **MQ-135 sensor** is used for air quality and smoke detection.
- The sensor data is transmitted from the **ESP8266 module** to Firebase RTDB.
- A **React Native** app is used to retrieve the sensor data from Firebase and display it on your mobile device.
- This system allows remote monitoring of air quality, with real-time data updates from Firebase.

## Setting Up and Running the App with Expo

1. **Initialize Expo**:
   - Start by initializing your project with Expo. If you haven't already done this, refer to the official [Expo documentation](https://docs.expo.dev/get-started/installation/) for installation instructions.
   - Install Expo CLI globally if needed:
     ```bash
     npm install -g expo-cli
     ```

2. **Setup a Development Build**:
   - Once the app is initialized, you need to set up a **development build** type to test the app on your mobile device.
   - You can do this by running the following command in the project directory:
     ```bash
     expo prebuild
     ```
   - This command sets up the necessary files for a development build.

3. **Start the Local Server**:
   - To run the app locally, start the Expo development server by executing the following command:
     ```bash
     npx expo start
     ```
   - This will launch the development server and provide you with a QR code.

4. **Run the App on Your Mobile Device**:
   - Use the Expo Go app (available on iOS and Android) to scan the QR code shown in the terminal or browser window.
   - This will open your app on your mobile device, allowing you to see the live data and monitor the sensor values being sent from Firebase Realtime Database.

5. **Live Monitoring of Sensor Values**:
   - The app is integrated with Firebase Realtime Database, and you will be able to see the live updates from the connected **MQ-135 sensor** in real-time. The sensor data is sent from the ESP8266 to Firebase, and your app retrieves and displays it, allowing you to monitor air quality and gas levels remotely.

## Firebase Setup

1. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new Firebase project.
   
2. **Set Up Realtime Database and Authentication**:
   - In your Firebase project, enable **Realtime Database** and set up **Authentication**.
   - To set up **Authentication**, go to the Firebase Console, navigate to the **Authentication** section, and configure the sign-in method (e.g., Email/Password, Google, etc.).
   
3. **Obtain Firebase API Key and Database URL**:
   - After setting up the Firebase Realtime Database, go to the **Project Settings** in the Firebase Console and copy the **API Key** and **Database URL** for later use.

4. **Link Firebase with the Arduino (ESP8266)**:
   - In the `arduino/esp_iot` folder, you'll find the code to connect the **MQ-135 sensor** to the **ESP8266** and send sensor data to Firebase.
   - Replace the placeholders in the Arduino code with the following:
     - **Firebase API Key**: This will be used to authenticate the connection to Firebase.
     - **Database URL**: The URL of your Firebase Realtime Database.
     - **Authentication Credentials**: After creating authentication credentials in Firebase, copy them (such as **User ID** or **Auth Token**) and paste them into the appropriate place in your Arduino code to 
       authenticate the connection.

5. **Link Firebase with the React Native App**:
   - Create a **Web App** in Firebase to generate a **firebaseConfig.js** file.
   - Paste this **firebaseConfig.js** file into the `firebase_app` folder of your React Native project.
   - This will link the Firebase Realtime Database and Authentication with the React Native app for live data fetching and display.

## Files and Structure

- **arduino/esp_iot**: Contains the Arduino code for the ESP8266, which connects the **MQ-135 sensor** to Firebase RTDB.
- **firebase_app**: This folder contains the React Native app configured with Firebase to display live data from Firebase.
  - **firebaseconfig.js**: Contains the Firebase configuration for connecting the app to Firebase Realtime Database.

## How to Run the Arduino Code

1. Open the `arduino/esp_iot` code in the Arduino IDE.
2. Connect your **ESP8266** to your computer.
3. Upload the code to the **ESP8266**.
4. The sensor data will be sent to Firebase RTDB.

## How to Run the React Native App

1. Follow the steps in the **Setting Up and Running the App with Expo** section to initialize and run the React Native app.
2. Once the app is running, you will be able to see the live sensor data being fetched from Firebase Realtime Database.

## Dependencies

- Firebase SDK
- React Native (Expo for development)
- ESP8266 Board Package in Arduino IDE

## License

This project is open-source and available under the [MIT License](LICENSE).
