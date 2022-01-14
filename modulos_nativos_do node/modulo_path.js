const path = require('path')

//obtem o separador da plataforma, no caso do linux é o /
console.log(path.sep)

//cria um caminho para o arquivo, independente de SO
const filePath = path.join('/content','subfolder','meuArquivo.txt');
console.log(filePath) 

//obtem o nome base(de um arquivo ou pasta) através de um caminho
const baseName = path.basename(filePath)
//exemplos caso o file path seja /content/subfolder
//ele exibe : subfolder 
//caso o file path seja /content/subfolder/meuArquivo.txt
//ele exibe : meuArquivo.txt
console.log(baseName)

//__dirname faz parte do pacote base do node e contém o caminho absoluto até o arquivo atual!!!
console.log(__dirname)
//caminho absoluto para o arquivo
const absolute = path.resolve(__dirname,'content','subfolder','meuArquivo.txt');
console.log(absolute)
