//Operaciones de comparacion
consola.log (4 < 7);
consola.log (4 < 1);
consola.log (4 > 4);
consola.log (4 == 7);

//Igualdad vs igualdad estricta
consola.log (3 == 3);
consola.log (3 === 3);
consola.log (3 == "3");
consola.log (3 === "3");
consola.log (7 == "7");
consola.log (7 === "7");

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
consola.log (c);