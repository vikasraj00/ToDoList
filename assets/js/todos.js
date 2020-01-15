// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    // Toggle the color and line through effect on a given todo
    $(this).toggleClass("completed");
});

// Click on "Trash Icon" to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(350, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        // Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new "li" and add to the ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
    }
});

$("#toggle-form").click(function(){
    //Toggle the input text on and off
	$("input[type='text']").fadeToggle();
});