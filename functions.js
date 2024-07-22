const prompt = require("prompt-sync")();
const atividades=[];
function perguntaOperacao(){
    console.log(`Qual operação deseja fazer?
    [1] Inserir 
    [2] Remover
    [3] Alterar
    [4] Listar`)
}
function criarAtualizar(){
    let atividade = {
        dia: undefined,
        descricao: []
    }
atividade.dia = prompt("Qual dia?")

let resposta
while(true){
    resposta = prompt ('O que fex este dia?')

    if(resposta == "acabou")
        break
    atividade.descricao.push(resposta)
    console.log('Atividade criada')
    return atividade
}
}


function criar(){
    let atividade = criarAtualizar();
atividade.dia = prompt("Qual dia?")

let resposta
while(true){
    resposta = prompt ('O que fex este dia?')

    if(resposta == "acabou")
        break
    atividade.descricao.push(resposta)
    console.log('Atividade criada')
    
}
}

function listar(){
    atividades.forEach(function(atividade, indice) {
        console.log(`${indice + 1}. ${atividade}`)
    })
}

function atualizar(){
    listar()
    console.log("Qual indice voce deseja atualizar:");
    let atividade = criarAtualizar()
    atividade[--indice] = atividade

}





module.exports = {
    perguntaOperacao,
  }