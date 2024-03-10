// [M1S07] Ex 5 - Criando método MostrarEstoque: 
// Crie um método chamado de MostrarEstoque() dentro da classe Produto.
// Este método deve exibir uma mensagem parecida com a seguinte:
// “O produto CANETA BIC AZUL possui 5 unidades disponíveis”

class Produto {
    nome 
    preco
    quantidade

    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco 
        this.quantidade = quantidade
    }

    vender(quantidadeVendida){
        if(quantidadeVendida > this.quantidade){
            console.log("Estoque insuficiente.");
            return;
        } 

        this.quantidade = this.quantidade - quantidadeVendida;
        console.log(`Após a venda: o produto ${this.nome} possui ${this.quantidade} unidades em estoque.`)
            
    }

    repor(quantidadeReposta){
        this.quantidade = this.quantidade + quantidadeReposta;
        console.log(`Após a repoisção: o produto ${this.nome} possui ${this.quantidade} unidades em estoque.`)
    }

    mostrarEstoque(){
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades em estoque.`)
    }
}

let caneta = new Produto ("bic", 2, 40)
console.log(caneta);

caneta.mostrarEstoque();
