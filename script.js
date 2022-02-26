const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
//Resolucion Ej1
function primo (a) {
    if (a <= 1) {
        return false
    }   else {
        for (let i = 2; i < a; i ++){
            if (a % i == 0){
                return false
            }
        }
    return true
    }
}

function numeroPrimo() {
    ejercicio1.forEach(function numeroPrimo(a) {
        if (primo(a)) {
           console.log ("El número " + a + " es primo") 
        }
    })
}

numeroPrimo();


const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];
//Resolucion Ej2
let invitados = []

for (let i = 0; i < ejercicio2.length; i++) {
  if (ejercicio2[i].edad >= 18 && ejercicio2[i].esFamiliar) {
    console.log(ejercicio2[i].nombre + " bienvenido a la fiesta")
  }
}


//Resolucion Ejercicio 3:



console.log(`ejercicio 3`);
let x = 0;
let y = 1;
let z = 0;

for (let fibo = 0; fibo <= 50; fibo ++) {

  z = x + y;
  console.log(z);
  x = y;
  y = z;
}

