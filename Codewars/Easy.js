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
//#11 Acumulador

/* Esta vez no hay historia ni teoría. Los ejemplos siguientes le muestran cómo escribir la función accum:
    
  Ejemplos:
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
  El parámetro de accum es una cadena que incluye sólo las letras de a..z y A..Z. */
function accum(s) {
  return s
    .split("")
    .map((e, idx) => e.toUpperCase() + e.repeat(idx).toLowerCase())
    .join("-");
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#12 convertir a romanos

/* Crea una función que toma un número entero positivo como parámetro y devuelve una cadena que contiene la representación en números romanos de ese número entero.
Los números romanos modernos se escriben expresando cada dígito por separado, empezando por el más a la izquierda y omitiendo cualquier dígito con valor cero.
  En números romanos 1990 se representa: 1000=M, 900=CM, 90=XC; dando como resultado MCMXC. 2008 se escribe como 2000=MM, 8=VIII; o MMVIII.
  1666 utiliza cada símbolo romano en orden descendente: MDCLXVI.
Ejemplo:
 solution(1000); // debería devolver'M' */
function convertirARomanos(number) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var ans = "";
  while (number > 0) {
    for (let a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#13 Decifrar esto

/* Te dan un mensaje secreto que tienes que descifrar. A continuación se indican las cosas que debes saber para descifrarlo:
  Para cada palabra:
  la segunda y la última letra se cambian (por ejemplo, Hola se convierte en Holle)
  la primera letra se sustituye por su código de carácter (por ejemplo, H se convierte en 72)
  Nota: no se utilizan caracteres especiales, sólo letras y espacios
  Ejemplos
  decipherThis('72olle 103doo 100ya'); // 'Hello good day'
  decipherThis('82yade 115te 103o'); // 'Ready set go' */
function decipherThis(word) {
  let rgx = /[a-z]/g;

  return word
    .split(" ")
    .map((el) =>
      el.match(rgx) === null
        ? String.fromCharCode(el.match(/(\d+)/g))
        : el.match(rgx).length === 1
        ? String.fromCharCode(el.match(/(\d+)/g)) + [...el.match(rgx).slice(-1)]
        : String.fromCharCode(el.match(/(\d+)/g)) +
          [
            ...el.match(rgx).slice(-1),
            ...el.match(rgx).slice(1, -1),
            ...el.match(rgx).slice(0, 1),
          ].join("")
    )
    .join(" ");
}

//Solución avanzada
function decipherThis2(str) {
  return str
    .split(" ")
    .map((w) =>
      w
        .replace(/^\d+/, (c) => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ");
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#14 ¿Cuantas páginas tiene un libro?
/* 
Cada libro tiene x páginas con números de página del 1 a x. El sumario se hace sumando el número de dígitos de todos los números de página.

Tarea: Dado el sumario, halla el número de páginas n que tiene el libro.

Ejemplo
Si la entrada es resumen=25, entonces la salida debe ser n=17: Los números del 1 al 17 tienen 25 dígitos en total: 1234567891011121314151617.

Tenga en cuenta que obtendrá libros enormes de hasta 100.000 páginas.

Todas las entradas serán válidas.
*/

function amountOfPages(summary) {
  let i = 0,
    newSum = "";

  while (newSum.length < summary) {
    newSum += i;
    i++;
  }
  return summary < 10 ? Number(i) : Number(i - 1);
}

//Solucion avanzada
function amountOfPages2(summary) {
  let counter = 1;
  let string = "";

  while (string.length < summary) {
    string += counter;
    counter++;
  }
  return counter - 1;
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#15 Multiplos de 3 o 5

/* Multiples of 3 or 5
    Si enumeramos todos los números naturales debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.
    Termina la solución para que devuelva la suma de todos los múltiplos de 3 o 5 por debajo del número pasado.
     Además, si el número es negativo, devuelve 0 (para los idiomas que los tienen).
    Nota: si el número es un múltiplo de 3 y 5, solo cuéntelo una vez . */
function multiplos(number) {
  let sum = 0;
  if (Math.sign(number) === -1) return 0;
  for (let i = 2; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}

//Solución avanzada
const multiplos2 = (n) =>
  n <= 0
    ? 0
    : Array.from({ length: n }, (_, i) =>
        i % 3 == 0 || i % 5 == 0 ? i : 0
      ).reduce((x, y) => x + y);

//Solución avanzada 02
function multiplos3(number) {
  return number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#16 convertir de Romano a número

/* Cree una función que tome un número romano como argumento y devuelva su valor como un entero decimal numérico.
   No necesita validar la forma del número romano.
  Los números romanos modernos se escriben expresando cada dígito decimal del número que se codificará por separado,
   comenzando con el dígito más a la izquierda y omitiendo cualquier 0.
  Entonces, 1990 se traduce como "MCMXC" (1000 = M, 900 = CM, 90 = XC) y 2008 se traduce como "MMVIII" (2000 = MM, 8 = VIII).
   El número romano de 1666, "MDCLXVI", usa cada letra en orden descendente.
  Ejemplo: */

function convertirANumero(roman) {
  let obj = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 },
    result = 0;

  roman
    .split("")
    .map((el, i, arr) =>
      obj[el] < obj[arr[i + 1]] ? (result -= obj[el]) : (result += obj[el])
    );
  return result;
}

//Solución avanzada
function convertirANumero2(roman) {
  var conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  return roman
    .match(/CM|CD|XC|XL|IX|IV|\w/g)
    .reduce((accum, roman) => accum + conversion[roman], 0);
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#17  Caso Pascal

/* Complete el método/función para que convierta las palabras delimitadas por guiones/guiones bajos en mayúsculas y minúsculas.
   La primera palabra dentro de la salida debe estar en mayúsculas solo si la palabra original estaba en mayúsculas (conocido como Upper Camel Case,
  también conocido como caso Pascal).
  Ejemplos
  "the-stealth-warrior"se convierte en "theStealthWarrior"
  "The_Stealth_Warrior"se convierte en"TheStealthWarrior" */
function camel(str) {
  return /[A-Z]/.test(str[0])
    ? str
        .split(/[-|_]/gi)
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join("")
    : str
        .split(/[-|_]/gi)
        .slice(0, 1)
        .concat(
          str
            .split(/[-|_]/gi)
            .slice(1)
            .map((e) => e[0].toUpperCase() + e.slice(1))
        )
        .join("");
}

//Solución avanzada O.o
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#18 Formatear palabras en una frase
/* Complete el método para que formatee las palabras en un solo valor separado por comas. La última palabra debe estar separada por la palabra 'y'
     en lugar de una coma. El método toma una matriz de cadenas y devuelve una sola cadena con formato.
   Nota:
   Los valores de cadena vacíos deben ignorarse.
   Las matrices vacías o los valores nulo/nil/None que se pasan al método deberían dar como resultado una cadena vacía que se devuelve.
   Ejemplo: (Entrada --> salida)
   ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
   ['ninja', '', 'ronin'] --> "ninja and ronin"
   [] -->"" */

function formatWords(words) {
  if (/[a-z]/gi.test([words])) {
    words = words.filter((e) => /[a-z]/gi.test(e));
    if (words.length === 1) console.log(...words);
    if (words.length === 2) console.log(words.join(" and "));
    if (words.length > 2)
      return words.slice(0, -1).join(", ") + " and " + words.slice(-1);
  } else {
    return "";
  }
}

console.log(formatWords(["ninja", "samurai", "ronin"]));

//Solución avanzada
function formatWords(words) {
  if (!words) return "";
  return words
    .filter(function (a) {
      return a !== "";
    })
    .join(", ")
    .replace(/(, )+(\S+)$/, " and $2");
}

//Solución avanzada 2
function formatWords(a) {
  return (a || [])
    .filter((x) => x)
    .join(", ")
    .replace(/,(?= [^,]*$)/, " and");
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//#19 Diamantes y ranas

/* Basado en el cuento de hadas Diamantes y Sapos de Charles Perrault. En esta kata tendrás que completar una función que toma 2 argumentos:
   
   Una cadena, que corresponde a lo que dice la hija.
   Una cadena, que te diga con qué hada se ha encontrado la niña, ésta puede ser buena o mala.
   La función debe devolver la siguiente cuenta como un hash:
   
   Si la niña ha conocido al hada buena:
   cuenta 1 rubí cada vez que vea una r y 2 cada vez que vea una R
   cuenta 1 cristal cada vez que vea una c y 2 cada vez que vea una C
   Si la niña se ha encontrado con el hada mala
   cuenta 1 pitón cada vez que veas una p y 2 cada vez que veas una P
   cuenta 1 ardilla cada vez que veas una s y 2 cada vez que veas una S
   Nota: Para esta kata decidí sustituir los Diamantes y Sapos normales por algunos lenguajes de programación. */

/* 
describe("Basic test", function(){
  Test.assertSimilar(sortObject(diamondsAndToads("Ruby and Crystal", "good")), sortObject({ruby: 3, crystal: 2 }))
  Test.assertSimilar(sortObject(diamondsAndToads("This string contain some Ruby and some Crystal in it", "good")), sortObject({ruby: 4, crystal: 3 }))
  Test.assertSimilar(sortObject(diamondsAndToads("Python and Squirrel", "evil")), sortObject({python: 2, squirrel: 2}))
  Test.assertSimilar(sortObject(diamondsAndToads("This string contain some Python and some Squirrel in it", "evil")), sortObject({python: 2, squirrel: 6 }))
})
*/

function diamondsAndToads(sentence, fairy) {
  if (fairy == "good") {
    let ruby = 0;
    let crystal = 0;

    for (let i = 0; i < sentence.length; i++) {
      sentence[i] === "R"
        ? (ruby += 2)
        : sentence[i] === "r"
        ? ruby++
        : sentence[i] === "C"
        ? (crystal += 2)
        : sentence[i] === "c"
        ? crystal++
        : "";
    }

    return { ruby, crystal };
  } else {
    let python = 0;
    let squirrel = 0;

    for (let i = 0; i < sentence.length; i++) {
      sentence[i] === "P"
        ? (python += 2)
        : sentence[i] === "p"
        ? python++
        : sentence[i] === "S"
        ? (squirrel += 2)
        : sentence[i] === "s"
        ? squirrel++
        : "";
    }

    return { python, squirrel };
  }
}

//Solucion avanzada
function diamondsAndToads2(s, good) {
  const ct = (c) =>
    s.split(c).length - 1 + (s.split(c.toUpperCase()).length - 1) * 2;
  return good == "good"
    ? { ruby: ct("r"), crystal: ct("c") }
    : { python: ct("p"), squirrel: ct("s") };
}
