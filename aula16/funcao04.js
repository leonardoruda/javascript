function fatorial(x) {
    let f = 1
    console.log(`Calculando o fatorial de ${x}:`)
    for (let c = x; c>1; c--) {
       f *= c
       console.log(`* ${c}`)
    }
    return f
}

console.log(`O fatorial é ${fatorial(5)}`)