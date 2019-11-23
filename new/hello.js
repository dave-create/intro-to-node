var http = require('http');
var fs=require('fs');
var url=require('url');
 

http.createServer(function (req, res){

    var q=url.parse(req.url,true);
    var filename = "."+ q.pathname;
    if (filename=="./"){
filename='./index';   }
console.log(filename);

filename= filename+".html";


    fs.readFile(filename, function(err, data){
if (err){
    res.writeHead(200, {'content-type' : 'text/html'});
return res.end("404 not found");

}    
res.writeHead(200, {'content-type' : 'text/html'});
res.write(data);
return res.end();
});


}).listen(8080);    

console.log("Server listening on port 8080...");
