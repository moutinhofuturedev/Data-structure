// Estrutura de um array
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hammilton']

// a indexação ( index ) começa pelo número 0
console.log(pilotos[2]) // => Schumacher

//acessar o tamanho do array
console.log(pilotos.length) // => 4 positions

// interável
for(let pilot of pilotos) {
    console.log(pilot) // => Senna, Prost, Schumacher, Hammilton
}

// contando as positions
for(let pilot2 in pilotos) {
    console.log(pilot2) // => 0,1,2,3
}

// adicionar elements
pilotos.push('Alonso')
console.log(pilotos) // => ['Senna', 'Prost', 'Schumacher', 'Hammilton', 'Alonso']

// encontar um elemento
const getPilot = pilotos.find(element => element === 'Schumacher')
console.log(`Encontramos o piloto ${getPilot}`)

// deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos) // => ['Senna', 'Schumacher', 'Hammilton', 'Alonso'] deletou o index [1]

