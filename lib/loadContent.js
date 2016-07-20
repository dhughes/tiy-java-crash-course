$(function(){
	$.get("Crash%20Course.md", function(data){
		$("#content").html(markdown.toHTML(data, 'Maruku'));
	});
});