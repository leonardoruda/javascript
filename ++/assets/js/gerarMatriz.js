
function addNum(max, min) {
    return Math.floor(Math.random()*(max-min+1))+min
}

console.log('--------------------------------------------')
console.log('                MATRIZ 3X3                  ')
console.log('--------------------------------------------')
let matriz = [[]]
let vetor1 = []
let vetor2 = []
let vetor3 = []

for (let i = 0; i < 3; i++) {
    vetor1[i] = addNum(100, 0)
    
}
matriz[0] = vetor1

for (let i = 0; i < 3; i++) {
    vetor2[i] = addNum(100, 0)
    
}
matriz[1] = vetor2

for (let i = 0; i < 3; i++) {
    vetor3[i] = addNum(100, 0)
    
}
matriz[2] = vetor3

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`Posição [${i}, ${j}] recebe ${matriz[i][j]}`)
    }
}

console.log('==============================================')

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
        console.log(`${matriz[i][j]} ${matriz[i][j+1]} ${matriz[i][j+2]}`)
        console.log(`${matriz[i+1][j]} ${matriz[i+1][j+1]} ${matriz[i+1][j+2]}`)
        console.log(`${matriz[i+2][j]} ${matriz[i+2][j+1]} ${matriz[i+2][j+2]}`)
    }
}

console.log('==============================================')

console.log(vetor1)
console.log(vetor2)
console.log(matriz)