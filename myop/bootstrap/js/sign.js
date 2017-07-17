$(function(){
   		$(function(){
   			$(".zc-ipt").focusin(function(){
   				$(".zc-ipt").data("holder", $(this).attr("placeholder"));
   				$(this).attr("placeholder", "");
   			}).focusout(function(){
   				$(this).attr("placeholder", $(".zc-ipt").data("holder"));
   			});
   			$(".zc-iptbox").each(function(){
   				$(this).append("<span class='glyphicon glyphicon-ban-circle customempty'></span>");
   			})

	   		$("#uname").blur(function(){
	   			$($(this).parent()).find(".glyphicon").remove();
	   			if($(this).val() == ""){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ban-circle customempty'></span>");
	   			}else if($(this).val().length<6){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-remove-circle customfalse'></span>");
	   			}
	   			else{
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ok-circle customtrue'></span>");
	   			}
	   		}).keyup(function(){
	   			$(this).triggerHandler("blur");
	   		}).focus(function(){
	   			$(this).triggerHandler("blur");
	   		});

	   		$("#phone").blur(function(event){
				$($(this).parent()).find(".glyphicon").remove();
	   			$(this).popover('hide');
	   			if($(this).val() == ""){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ban-circle customempty'></span>");
	   			}else if($(this).val().length!=11){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-remove-circle customfalse'></span>");
	   			}else if(isNaN($(this).val())){
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

	   		$("#ycode").blur(function(){ 			
	   			$($(this).parent()).find(".glyphicon").remove();
	   			if($(this).val() == ""){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ban-circle customempty'></span>");
	   			}
	   			else{
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ok-circle customtrue'></span");
	   			}	   			
	   		}).keyup(function(){
	   			$(this).triggerHandler("blur");
	   		}).focus(function(){
	   			$(this).triggerHandler("blur");
	   		});
	   		   			   		   			
	   		$("#password").blur(function(){	   			
	   			$($(this).parent()).find(".glyphicon").remove();
	   			if($(this).val() == ""){
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ban-circle customempty'></span>");
	   			}
	   			else{
	   				$($(this).parent()).append("<span class='glyphicon glyphicon-ok-circle customtrue'></span");
	   			}	   			
	   		}).keyup(function(){
	   			$(this).triggerHandler("blur");
	   		}).focus(function(){
	   			$(this).triggerHandler("blur");
	   		});
		
	   		$("#submit").click(function(event){
	   			/*
	   			$.ajax({type:'POST', url: 'localhost:8080/login/login.php', data:{username: $("#username").val(), password: $("#password").val()}, success:function(response){
	   				$("#resText").html(response);
	   				}
	   			});
	   			*/
	   			var passed = true;
	   			event.preventDefault();
	   			$(".zc-iptbox").each(function(){
	   				if(!$(this).children("span").last().hasClass('customtrue')){
	   					passed = false;
						var $name = $(this).find("input").prop("name");
	   					alert("Please look at the "+$name+" part.");
	   					return false;
	   				}
	   			});
	   			
	   			/* php post method*/
			   	if(passed){		
			   			
			   			var $x = $("#uname").val();
			   			var $z = $("#phone").val();
			   			var $a = $("#ycode").val();
			   			var $y = $("#password").val();
			   			console.log($x + " "+ $a+" "+ $z+" "+$y);
			   			$.post('login.php', $("#form1").serialize(), function(response) {
			   				$("#submit").parent().append("<span class='namen'>Submitted!</span>");
			   				$("#submit").siblings(".namen").delay("slow").fadeOut(200);
			   			});
			   	}
	   		});	
	   });
});