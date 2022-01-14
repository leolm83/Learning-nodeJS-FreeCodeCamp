const {readFileSync,writeFileSync} = require('fs');
/* funciona da mesma forma :
const fileSystem = require('fs');
    fileSystem.readFileSync();
    fileSystem.writeFileSync();
*/

const soTired =readFileSync('./subfolder/meu_primeiro_texto.txt','utf8');//o enconding padrao é utf 8
const whenYoureHigh = readFileSync('./subfolder/meu_segundo_texto.txt','utf8');//o enconding padrao é utf 8

//console.log(`\n ${soTired} \n\n ${whenYoureHigh} \n`)

//se o arquivo contiver alguma coisa, ele simplesmente sobrescreve!!!
// mas existe uma opcao chamada flag que altera o comportamento!!!
writeFileSync('./subfolder/novo_arquivo.txt',`\n ${soTired} \n\n ${whenYoureHigh} \n`,)
//com a tag de adicionar ao final (append)
writeFileSync('./subfolder/novo_arquivo.txt',`\n You're as smooth as Tennessee whiskey`,{flag:'a'})

const arquivoComAsMusicas = readFileSync('./subfolder/novo_arquivo.txt','utf8');
console.log(`Arquivo Final : ${arquivoComAsMusicas}`)