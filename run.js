var less = require('./modules/less');
var file = require('fs');
var _ = require('./modules/underscore');

var css = "";
var contentList = [];
file.readdir('./less', function(err, files){
	_(files).each(function(filename){
		contentList.push(file.readFileSync('./less/' + filename, 'utf8'));
	});	
	
	less.render(contentList.join('\n'), function(e, content){
		file.writeFile("css/out.css", content);
	});
});
