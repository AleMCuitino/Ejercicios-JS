// Ej1 Crear función que reciba como parámetros dos números y que devuelva la suma de ellos
function suma(a, b) {
  console.log(a + b);
}

suma(20, 130);
suma(55, 36);

//Ej2 Crear función que determine si un número es par o impar.
function parImpar(numero) {
  if (numero % 2 == 0) {
    console.log("Número par");
  } else {
    console.log("Número impar");
  }
}

parImpar(101);
parImpar(422);

//Ej3 Crear un objeto carro haciendo de la abstracción de sus atributos y un objeto anidado.

let carro = {
  marca: "maserati",
  color: "blanco",
  año: "2022",
  neumáticos: "michellin",
  puertas: "5",
  asientos: {
    textil: "eco cuero",
    costuras: "reforzdas",
  },
};

//Ej4 Crear una función que devuelva la marca del carro.
function Brand() {
  console.log(carro.marca);
  console.log(carro.puertas); //Ej5 Crear una función que devuelva la cantidad de puertas que tiene el carro.
  console.log(carro.asientos.textil); //Ej6 Crear una función que devuelva un atributo del objeto anidado.
}
Brand();

//Crear un array de 10 números
let arrayNum = [3, 5, 7, 8, 14, 17, 18, 32, 34, 55];

//Ej7 Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
let Print = (arrayNum) => {
  for (let index = 0; index < arrayNum.length; index++) {
    console.log(arrayNum[index]);
  }
};

Print(arrayNum);

//Ej8 Crear una función que elimine los números pares de ese array.

const notPares = (pares) => {
  for (let index = 0; index < pares.length; index++) {
    if (pares[index] % 2 == 0) {
      pares.splice(index, 2);
    }
  }
  console.log(`Los numeros impares son ${pares}`);
};

notPares(arrayNum);

// Ej9 Crear una función que devuelva el número mayor de un array
function mayorArray(array) {
  let numero = Math.max(...array); //los 3 puntos es copia del array
  console.log(`El mayor número del array es ${numero}`);
}

mayorArray([1, 4, 5, 78, 90, 165, 4, 34, 55, 67, 890]);

// Ej10 Crear una función que devuelva el número menor de un array
function menorArray(array) {
  let numero = Math.min(...array); //los 3 puntos es copia del array
  console.log(`El menor número del array es ${numero}`);
}

menorArray([1, 4, 5, 78, 90, 165, 4, 34, 55, 67, 890]);

// Ej11 Crear un función que convierta en minúsculas todas las letras de un texto.
function textMinusc(texto) {
  return texto.toLowerCase();
}

console.log(
  textMinusc(
    `CREAR UNA FUNCIÓN QUE CONVIERTA EN MINÚSCULA TODAS LAS LETRAS DE UN TEXTO`
  )
);

// Ej12 Crear un función que convierta en minúsculas todas las letras de un texto.
function textMayusc(texto) {
  return texto.toUpperCase();
}

console.log(
  textMayusc(
    "Crear un función que convierta en mayúsculas todas las letras de un texto."
  )
);

//Ej13 Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
let nameArray = [
  "mariano",
  "camila",
  "catalina",
  "carlos",
  "florencia",
  "marta",
  "geral",
];

function firstCap(Array) {
  for (let i = 0; i < Array.length; i++) {
    let mayus = Array[i].charAt(0).toUpperCase() + Array[i].slice(1);
    Array.splice(i, 1, mayus);
  }
  console.log(Array);
}

firstCap(nameArray);

//Ej14 Crear un array de 10 nombres.

let namesArr = [
  "mariano",
  "camila",
  "catalina",
  "carlos",
  "florencia",
  "marta",
  "geral",
  "jerónimo",
  "margarita",
  "maría",
];

//Ej15 Crear una función que imprima en pantalla una lista con los nombres del array de nombres.

function Names() {
  console.log(namesArr);
}

Names(namesArr);

//Ej16 Crear un array de números.

let nums = [8, 20, 21, 23, 44, 56, 78, 90, 102, 166, 5];

/*Ej17 crear una función que pinte en pantalla cuántos números tiene el array de números
function cantidad (item) {
    let total = (item.length);
    console.log(`La cantidad de números del array es ${total}`)
    const totalHTML = `<p>${total}</p>`
    elementos.innerHTML = totalHTML
}
cantidad(nums)*/
let main = document.getElementById("main");

//Ej17 crear una función que pinte en pantalla cuántos números tiene el array de números | AppendChild
function cantidad(item) {
  let total = item.length;
  main.appendChild(document.createElement("p"));
  main.lastElementChild.innerHTML = total;
  console.log(total);
}
cantidad(nums);

//Ej18 Crea los nodos necesarios para imprimir un formulario.
const formHTML = `  
<form action="/action_page.php" id="form">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="Name"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Last name"><br><br>
    <input type="submit" value="Submit">
</form> `

main.appendChild(document.createElement("div"))
main.lastElementChild.innerHTML = formHTML

console.log(document.getElementById("form"));

//Ej19 Crea el objeto
let ul = document.createElement("ul");

let personaje = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    type: "",
    gender: "Female",
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    type: "Genetic experiment",
    gender: "Male",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 9,
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    type: "Superhuman (Ghost trains summoner)",
    gender: "Male",
  },
];


const tableHTML = `  
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Species</th>
                <th>Type</th>
                <th>Gender</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>`;
        
main.appendChild(document.createElement("div"))
main.lastElementChild.innerHTML = tableHTML
console.log(document.getElementById("form"));
        
