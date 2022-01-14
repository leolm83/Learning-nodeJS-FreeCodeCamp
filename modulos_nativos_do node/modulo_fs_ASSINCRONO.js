const {readFile,writeFile} = require('fs');

readFile('./subfolder/meu_primeiro_texto.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return;
    }
    const first = result
    readFile('./subfolder/meu_segundo_texto.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./subfolder/resultado_assincrono.txt',`${first}\n ${second}`,(err,result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)//nesse caso vai ser undefined!!
        })
    })
    
})
