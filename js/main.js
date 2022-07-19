/*Pedir al usuario el nombre y la edad
informar si es mayor de edad mayor a 17 años ,
si es adolescente de 13 a 17 o 
si tiene menos de 13 años es un niño/a 


*se pueden crear las variables que crean necesarias
*se debe usar un solo alert en todo el codigo
*en el mensaje debe incluirse el nombre, 
por ejemplo:

"Hola maria , tu eres adolescente y tienes 15 años de edad".
"Hola jose , tu eres mayor y tienes 44 años de edad".
"Hola Julieta , tu eres niño/a y tienes 8 años de edad"*/

let nombre;
let edad;
let flag_edad;

nombre=prompt("ingrese su nombre");
edad=parseInt(prompt("ingrese su edad"));

if (edad > 17){
   flag_edad = "mayor";
} else if(edad<13){
   flag_edad = "niño/a";
   }else {
      flag_edad= "adoslecente";
   }
alert("Hola " + nombre + ", tu eres " + flag_edad + " y tienes "+edad+" años de edad");