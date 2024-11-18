#include <ESP8266WiFi.h>
#include <Firebase_ESP_Client.h>
#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>

// Wi-Fi credentials
#define WIFI_SSID "YOUR_WIFI_SSID"       // Replace with your Wi-Fi SSID
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"  // Replace with your Wi-Fi password
#define USER_EMAIL "YOUR_EMAIL@example.com"  // Replace with your Firebase user email
#define USER_PASSWORD "YOUR_PASSWORD"       // Replace with your Firebase user password

// Firebase credentials
#define API_KEY "YOUR_FIREBASE_API_KEY"  // Replace with your Firebase API key
#define DATABASE_URL "YOUR_FIREBASE_DB_URL"  // Replace with your Firebase Database URL

// Firebase objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
const int gasPin = A0;  // Set gas sensor to A0 for ESP8266

void setup()
{
  // Initialize pin
  pinMode(gasPin, INPUT);

  // Start serial communication
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  // Firebase setup
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  // Optional: Assign callback function for token generation
  config.token_status_callback = tokenStatusCallback;  // In TokenHelper.h

  // Reconnect to WiFi if disconnected
  Firebase.reconnectNetwork(true);

  // Set SSL buffer size for large data transmissions
  fbdo.setBSSLBufferSize(4096, 1024);

  // Set response payload limit
  fbdo.setResponseSize(2048);

  // Initialize Firebase
  Firebase.begin(&config, &auth);
  Firebase.setDoubleDigits(5);

  // Set server response timeout
  config.timeout.serverResponse = 10 * 1000;

}

void loop()
{
  int gasThreshold = 60;
  if (Firebase.ready() && (millis() - sendDataPrevMillis > 2000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();

    // Read gas sensor value
    int gasValue = analogRead(gasPin);
    Serial.print("Gas Sensor Value: ");
    Serial.println(gasValue);

    // Send gas sensor value to Firebase
    if (Firebase.RTDB.setInt(&fbdo, F("/sensor_data/gas_value"), gasValue)) {
      Serial.println("Gas sensor value sent to Firebase");
      if (gasValue > gasThreshold) {
        Firebase.RTDB.setBool(&fbdo, F("/sensor_data/alert"), true);
      } else {
        Firebase.RTDB.setBool(&fbdo, F("/sensor_data/alert"), false);        
      }
    } else {
      Serial.print("Failed to send gas value: ");
      Serial.println(fbdo.errorReason());
    }
  }
}
