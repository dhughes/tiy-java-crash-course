$(function(){
	$.get("Crash%20Course.md", function(data){
		$(".m-lessoncontent").html(markdown.toHTML(data));
	});
});