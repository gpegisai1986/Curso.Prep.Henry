// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (let index = 0; index < array.length; index++) {
    array[index] = array[index] + 1;    
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  let frase = "";
  for (let index = 0; index < palabras.length; index++) {
    if (index === 0) 
      frase = palabras[index];    
    else
      frase = frase + " " + palabras[index];        
  }

  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.indexOf(elemento) === -1) 
    return false;

  return true;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let index = 0; index < numeros.length; index++) {
    suma = numeros[index] + suma;    
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let suma = 0;
  for (let index = 0; index < resultadosTest.length; index++) {
    suma = resultadosTest[index] + suma;    
  }

  let promedio = suma / resultadosTest.length;

  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = 0;
  for (let index = 1; index < numeros.length; index++) {
    if (index === 1){ 
      mayor = numeros[0];
      if (numeros[0] < numeros[index]){
        mayor = numeros[index];     
      }
    }else{
      if (mayor < numeros[index]){
        mayor = numeros[index];
      }
    }
  }

  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length === 0) 
    return 0;
  
  if (arguments.length === 1)
    return arguments[0]; 

  let multiplicacion = 1;
  for (let index = 0; index < arguments.length; index++) {
    multiplicacion = arguments[index] * multiplicacion;    
  }

  return multiplicacion;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0;
  for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] > 18)
      contador++;   
  }

  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7)
    return "Es fin de semana";

  return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numero = n.toString();
  if (numero[0] === "9")
    return true;

  return false; 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for (let index = 1; index < arreglo.length; index++) {
    if (index === 1){ 
      if (arreglo[0] != arreglo[index]){
        return false;     
      }
    }else{
      if (arreglo[index - 1] != arreglo[index]){
        return false;
      }
    }
  }

  return true;  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let meses = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "Enero" || array[index] === "Marzo" || array[index] === "Noviembre")
      meses.push(array[index]);   
  }
  
  if (meses.length < 3) 
    return "No se encontraron los meses pedidos";
  
  return meses;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let mayorA100 = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 100)
      mayorA100.push(array[index]);
  }

  return mayorA100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let contador = 0;
  let array = [];
  while (contador < 10) {
    contador ++;        

    if(numero === 10)
      break;

    numero =  numero + 2;
    array.push(numero);      
  }

  if (contador === 10)
    return array;
  
  return "Se interrumpió la ejecución";
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let contador = 0;
  let array = [];
  while (contador < 10) {
    contador ++;
    
    if(contador === 5)
      continue;
    
    numero =  numero + 2;
    array.push(numero);    
  }
  
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
