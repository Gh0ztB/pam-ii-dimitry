const TesteImparPar = (n) => {
    let calculoTeste = n % 2
    
    return(calculoTeste == 1) ? "Número Impar" : "Número par"
}

console.log(TesteImparPar(17))
console.log(TesteImparPar(64))
console.log(TesteImparPar(1500))