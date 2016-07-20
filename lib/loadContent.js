$(function(){
	$.get("Crash%20Course.md", function(data){
		$(".m-lessoncontent").html(marked(data));
	});
});