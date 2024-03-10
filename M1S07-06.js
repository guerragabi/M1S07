// [M1S07] Ex 6 - Criando método AtualizarPreco:
// Crie um método chamada de AtualizarPreco dentro da classe Produto.
// Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual.

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

    atualizarPreco(novoPreco){
        this.preco = novoPreco;
        console.log(`Preço do produto ${this.nome} atualizado para ${this.preco} reais.`)
    }
}

let caneta = new Produto ("bic", 2, 40)
console.log(caneta);

caneta.atualizarPreco(3);
