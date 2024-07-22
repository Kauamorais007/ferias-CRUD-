const prompt = require('prompt-sync')();
const f = require("./functions.js")
let opcao = '';

let dia = '';

f.perguntaOperacao();
process.stdin.on("data", function (data) {
    let input = data.toString().trim();
  
    if (!opcao) {
      opcao = Number(input);
  
      switch (opcao) {
        case 1:
        f.inserir;
        break;
      case 2:
        
        opcao = 0;
        break;
    }
}
    
})
