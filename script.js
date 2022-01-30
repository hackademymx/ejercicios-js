const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

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

// Ejercicio 1
let res = []
ejercicio1.forEach(num => {
  if (num % 2 != 0 & num & 3 != 0 & num % 5 != 0){
    res.push(num)
  }
})
console.log(res)

// Ejercicio 2
let familia = []
ejercicio2.forEach(invitado => {
  if (invitado.esFamiliar){
    if (invitado.edad >= 18){
      familia.push(invitado.nombre)
    }
  }
})
console.log(familia)


// Ejercicio 3
let fib = [0,1]
for(let i = 2;i <50; i++){
  let j = fib[i - 1] + fib[i - 2]
  fib.push(j)
}
console.log(fib)