var http = require('http');
2.
http.createServer(function(req, res){
3.
res.writeHead(200, {'content-type': 'text/plain'})
4.
res.end('Version - ' + process.version);
5.
}).listen(process.env.port || 1337)
