const produto = {
    nome: "caneta",
    qtd: 10,
    comprar: function (n) {
        console.log(this)
        if (n > this.qtd) {
            return "quantidade nao disponivel"
        }
        this.qtd -= n
    },
    teste1: function () {
        console.log("teste1")
        console.log(this)
    },
    teste2: () => {
        console.log("teste2")
        console.log(this)
    }
}
produto.comprar(3)
console.log('\nprimeiro produto: ', produto)

console.log('------------------')

produto.comprar(13)
console.log('segundo produto: ', produto, '\n')

produto.teste1()
console.log('------------------')
produto.teste2()