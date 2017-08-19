let fs = require('fs');
let http = require('http');

//createServer method creates event emitter
let server = http.createServer();
server.on('request', (req, res) => {

    //-------------------------------------------
    let url = req.url;
    let myReadStream;

    switch(url){
    case "/":
    case "/index.html":
        res.writeHead(200, {'Content-Type' : 'text/html'});
        myReadStream = fs.createReadStream('./public/index.html', 'utf-8');
        readAndWriteFile();
        break;
    case "/contact.html":
        res.writeHead(200, {'Content-Type' : 'text/html'});
        myReadStream = fs.createReadStream('./public/contact.html', 'utf-8');
        readAndWriteFile();
        break;
    case "/css/main.css":
        res.writeHead(200, {'Content-Type' : 'text/css'});
        myReadStream = fs.createReadStream('./public/css/main.css', 'utf-8');
        readAndWriteFile();
        break;
    case "/js/main.js":
        res.writeHead(200, {'Content-Type' : 'application/javascript'});
        myReadStream = fs.createReadStream('./public/js/main.js', 'utf-8');
        readAndWriteFile();
        break;
    }
    //-------------------------------------------
    function readAndWriteFile(){
        myReadStream.on('data', (chunk) => {
            res.write(chunk);
        });
        myReadStream.on('end', () => {
            res.end();
        });
    };
});

server.listen(8080, '104.236.163.179');
console.log('server now listening on 104.236.163.179 port 8080');




