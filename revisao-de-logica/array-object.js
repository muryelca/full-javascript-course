const nomes = ["Muryel", "Maria", ""]
const pessoa = { nome: "Muryel", idade: 27, email: "" }
const pessoa1 = {}

console.log(`Nomes: ${nomes} -- com o tipo: ${typeof nomes}`)
console.log(`Pessoa.nome: ${pessoa.nome} -- com o tipo: ${typeof pessoa.nome}`)
console.log(`Pessoa.idade: ${pessoa.idade} -- com o tipo: ${typeof pessoa.idade}`)
console.log(`Pessoa.email: ${pessoa.email} -- com o tipo: ${typeof pessoa.email}`)
console.log(`Pessoa1: ${pessoa1} -- com o tipo: ${typeof pessoa1}`)
console.log('\n---------------------------------\n')

const pessoas = [{
    nome: "João",
    idade: 40
}, {
    nome: "Maria",
    idade: 28
}, {
    nome: "Eduarda",
    idade: 45
}, {
    nome: "Ricardo",
    idade: 18
}]

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}