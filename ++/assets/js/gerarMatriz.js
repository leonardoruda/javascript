let vetor1 = []
let vetor2 = []
let vetor3 = []
let matriz = [vetor1, vetor2, vetor3]

function addNum(max, min) {
    return Math.floor(Math.random()*(max-min+1))+min
}

for (let i = 0; i < 3; i++) {
    vetor1[i] = addNum(100, 0)
}

for (let i = 0; i < 3; i++) {
    vetor2[i] = addNum(100, 0)
}

for (let i = 0; i < 3; i++) {
    vetor3[i] = addNum(100, 0)
}

console.log('--------------------------------------------')
console.log('                MATRIZ 3X3                  ')
console.log('--------------------------------------------')

/**
 * for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`Posição [${i}, ${j}] recebe ${matriz[i][j]}`)
    }
}
 */
for (let i in matriz) {
    for (let j in matriz) {
        console.log(`Posição [${i}, ${j}] recebe ${matriz[i][j]}`)
    }
}

console.log('==============================================')
/**
 * for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
        console.log(`${matriz[i][j]} ${matriz[i][j+1]} ${matriz[i][j+2]}`)
        console.log(`${matriz[i+1][j]} ${matriz[i+1][j+1]} ${matriz[i+1][j+2]}`)
        console.log(`${matriz[i+2][j]} ${matriz[i+2][j+1]} ${matriz[i+2][j+2]}`)
    }
}
 */
for (let i of matriz) {
    console.log(`${i}`)
}

console.log('==============================================')
console.log(vetor1)
console.log(vetor2)
console.log(matriz)