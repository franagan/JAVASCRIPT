// A partir de este array:
const puntajes = [
  [10, 5, 2, 8],
  [4, 9, 3, 7],
  [6, 1, 8, 5],
];

// Crea una copia de la segunda fila del array y asignalo a una variable nueva.
let segundaFila = puntajes[1];
// console.log(segundaFila);

// Elimina la segunda fila del array original.
// puntajes.splice(1,1);
// console.log(puntajes)
// Elimina el último elemento de la primera fila del array original.
// puntajes[0].pop();
// console.log(puntajes);
// Agrega el numero 50 al final de la tercera fila del array original.
// puntajes[2].push(50);
// console.log(puntajes);
// Eliminar el primer elemento de la tercera fila del array original.
// puntajes[2].shift();
// console.log(puntajes);
// Agrega el numero 100 al principio de la primera fila del array original.
// puntajes[0].unshift(100);
// console.log(puntajes);
// Muestra por consola :el array original y la copia de la segunda fila creada en el paso 2 para verificar los cambios.
console.log(puntajes);
console.log(segundaFila);