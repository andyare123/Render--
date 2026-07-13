var http = require("http");
http.createServer(function(request,response){
    if(request.url == '/') {
        response.writeHead(200,{"Content-Type":"text/plain"})
        response.write("<h1>Hello</h1>")
        response.end()
    } else {
        response.writeHead(200,{"Content-Type":"text/plain"})
        response.write("<h1>404</h1>")
        response.end()
    }
 
}).listen(8080);