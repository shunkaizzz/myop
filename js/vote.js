$(function(){
	$button = $(".caption").find("a");
	//$button.attr('prop', 'Statistics');
	$button.click(function(){
		$candidate = $(this).parents(".caption").find("h3").text(); 
		$user = $(".user-sm").text(); 
		$(this).text("Statistics");
		$.post('../myop/php/voting.php', {name: $candidate, user: $user}, function(data){
			alert(data); 
		});
	});
});