const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nomes = [];

function leianome(count){
  if (count--) {
    rl.question("Digite um nome:\n", (line) => {
      nomes.push(line);
      leianome(count);
    });
  } else {
    gravaarquivo();
    rl.close();
  }
}

function gravaarquivo(){
  for (var i in nomes)
    fs.appendFile("nomes.txt", nomes[i]+"\n");

  console['log']('Arquivo nomes.txt salvo');
}

leianome(3);
