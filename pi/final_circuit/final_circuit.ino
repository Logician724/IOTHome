
#include "DHT.h"
#define Buzzer_Pin 13
#define DHTPIN 2 
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  // put your setup code here, to run once:
 Serial.begin(9600);
 dht.begin();
 pinMode(Buzzer_Pin , OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(2000);
Smoke_Sensor();
Temp_Humid_Sensor();
   
}
void Smoke_Sensor(){
 if (analogRead(A0) < 100){ 
 //Buzzer off
 digitalWrite(Buzzer_Pin, LOW); 
Serial.print( "Smoke-No Smoke//");
 }
 else {
 //Buzzer on
 digitalWrite(Buzzer_Pin, HIGH);
 return "Smoke-Smoke//";
 }
 
}
String Temp_Humid_Sensor(){
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
    if (isnan(h) || isnan(t)) {
    Serial.print( "Temprature-Failed to read from DHT sensor!");
    Serial.println("");
    return;
  }
  // Compute heat index in Celsius (isFahreheit = false)
  float hic = dht.computeHeatIndex(t, h, false);
   Serial.print("Humidity-");
   Serial.print(h);
   Serial.print("%//");
   Serial.print("Temprature-");
   Serial.print(t);
   Serial.print("°C");
   Serial.println("");
}

