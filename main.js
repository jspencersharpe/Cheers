$(document).ready(function() {   


  
$("#NameForm").submit(function(event){
	  event.preventDefault();
    function splitName ($nameBox) {
     }

     var $nameBox = $("#text_field").val();
     var preamble = "Your " + "name " + "is " + $nameBox;
     var GiveMe = "Give " + "Me " + "...";
     var $caps = $nameBox.toUpperCase;
     function toArray($caps) {
       return $caps.split("");
     }
     
    
     $("#cheers").append(preamble); 
     $("#cheers").after(GiveMe); 
     $("#cheers").after($caps[0]);
  });
});




