//1 Crea una lista vacía llamada "listaGenerica".
    let listaGenerica[];
//2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
    let lenguajesDeProgramacion = ['JavaScript', 'C','C++','Kotlin','Python'];
//3  Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
    let lenguajesDeProgramacion = ['Java', 'Ruby', 'Golang'];
//4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
    function mostrarLenguajesDeProgramacion
    for (let i= 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
    }
    mostrarLenguajesDeProgramacion();
//5 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
 function mostrarReversoLenguajesDeProgramacion
    for (let i= lenguajesDeProgramacion.length -1; i >0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
    }
    mostrarReversoLenguajesDeProgramacion();

    //6 Crea una función que calcule el promedio de los elementos en una lista de números.
    function promedioListaDeNumeros(lista) {
        let suma=0;
        for (let i= 0; i < lista.length; i++){
            suma+= lista[i];
         }
         return suma / lista.length;
    }

    let numeros = [10,20,30, 40 , 50];
    let media = promedioListaDeNumeros(numeros);
    console.log('Media', media);

    //7 Crea una función que muestre en la consola el número mayor y menor en una lista.

    function encontrarMinMax(listaNumeros) {
    let min = listaNumeros[0];
    let max = listaNumeros[0];

    for (let i = 1; i < listaNumeros.length; i++) {
    if (listaNumeros[i] < min) {
      min = listaNumeros[i];
    }
    if (listaNumeros[i] > max) {
      max = listaNumeros[i];
    }
  }

  console.log("El Número menor:", min);
  console.log("El Número mayor:", max);
}

let numeros = [22, 9, 3, 18];
encontrarMinMax(numeros);

//8 Crea una función que retorne la suma de todos los elementos en una lista.


function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);

//9 Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

//10 Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);  

//11 Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(resultado);  


