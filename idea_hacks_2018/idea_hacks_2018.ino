#include <CurieBLE.h>

const int HR_RX = 7;
byte oldSample, sample;
const int LED = 6;
int beats = 0;
int count = 0;

BLEPeripheral blePeripheral;       // BLE Peripheral Device (the board you're programming)
BLEService heartRateService("180D"); // BLE Heart Rate Service

// BLE Heart Rate Measurement Characteristic"
BLECharacteristic heartRateChar("2A37",  // standard 16-bit characteristic UUID
    BLERead | BLENotify, 2);  // remote clients will be able to get notifications if this characteristic changes
                              // the characteristic is 2 bytes long as the first field needs to be "Flags" as per BLE specifications
                              // https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.heart_rate_measurement.xml

int oldHeartRate = 0;  // last heart rate reading from analog input
long previousMillis = 0;  // last time the heart rate was checked, in ms

unsigned long CurrentTime = millis();
unsigned long StartTime = millis();
unsigned long ElapsedTime = CurrentTime - StartTime;

void setup() {
  Serial.begin(9600);    // initialize serial communication
  pinMode (HR_RX, INPUT);  //Signal pin to input  
  pinMode (LED, OUTPUT);

  StartTime = millis();

  /* Set a local name for the BLE device
     This name will appear in advertising packets
     and can be used by remote devices to identify this BLE device
     The name can be changed but maybe be truncated based on space left in advertisement packet */
  blePeripheral.setLocalName("HeartRateSketch");
  blePeripheral.setAdvertisedServiceUuid(heartRateService.uuid());  // add the service UUID
  blePeripheral.addAttribute(heartRateService);   // Add the BLE Heart Rate service
  blePeripheral.addAttribute(heartRateChar); // add the Heart Rate Measurement characteristic

  /* Now activate the BLE device.  It will start continuously transmitting BLE
     advertising packets and will be visible to remote BLE central devices
     until it receives a new connection */
  blePeripheral.begin();
  Serial.println("Bluetooth device active, waiting for connections...");
}

void loop() {
  // listen for BLE peripherals to connect:
  BLECentral central = blePeripheral.central();

  // if a central is connected to peripheral:
  if (central) {
    Serial.print("Connected to central: ");
    // print the central's MAC address:
    Serial.println(central.address());
    // turn on the LED to indicate the connection:
  
    // check the heart rate measurement every 200ms
    // as long as the central is still connected:
    while (central.connected()) {

      sample = digitalRead(HR_RX);  //Store signal output 

      CurrentTime = millis();
      ElapsedTime = CurrentTime - StartTime;
      
      if (ElapsedTime >= 5000){
        int heartRateMeasurement = beats * 12;
        Serial.print("BPM: ");
        Serial.println(heartRateMeasurement);
        StartTime = CurrentTime;
        beats = 0;

//        int heartRate = map(heartRateMeasurement, 0, 1023, 0, 100);
        const unsigned char heartRateCharArray[2] = { 0, (char)heartRateMeasurement };
        heartRateChar.setValue(heartRateCharArray, 2);  // and update the heart rate measurement characteristic
      }

      if (sample && (oldSample != sample)) {
        //Serial.println("Beat");
        lightUp();
        delay(50);
        lightDown();
        beats += 1;
      }
      
      oldSample = sample;           //Store last signal received 
  
    }
    Serial.print("Disconnected from central: ");
    Serial.println(central.address());
  }
}

void lightUp(){
  for (int i = 0; i <= 250; i = i + 5){
    analogWrite(LED, i);
    delay(5);
  }
}

void lightDown(){
    for (int i = 250; i <= 0; i = i - 5){
    analogWrite(LED, i);
    delay(5);
  }
}

void updateHeartRate() {
  /* Read the current voltage level on the A0 analog input pin.
     This is used here to simulate the heart rate's measurement.
  */
  int heartRateMeasurement = analogRead(A0);
  int heartRate = map(heartRateMeasurement, 0, 1023, 0, 100);
  if (heartRate != oldHeartRate) {      // if the heart rate has changed
    Serial.print("Heart Rate is now: "); // print it
    Serial.println(heartRate);
    const unsigned char heartRateCharArray[2] = { 0, (char)heartRate };
    heartRateChar.setValue(heartRateCharArray, 2);  // and update the heart rate measurement characteristic
    oldHeartRate = heartRate;           // save the level for next comparison
  }
}
