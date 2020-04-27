// $(".add").on("click", function() {
//     var val = $("input").val();
//     if(val !== '') {
//         var elem = $("<li></li>").text(val);
//         $(elem).append("<button class='rem'>X</button>");
//         $("#mylist").append(elem);
//         $("input").val("");
//         $(".rem").on("click", function() {
//             $(this).parent().remove();
//         });
//     }
// });
   $(".add").on("click", function() {
        var val = $(this).parent().children( "input").val();
        if(val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='rem'>X</button>");
            $(this).parent().children( "#mylist").append(elem);
            $("input").val("");
            $(".rem").on("click", function() {
                $(this).parent().remove();
            });
        }
    });
