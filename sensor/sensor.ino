#include <Console.h>
#include <Bridge.h>
#include <HttpClient.h>

int incomingByte;

void setup() {
  Bridge.begin();
  Console.begin();

    while (!Console){
    ; // wait for Console port to connect.
  }
  Console.println("You're connected to the Console!!!!");
}


void loop() {
 /* int sensorValue = analogRead(A0);
  Console.print("Potentiometer value: ");
  Console.print(sensorValue);
  Console.println();
*/


  if (Console.available() > 0) {
    incomingByte = Console.read();

 
  //initialize the client library.
  HttpClient client; 

  client.get("https://arduino-to-node.herokuapp.com/get_value?val="+String(incomingByte)); 

  while(client.available())
  {
    char c = client.read();
    Console.print(c);
  }
  Console.print("");
  delay(200);
  } 
}
