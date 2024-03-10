// [M1S07] Ex 3 - Criando método Vender: 
// Crie um método para a classe Produto chamado de Vender().
// Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do produto. 
// Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade disponível.
// Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.

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
}

let caneta = new Produto ("bic", 2, 40)
console.log(caneta);

caneta.vender(30);
