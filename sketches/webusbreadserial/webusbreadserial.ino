#include <WebUSB.h>

WebUSB WebUSBSerial(1, "drart.github.io/");

#define Serial WebUSBSerial

void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  Serial.write("Sketch begins.\r\n> ");
  Serial.flush();
  
  pinMode(13, OUTPUT);
  pinMode(5, OUTPUT);
}

void loop() {

  if(Serial.available() > 0){
    int byte = Serial.parseInt();
    analogWrite(13, byte);
    analogWrite(5, byte);

    Serial.write(byte);
    Serial.write("\r\n> ");
    Serial.flush();
  }
}
