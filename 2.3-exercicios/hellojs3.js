const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um numero\n', (num) => {
  isNaN(num) ? console['log'](`${num} não é um numero valido`):console['log'](`Você digitou o numero ${num}`);
  rl.close();
});
