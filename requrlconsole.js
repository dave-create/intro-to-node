var http = require('http');
var fs=require('fs');
var url=require('url');
 

http.createServer(function (req, res){

    var q=url.parse(req.url,true);
    console.log(q.pathname);

    fs.readFile('htmlfile.html', function(err, data){

res.writeHead(200, {'content-type' : 'text/html'});

console.log('requeisting..</br>'+ req.url);

res.write(data);
res.end();
})
}).listen(8080);    