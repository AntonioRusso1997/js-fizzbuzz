/* Scrivi un programma che stampi i numeri da 1 a 100,
 - ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
 - Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

 // Creo una variabile per indicare il numero di "interazioni"
 var InteractionN = 100; 
 
 // Uso il for per generare i numeri da 1 a 100
 for (var i=0; i < InteractionN; i++)
 {
     var number = i + 1; /*Creo variabile per assegnare +1 alla i */
     if ((number % 3 == 0) && (number % 5 == 0))
     {
        console.log("FizzBuzz");
     }
     else if (number % 3 == 0)
     {
         console.log("Fizz");
     }
     else if (number % 5 == 0)
     {
         console.log("Buzz");
     }
     else
     {
         console.log (number);
     }
 }