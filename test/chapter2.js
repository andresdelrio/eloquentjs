// Ciclo de un triángulo
// Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

// #
// ##
// ###
// ####
// #####
// ######
// #######

for(let carecter = '#'; carecter.length < 8; carecter += '#') {
    console.log(carecter)
}

/*
Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, 
imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", 
para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).

(Esta es en realidad una pregunta de entrevista que se ha dicho elimina un porcentaje significativo de candidatos a programadores. 
Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir).
*/

// for(let i = 1; i <=100; i ++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('FizzBuzz')
//     } else if(i % 5 == 0){
//         console.log('Buzz')
//     } else if(i % 3 == 0){
//     console.log('Fizz')
//     } else {
//         console.log(i)
//     }
// }

for(let i = 1; i <=100; i ++){

    let palabra = ''
    if(i % 3 == 0) palabra += 'Fizz'
    if(i % 5 == 0) palabra += 'Buzz'
    console.log(palabra || i)
}

/*
Tablero de ajedrez
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, 
usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". 
Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo como esto:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, define una vinculación tamaño = 8 y cambia el programa para que funcione con cualquier tamaño, 
dando como salida una cuadrícula con el alto y ancho dados.

*/

// console.log('# # # # \n # # # #')
// console.log('# # # # \n # # # #')
// console.log('# # # # \n # # # #')
// console.log('# # # # \n # # # #')
let tamano = 8
for(let i = 1; i <= tamano; i++) {
    let caracter = ''
    if(i % 2 != 0){
        caracter += ' '
    }

    for(let i = 1; i <= tamano; i ++){
        if(i % 2 != 0){
            caracter += '#'
        }else{
            caracter += ' '
        }
    }
    console.log(caracter)
}
