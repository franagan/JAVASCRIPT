// Escribe un programa que solicite al usuario su nota en un examen y le indique su calificación correspondiente.
// Utiliza un operador ternario múltiple para asignar la calificación correspondiente según la siguiente tabla y muestra el mensaje por consola.
// 0-4: Suspenso
// 5-6: Suficiente
// 7-8: Notable
// 9-10: Sobresaliente

let nota = prompt("dime que nota has sacado", "");

let calificacion =
nota < 5
  ? "estas suspenso"
  : nota < 7
  ? "tienes un suficiente"
  : nota < 9
  ? "tienes un notable"
  : "tienes un sobresaliente";
  console.log('tu nota' + calificacion);
