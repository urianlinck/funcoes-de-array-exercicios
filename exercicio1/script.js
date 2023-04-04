const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
} 

//1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.

const caixaAlta = (objeto) => {
    for(let i in objeto) {
        objeto[i] = objeto[i].toUpperCase()
    }
    return objeto
}
console.log(caixaAlta(infosPessoa))


//2. A segunda deve retornar os valores do objeto como texto corrido.

const textoCorrido = (objeto) => {
    let texto = ""
    for (let i in objeto) {
        texto += `O valor da propriedade ${i} é ${objeto[i]}. `
    }
    return texto
}

console.log(textoCorrido(infosPessoa))

//3. Agora, crie uma funcão que recebe um objeto e uma callback como parâmetros. A funcão principal deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

//    Chame a funcão 3, passando como argumentos o **objeto disponibilizado** no arquivo `script.js`, e a função 1.
//    Repita o processo para a funcão 2.

const recebeCallback = (objeto, funcao) =>{
    console.log("entrou na recebe callback")
    const novoValor = funcao(objeto)
    console.log(novoValor)
}

recebeCallback(infosPessoa, textoCorrido)
recebeCallback(infosPessoa, caixaAlta)