/* Ejercicio 1*/
console.log('Hola Mundo');

/* Ejercicio 2*/
let num = 2;
const string = 'Pedro';

num += 1;

console.log(num + ' ' + string);

/* Ejercicio 2*/
const numero = 42;
const javascript = 'JavaScript';
const booleano = true;

console.log(typeof numero);
console.log(typeof javascript);
console.log(typeof booleano);

/* Ejercicio 4 */
console.log((15 + 3) * (8 / 2));

/* Ejercicio 5 */
function suma(a, b) {
    return a + b;
}

console.log(suma(3, 5));

/* Ejercicio 6 */
const digito = 1;

if (digito > 0) {
    console.log(digito + ' es positivo');
} else if (digito === 0) {
    console.log(digito + ' es cero');
} else {
    console.log(digito + ' es negativo');
}

/* Ejercicio 7 */
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/* Ejercicio 8 */
let texto = 'hola mundo';
const texto2 = 'desde Js';
texto = texto.toUpperCase();
texto = texto.concat(' ', texto2);

console.log(texto);

/* Ejercicio 9 */
const frutas = ['manzana', 'banana', 'pera'];
console.log(frutas[1]);

/* Ejercicio 10 */
const frutas2 = ['manzana'];
frutas2.push('naranja')
console.log('Después del push el array se queda así: ' + frutas2);
frutas2.pop();
console.log('Después del pop el array se queda así: ' + frutas2);

/* Ejercicio 11*/
let usuario = {
    nombre: 'Carlota',
    edad: '28'
}
console.log('El usuario es: ' + usuario.nombre + ' y tiene ' + usuario.edad + ' años');

/* Ejercicio 12 */
usuario.saludar = function () {
    console.log('Hola ' + usuario.nombre);
};

usuario.saludar();

/* Ejercicio 13 */
const fecha = new Date();
console.log(fecha.getFullYear());

/* Ejercicio 14 */
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio);

/* Ejercicio 15 */
const numeroDia = 3;

switch (numeroDia) {
    case 0:
        console.log('Lunes');
        break;
    case 1:
        console.log('Martes');
        break;
    case 2:
        console.log('Miércoles');
        break;
    case 3:
        console.log('Jueves');
        break;
    case 4:
        console.log('Viernes');
        break;
    case 5:
        console.log('Sábado');
        break;
    case 6:
        console.log('Domingo');
        break;
    default:
        console.log('Error: Número fuera de rango. Debe estar entre 0 y 6.');
}

/* Ejercicio 16 */
let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

/* Ejercicio 17 */
function esPar(num) {
    return num % 2 === 0;
}

console.log(esPar(4));
console.log(esPar(7));
console.log(esPar(10));
console.log(esPar(13));

/* Ejercicio 18 */
const nombre = 'Carlota';
const edad = 28;
const mensaje = `Hola, ${nombre} tienes ${edad} años`;

console.log(mensaje);

/* Ejercicio 19 */
// function suma(a, b) {
//     return a + b;
//   }

const suma = (a, b) => a + b;
console.log('const suma = (a, b) => a + b;');

/* Ejercicio 20 */
const arrayNumeros = [1, 2, 3];

arrayNumeros.forEach(function (numero) {
    console.log(numero);
});

/* Ejercicio 21 */
console.log(frutas.indexOf('banana'));

/* Ejercicio 22 */
let arrayNumerosOrden = [5, 1, 3];

arrayNumerosOrden.sort((a, b) => a - b);
console.log(arrayNumerosOrden);

/* Ejercicio 23 */
let arrayNumerosFilter = [1, 2, 3, 4];

const numerosPares = arrayNumerosFilter.filter(num => num % 2 === 0);
console.log(numerosPares);

/* Ejercicio 24 */
let arrayNumerosMap = [1, 2, 3];
const cuadrados = arrayNumerosFilter.map(num => num ** 2);
console.log(cuadrados);

/* Ejercicio 25 */
function Persona(nombre) {
    this.nombre = nombre;
}
const persona1 = new Persona('Carlota');
console.log(persona1.nombre);

/* Ejercicio 26 */
let hhmmss = fecha.toTimeString();
hhmmss = hhmmss.split(' ')[0];
console.log(hhmmss);

/* Ejercicio 27 */
const redondeo = 3.1415;
console.log(redondeo.toFixed(2));

/* Ejercicio 28 */
const texto3 = '¡Hola Mundo!';
const palabra = 'hola';

console.log(texto3.toLowerCase().includes(palabra.toLowerCase()));

/* Ejercicio 29 */
const stringFrutas = 'manzana,banana,pera';
const arrayFrutas = stringFrutas.split(',');

console.log(arrayFrutas);

const stringFrutasGuiones = arrayFrutas.join('-');

console.log(stringFrutasGuiones);

/* Ejercicio 30 */
const numeros = [10, 20, 30];
const [primerElemento, , tercerElemento] = numeros;

console.log(primerElemento);
console.log(tercerElemento);

/* Ejercicio 31 */
const person = {
    nombrep: 'Ana',
    edadp: 30
};
const { nombrep, edadp } = person;
console.log(nombrep);
console.log(edadp);

/* Ejercicio 32 */
function crearContador() {
    let contador = 0;

    return function () {
        contador++;
        return contador;
    }
}
let miContador = crearContador();

console.log(miContador());
console.log(miContador());
console.log(miContador());

/* Ejercicio 33 */
const coche = {
    marca: 'Volvo',
    mostrarMarca: function (){
        console.log(this.marca);
    }
}

coche.mostrarMarca();

/* Ejercicio 34*/
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    area() {
        return this.ancho * this.alto;
    }
}

const miRectangulo = new Rectangulo(5, 10);

console.log(miRectangulo.area());

/* Ejercicio 35 */
const  persona = {
    nombre: 'Carlota',
    edad: 28,
    ciudad: 'Madrid'
};

const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

const personaObj = JSON.parse(personaJSON);
console.log(personaObj);