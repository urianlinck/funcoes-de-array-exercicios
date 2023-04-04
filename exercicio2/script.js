const numeros = [51,20,36,42,60,71,25,90]

//1.Retorne um novo array contendo os números multiplicados por 5. Guarde esse array dentro de uma variável `const quintuplos`.

const quintuplos = numeros.map((item) => {
    return item * 5
})
console.log("quintuplos",quintuplos)

//2. Retorne um novo array contendo os números divididos por 2. Guarde esse array dentro de uma variável `const metades`.

const metades = numeros.map((item) => {
    return item/2
})
console.log(metades)