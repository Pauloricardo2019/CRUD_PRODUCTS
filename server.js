const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    if(req.url === '/produto'){
        res.end(JSON.stringify({
            message: "Rota de produto"
        }));
    }

    if(req.url === '/usuario'){
        res.end(JSON.stringify({
            message: "Rota de usuario"
        }));
    }
    res.end(JSON.stringify({
        message: "Qualque outra rota"
    }));
    
});



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('server is running'))