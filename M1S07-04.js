// [M1S07] Ex 4 - Criando método Repor: 
// Crie um método chamado Repor() dentro da classe Produto.
// Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à quantidade do produto.

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
}

let caneta = new Produto ("bic", 2, 40)
console.log(caneta);

caneta.vender(30);
caneta.repor(150);
