$(function(){
	$button = $(".caption").find("a");
	$button.click(function(){
		$candidate = $(this).parents(".caption").find("h3").text(); 
		$user = $(".user-sm").text(); 
		$.post('../myop/php/voting.php', {name: $candidate, user: $user}, function(data){
			alert(data); 
		});
	});
});