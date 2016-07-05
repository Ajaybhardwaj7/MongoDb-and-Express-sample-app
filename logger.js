var winston = require('winston');
var fs  = require('fs');

function checkDirectory(path){
	try{
		fs.statSync(path);
	}catch(e){
		fs.mkdirSync(path);
	}
}

checkDirectory('./logs');	


var logger = new (winston.Logger)({

	transports : [
		new (winston.transports.Console)({
			
			colorize : true,
			
		}),
		new (winston.transports.File)({
			
			colorize : true,
			filename : './logs/logs.log',
			json : false
		})
	],
	 exceptionHandlers : [
          new (winston.transports.File) ({
           
            filename : './logs/logs.log',
            json : false
          })
  	],
  	exitOnError : false
});

module.exports = logger;