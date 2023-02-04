import readlineSync from 'readline-Sync';
import chalk from 'chalk';

// Dados de entrada
const propriedade = []; // Vetor global
// esse input não pode ser uma constante.
let input = '';

console.log('Digite as propriedades CSS ou digite "SAIR" para finalizar.');

// Processamento dos dados
// Se o valor que o usuario digitar for diferente de 'sair', irá continuar pedindo pro usuario digitar propriedade no input. Quando o usuario digitar 'sair', o looping então é encerrado e apresenta a saida de dados com as propriedades que o usuário havia digitado
// toLowerCase garante que o 'sair' do usuario seja sempre em letras de caixa baixa, independente se for digitado 'SAIR'
while (input.toLowerCase() !== 'sair') {
  input = readlineSync.question('Digite a propriedade: ');
  if (input.toLowerCase() !== 'sair') {
    // Toda propriedade que o usuário digitar no input será armazenada dentro do Vetor (propriedade = []) declarado no inicio do código
    propriedade.push(input);
  }
}

// Saida dos dados
console.log('Lista das propriedades que foram digitadas CSS:');
// Chalk para alterar a cor da saida de dados
// Método sort() para exibir em ordem alfabética
console.log(chalk.yellow(propriedade.sort().join('\n')));
