// // let equipoFutbol = prompt('cual es tu equipo de futbol?', '');
// // if (equipoFutbol == 'barcelona'){
// //     alert('eres un cule');
// // } else {
// //     alert('seras del Madrid');
// // }

// // let equipoFutbol = prompt('¿cual es tu equipo de futbol favorito?')

// // if (equipoFutbol == 'barcelona'){
// //     alert('eres cule');
// // } else if (equipoFutbol == 'madrid') {
// //     alert('eres vikingo');
// // } else if (equipoFutbol == 'atleti'){
// //     alert('eres colchonero');
// // } else {
// //     alert('eres de otro equipo');
// // }




// // if (age > 18) {
// //   accessAllowed = true;
// // } else {
// //   accessAllowed = false;
// // }
// // let age = prompt('¿Qué edad tienes?', '');
// // let accessAllowed = (age > 18) ? true : false;

// // // alert(accessAllowed);

// // var myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];

// // myArray.forEach(
// //   function (element) {
// //     console.log(element);
// //   }
// // );

// // var myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];

// // var imprime = function(element) {
// //   console.log(element);
// // }

// // myArray.forEach(imprime);

// // Iteración sobre Array

// // var justiceLeague = ['Batman', 'Aquaman', 'Superman'];
// // // for (const justice of justiceLeague) {
// // //   console.log(justice);
// // // }

// // // Iteración sobre String

// // var clark = 'Superman';
// // for (var who of clark) {
// // 	console.log(who);
// // }

// // // Iteración sobre Arguments (los argumentos/parámetros de una función) 🤯

// // function crazyContainer() {
// // 	for (var value of arguments) {
// // 	  console.log(value);
// //   }
// // }
// // crazyContainer(justiceLeague, 8, clark);

// // var spiderman = {
// //     nombre: "Peter",
// //     apellidos: "Parker", 
// //     pais: "USA",
// //     profesion: "Student"
// // }
    
// // for (const key in spiderman) {
// //     console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
// // }




// // const name = "nombre"

// // console.log(spiderman[name])
// // console.log(spiderman.nombre)

// var dieHardArray = [1, 2,'Simon', 'John McClane', 'Zeus Carver'];

// var dieHardObj = {
//   name: 'John',
//     surname: 'McClane',
//   age: 37
// };
 
// // // Iterar un Array
// // for (value of dieHardArray) {
// //   console.log(value);  
// // }

// // for (key in dieHardArray) {
// //   console.log(key);  
// // }

 
// // // Iterar un Objeto

// // for (key in dieHardObj) {
// //   console.log(key);  
// // }
 
// for (value of dieHardObj) {
//   console.log(value);  
// }


// var backToTheFutureArray = [21, 10, 2015, 'Delorean'];
// var backToTheFutureString = 'Dr.Emmett Brown';
 
// // // Iterar un Array
// // for (value of backToTheFutureArray) {
// //   console.log(value);  
// // }
 
// // backToTheFutureArray.forEach(function(value, index) {
// //   // podemos acceder al índice
// //   console.log(value, index);
// // }
 
// // // Iterar un String
// // for (value of backToTheFutureString) {
// //   console.log(value);  
// // }
 
// backToTheFutureString.forEach(function(value, index) {
//   console.log(value, index);
// });

// function printText() {
//     console.log( '¡Pikachu Impact Trueno!' );
//   }
  
//   printText();
//   printText();

function attackPokemonWithParams(pokemon , attack) {
    alert(´¡${pokemon} ${attack}!´);
  }
  
attackPokemon();
attackPokemonWithParams('Charmander', 'Ascuas');
attackPokemonWithParams('Squirtel', 'Pistola de agua');