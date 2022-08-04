// Estrutura de um array
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hammilton']

// a indexação ( index ) começa pelo número 0
console.log(pilotos[2]) // => Schumacher

//acessar o tamanho do array
console.log(pilotos.length) // => 4 positions

// iterando os valores
for(let pilot of pilotos) {
    console.log(pilot) // => Senna, Prost, Schumacher, Hammilton
}

// iterando as propriedades
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

pilotos.pop() // => tira a última posição do array
console.log(`tirei da lista os pilotos ${pilotos}`)

// STACK NO CÓDIGO
// Passo 1: modelando
class Stack {
  constructor() {
    this.data = []
    this.top = -1
  }
  push(value) {
    this.top++
    this.data[this.top] = value

    return this.data
  }
  pop() {
    if (this.top < 0) return undefined

    const poppedTop = this.data[this.top]
    delete this.data[this.top]

    this.top--
    return poppedTop
  }
  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined 
  }
}

// Passo 2: Utilizando
const stack = new Stack()

// Passo 3: adicionar dados
stack.push('Learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

// --- remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())
