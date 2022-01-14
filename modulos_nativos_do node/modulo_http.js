const http = require('http');
const server = http.createServer((req, res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('Bem vindo a pagina');
    }
    //res.write("Bem vindo a nossa pagina")
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else{
    res.end(`
    <h1>Oops!</>
    <p>Nao encontramos a sua pagina <a href="/">Voltar para Home</a></p>
    `)
    }
})
server.listen(5000);