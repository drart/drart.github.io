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
}

void loop() {

  
  digitalWrite(13, LOW);
  delay(100);
  digitalWrite(13, HIGH);
  delay(100);
}
