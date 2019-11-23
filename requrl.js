var http = require('http');
var url=require('url');


http.createServer(function (req, res){
res.writeHead(200, {'content-type' : 'text/html'});
var q=  url.parse(req.url, true).query;
var dates =q.year;

res.write(dates);
res.end();
}).listen(8080);    
