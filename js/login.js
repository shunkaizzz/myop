$(function(){
	   		$("#email2").blur(function(event){
				$value = $(this).val();
				$(this).popover('hide');
				$($(this).parent()).find(".glyphicon").remove();
	   			$(this).popover('hide');
	   			if($(this).val() == ""){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ban-circle customempty'></span>");
	   			}else if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test($value ))){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-remove-circle customfalse'></span>");
	   			}else{
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ok-circle customtrue'></span>");
	   				$(this).popover('hide');
	   			}	   			
	   		}).keyup(function(){
	   			$(this).triggerHandler("blur");
	   		}).focus(function(){
	   			$(this).popover('show');
	   		});	
	   		$("#password2").blur(function(){	   			
	   			$($(this).parent()).find(".glyphicon").remove();
	   			$(this).popover('hide');
	   			if($(this).val() == ""){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ban-circle customempty'></span>");
	   			}
	   			else{
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ok-circle customtrue'></span");
	   			}	   			
	   		}).keyup(function(){
	   			$(this).triggerHandler("blur");
	   		}).focus(function(){
	   			$(this).popover('show');
	   		});

	$("#submit2").click(function(){
		event.preventDefault();
	   	var passed = true;
	   	event.preventDefault();	   			
	   		/* php post method*/
		if(passed){		
			$.post('../myop/php/user-verify.php', $("#form2").serialize(), function(response) {
			   	console.log(response);
			   	if($.trim(response)){
			   		$("#myModa2").modal('hide');
			   		$("#signUp").hide();
			   		$("#signIn").hide();
			   		$("#wel").show();
			   		$(".navbar-right").find(".dropdown").show();
			   		$(".user-sm").html(response);
			   		
			   	}		
			});
			}
	   	});	
});