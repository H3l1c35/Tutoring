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

$(document).ready(function(){
   alert("ary");
$("h1").on("click", function(){
    alert("hi");
   });
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
});

  /**
   $("label").on("click", function(){
    alert("hi");
   });
$(".addB").on("click", function(){
   alert("bob");
  });

  
*/
