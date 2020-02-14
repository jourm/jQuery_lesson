$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
    $("p").on("click", function(){
        $("p").addClass("red-text");
    });
    $("h2").mouseenter(function(){
        $("h2").addClass("blue-background");
    });
     $("h2").mouseleave(function(){
        $("h2").removeClass("blue-background");
    });
    $("#button_effects1").click(function(){
      /*   $("#button_effects1").hide(1000); */
        $("#van").toggle();
    });
    $("#button_effects1").mouseenter(function(){
        $("#button_effect1").fadeTo(1000, 0.5);
    });
     $("#button_effects1").mouseleave(function(){
        $("#button_effect1").fadeTo(100, 1);
    });
    $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
}); 

