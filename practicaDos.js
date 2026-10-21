 /*----------- 1 -------------------
let numeros = [4,8,5,3];

const ultimoNumero = (arreglo) => arreglo.at(-1);

console.log(ultimoNumero(numeros));
*/

/*----------------- 2 ----------------
let numeros = [2,7,5,11];

const nuevoArreglo = (arreglo, nuevoNumero) =>{
    arreglo.push(nuevoNumero);
    return arreglo;
}

console.log(nuevoArreglo(numeros, 9));
*/

/*----------------- 3 ----------------
let entrada = [2,6,1,8];

const promedio = (arreglo) =>{
   let suma = 0
   for (const numero of arreglo){
     suma+= numero;
   }
   return arreglo.length ? suma / arreglo.length : 0;
}

console.log(promedio(entrada));
*/

/*----------------- 4 ----------------

let entrada = [1, 2, 5, 8, 9, 12, 2, 3];

const sumaNumeros = (arreglo) => {
  let suma = 0;
  const pares = [];
  for (const numero of arreglo) {
    if (numero % 2 === 0) {
      pares.push(numero);
      suma += numero;
    }
  }

  return `${pares.join(" + ")} = ${suma}`;
};

console.log(sumaNumeros(entrada));
*/

/*----------------- 5 ----------------

let arreglo1=[2,5,2,3,7,2];
let arreglo2=[1,5,3,3];

const booleanoArray = (a,b) =>{
    const union = [...a,...b];
    const booleano = union.length >= 10;
    return `[${union.join(", ")}] ${booleano}`;
}

console.log(booleanoArray(arreglo1,arreglo2));
*/

/*----------------- 6 ----------------
let arreglo1 =[2,5,2];
let arreglo2 =[1,5,3];

const fuccionArray = (a,b) =>{
    const union = [...a,...b];
    const multiplicacion = union.map((numero) => numero * 2);
    return ` [ ${multiplicacion.join(", ")}] `;
}
console.log(fuccionArray(arreglo1,arreglo2));
*/
/*----------------- 7 ----------------
const contraseña = "password";
let registroContraseña = prompt("Digita la contraseña: ");

const validacionContraseña = () =>{
    if(registroContraseña?.trim().toLowerCase() === contraseña.toLowerCase()){
        console.log("La contraseña es correcta");
    } else{
        console.log("La contraseña es incorrecta");
    }
}
validacionContraseña();
*/
/*----------------- 8 ----------------
const calcularPrecioEntrada = (edad)=>{
  if(edad<4){
    return "La entrada es gratis";
  } else if(edad >= 4 && edad <=18 ){
    return "El costo de la entrada es 5€ ";
  } else{
    return "El costo de la entrada es 10€ ";
  }
}

console.log(calcularPrecioEntrada(15));
*/
/*----------------- 9 ----------------
let edad = Number(prompt("Digita tu edad:"));
let ingreso = Number(prompt("¿Cuáles son tus ingresos mensuales?"));

const tributarImpuestos = (edad ,ingreso) =>{
  if(edad > 18 && edad < 1000){
    return "Si tienes que tributar";
  } else {
    return "No tienes que tributar";
  }
}

console.log(tributarImpuestos(edad,ingreso));
*/
/*----------------- 10 ----------------
let diametro = Number(prompt("Digite el diametro de la rueda"));
let grosor = Number(prompt("Digita el grosor de la rueda"));

const evaluacionRueda = (diametro, grosor) => {
    let mensajeVehiculo = "";
    let mensajeGrosor = "";

    if (diametro > 1.4) {
        mensajeVehiculo = "La rueda es para un vehículo grande1.1";
    } else if (diametro > 0.8) { 
        mensajeVehiculo = "La rueda es para un vehículo mediano";
    } else {
        mensajeVehiculo = "La rueda es para un vehículo pequeño";
    }

    if ((diametro > 1.4 && grosor < 0.4) || (diametro > 0.8 && diametro <= 1.4 && grosor < 0.25)) {
        mensajeGrosor = "Su grosor es inferior al recomendado";
    }

    if (mensajeGrosor !== "") {
        return mensajeVehiculo + "\n" + mensajeGrosor;
    } else {
        return mensajeVehiculo;
    }
};

console.log(evaluacionRueda(diametro,grosor));
*/
/*----------------- 11 ----------------
const personas = [
{ nombre: 'boris', hobby: 'correr', salario: 2000 }, 
{ nombre: 'luis', hobby: 'cantar', salario: 1500 }, 
{ nombre: 'carmen', hobby: 'cocinar', salario: 800 }, 
{ nombre: 'percy', hobby: 'cantar', salario: 1100 }, 
{ nombre: 'rosa', hobby: 'leer', salario: 3000 }, 
]

const filtrarPersonasSalario = (lista) =>{
  return lista.filter(persona => persona.salario > 1200);
}
const filtrarPersonasHobby = (lista) =>{
  return lista.filter(persona => persona.hobby === 'cantar');
}
const filtrarPersonasLeer = (lista) =>{
  return lista.filter(persona => persona.hobby === 'leer');
}

console.log("Personas con salario superior a 1200");
console.log(filtrarPersonasSalario(personas));
console.log("--------------------------------------")
console.log("Personas que tienen como hobby cantar");
console.log(filtrarPersonasHobby(personas));
console.log("--------------------------------------")
console.log("Personas que tienen como hobby leer");
console.log(filtrarPersonasLeer(personas));
console.log("--------------------------------------")
*/
/*----------------- 12 ----------------

const datosServicio = [
  {dia: "lunes", encargado:"Maria"},
  {dia: "martes", encargado:"Luis"},
  {dia: "miercoles", encargado: "Antonia"},
  {dia: "jueves", encargado: "Pedro"},
  {dia: "viernes",  encargado: "Marisa"}
]

const personaEncargadaServicio = (lista, diaServicio) =>{
  let diaBuscado = diaServicio.toLowerCase();
  let encontrado = lista.find(dato => dato.dia === diaBuscado);
  if(encontrado){
    return `Este dia se encarga ${encontrado.encargado}`
  } else{
    return "No hay servicio"
  }
}

let diaUsuario = prompt("¿Qué día deseas consultar?");
let resultado = personaEncargadaServicio(datosServicio, diaUsuario);
console.log(resultado);
*/
/*----------------- 13 ----------------
const productos = [
  {producto: "teclado", precio:20},
  {producto: "monitor", precio:200},
  {producto: "raton", precio:10}
]

const pedidoProductos = (listaProductos,nombreProducto) =>{
  const productoEncontrado = listaProductos.find(producto => producto.producto === nombreProducto);

  return productoEncontrado? productoEncontrado.precio : "Producto no encontrado";
}

console.log(pedidoProductos(productos, "monitor"));
*/