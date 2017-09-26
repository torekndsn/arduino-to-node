#include <Console.h>
#include <Bridge.h>
#include <HttpClient.h>

int incomingByte;
const int numReadings = 10; 
int data;

void setup() {
  Bridge.begin();
  Console.begin();

  while (!Console){
    ; // wait for Console port to connect.
  }
  Console.println("You're connected to the Console!!!!");
}


void loop() {
 
  data = smooth(); 
  int sensorValue = map(data,0,1024,0,360);
  sensorValue = constrain(sensorValue,0,360);
  
  Console.print("Potentiometer value: ");
  Console.print(sensorValue);
  Console.println();

  //initialize the client library.
  HttpClient client; 

  client.get("https://arduino-to-node.herokuapp.com//get_value?val="+String(sensorValue)); 

  while(client.available())
  {
    char c = client.read();
    Console.print(c);
  }
  Console.print("");
  delay(200);
  } 



int smooth(){
  int i;
  int value = 0;
  int numReadings = 10; 

  for(i = 0; i < numReadings; i++){
    value = value + analogRead(A0);
    delay(1);
  }

  value = value / numReadings;
  return value; 
}

