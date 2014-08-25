var http = require('http');
var fs = require('fs');
var path = require('path');
var dns = require('dns');
var porta = 8125;

http.createServer(function (request, response) {
   
    if(request.url === "/") {
    	var filePath = 'menu4tourist/index.html'; 	
    } else {
    	var filePath = 'menu4tourist/' + request.url; 	
    }

	if (path.extname(filePath) === '.html') {
    	console.log(filePath);
    }
    
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}

	fs.exists(filePath, function(exists) {

		 response.setHeader("Accept-Ranges" , 'bytes');
		 response.setHeader('Content-Range', 'bytes 0');

		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});

}).listen(porta);

var ifaces=require('os').networkInterfaces();
for (var dev in ifaces) {
  var alias=0;
  ifaces[dev].forEach(function(details){
    if (details.family=='IPv4') {
      console.log('Endereço servidor: http://' + details.address + ':' + porta);
      ++alias;
    }
  });
}
