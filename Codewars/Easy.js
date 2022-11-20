//-----------------------------------------------------------------------------------
//#01 Girar palabras

/* Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena,
pero con las palabras de cinco o más letras invertidas
 Las cadenas pasadas consistirán solo en letras y espacios.
Los espacios se incluirán solo cuando haya más de una palabra presente.
Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"*/

function spinWords(cadena) {
  let nCadena = [];

  cadena.split(" ").forEach((el) => {
    if (el.length >= 5) {
      nCadena.push(el.split("").reverse().join(""));
    } else {
      nCadena.push(el);
    }
  });
  return nCadena.join(" ");
}
spinWords("This is another test");

// Solución avanzada
const refSpinWords = (s) =>
  s
    .split(" ")
    .map((s) => (s.length >= 5 ? s.split("").reverse().join("") : s))
    .join(" ");

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#02 Tarjeta de crédito

/* Por lo general, cuando compra algo, se le pregunta si su número de tarjeta de crédito,
 número de teléfono o la respuesta a su pregunta más secreta sigue siendo correcta.
 Sin embargo, dado que alguien podría mirar por encima de su hombro, no desea que eso se muestre en su pantalla.
 En cambio, lo enmascaramos. Su tarea es escribir una función maskify,
 que cambia todos menos los últimos cuatro caracteres en '#'.
 maskify("4556364607935616") == "############5616"*/

function maskify(string) {
  if (string.length <= 4) {
    return string;
  } else {
    return string.slice(0, -4).replace(/./g, "#") + string.slice(-4);
  }
}

//Solución avanzada
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#03 Orden descendente

/* Su tarea es crear una función que pueda tomar cualquier número entero no negativo como argumento
    y devolverlo con sus dígitos en orden descendente.
    Esencialmente, reorganiza los dígitos para crear el número más alto posible. */
function descendingOrder(n) {
  return String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
//Solución avanzada
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#04 Suma los mas pequeños

/* Cree una función que devuelva la suma de los dos números positivos más bajos
     dada una matriz de mínimo 4 enteros positivos. No se pasarán números flotantes ni enteros no positivos.
    Por ejemplo, cuando se pasa una matriz como [19, 5, 42, 2, 77], la salida debería ser 7.
    [10, 343445353, 3453445, 3453545353453] debería devolver 3453455. */
function sumTwoSmallestNumbers(num) {
  num.sort((a, b) => a - b);
  return num[0] + num[1];
}

//Solución avanzada
sumTwoSmallestNumbers = (numbers) =>
  numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1];

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#05 Par de letras

/* Complete la solución para que divida la cadena en pares de dos caracteres.
     Si la cadena contiene un número impar de caracteres,
      debe reemplazar el segundo carácter faltante del par final con un guión bajo ('_').
    Ejemplos:
    * 'abc' => ['ab', 'c_']
    * 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str) {
  return !str
    ? []
    : str.length % 2 === 0
    ? str.match(/.{1,2}/g)
    : (str + "_").match(/.{1,2}/g);
}

//Solución avanzada
const solution2 = (str) => (str + "_").match(/../g) || [];

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#06 Buscador de numero

/* Hay una matriz con algunos números. Todos los números son iguales excepto uno. ¡Intenta encontrarlo!
    encontrarUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 ;   encontrarUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
    Se garantiza que la matriz contiene al menos 3 números.
    Las pruebas contienen matrices muy grandes, así que piense en el rendimiento. */
function findUniq(arr) {
  arr = arr.map((el) => el).sort();
  return arr[0] === arr[1] ? arr.pop() : arr[0];
}

//Solución avanzada
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

//Mayor rendimiento
function findUniq(arr) {
  let [a, b, c] = arr.slice(0, 3);
  if (a != b && a != c) return a;
  for (let x of arr) if (x != a) return x;
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#07 Repetidor de numeros
function explode(num) {
  return num
    .split("")
    .map((n) => n.repeat(n))
    .join("");
}

//Solucion Avanzada
const explode2 = (s) => s.replace(/\d/g, (d) => d.repeat(d));

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#08 Intercambio de casos

// Dada una cadena, cambia el caso por cada una de las letras.
function swap(str) {
  return str
    .split("")
    .map((letter) =>
      /[A-Z]/.test(letter) ? letter.toLowerCase() : letter.toUpperCase()
    )
    .join("");
}

//-----------------------------------------------------------------------------------
//#09 Calculadora de puntos

/* 
Tienes que escribir una calculadora que reciba cadenas de caracteres como entrada. Los puntos representarán el número de la ecuación.
    Habrá puntos en un lado, un operador, y puntos de nuevo después del operador. Los puntos y el operador estarán separados por un espacio.
    Los siguientes operadores son válidos:
    + Suma
    - Sustracción
    * Multiplicación
     // División de enteros
    Tu Trabajo (Tarea)
    Tendrás que devolver una cadena que contenga puntos, tantos como devuelva la ecuación.
    Si el resultado es 0, devuelve la cadena vacía. Cuando se trata de una resta,
    el primer número siempre será mayor o igual que el segundo.
    Ejemplos (Entrada => Salida)

*/
function dotCalculator(str) {
  str = str.split(" ");
  let a = str[0].length,
    b = str[2].length,
    op = str[1];

  return op === "+"
    ? ".".repeat(a + b)
    : op === "-"
    ? ".".repeat(a - b)
    : op === "*"
    ? ".".repeat(a * b)
    : op === "//"
    ? ".".repeat(a / b)
    : "error";
}

//Solución avanzada O.o
const dotCalculator2 = (equation) => {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "//": (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(" ");
  return ".".repeat(operations[operator](left.length, right.length));
};

//-----------------------------------------------------------------------------------
//#10 Dos string en una

/* 
Tomar 2 cadenas s1 y s2 que incluyan sólo letras de a a z. Devolver una nueva cadena ordenada, la más larga posible,
  que contenga letras distintas - cada una tomada sólo una vez - procedentes de s1 o s2.
  Ejemplos:
  a = "xyaabbbccccdefww"
  b = "xxxxyyyyabklmopq"
  longest(a, b) -> "abcdefklmopqwxy"
*/

function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#11
