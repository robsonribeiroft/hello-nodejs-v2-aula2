const fs = require('fs');
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var paises = [];
let nomeArquivo;

function getNomeArquivo(){
  rl.question("Escolha o nome do arquivo:\n", (line)=>{
    nomeArquivo = line;
    getPaises(3);
  });
}

function getPaises(count){
  if (count--) {
    rl.question("Entrer com o nome do país:\n", (line)=>{
      paises.push(line);
      getPaises(count);
    });
  } else
    gravaArquivo();
}

function gravaArquivo(){
  for (var i in paises)
    fs.appendFile(nomeArquivo+".txt", paises[i]+"\n");

  rl.close();
  console['log'](`Arquivo ${nomeArquivo} salvo!`);
}

getNomeArquivo();
