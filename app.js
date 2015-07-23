var prompt = require('prompt');

prompt.start();

prompt.get('name', function(err, result){
  cheer(result);
})

function cheer(result) {
   var name = result.name.toUpperCase();
   var split = name.split('');

   for (var i = 0; i < split.length; i++) {
     var an = "AEFHILMNORSX";
     var a = "BCDGJKPQTUVWYZ";

     if (an.indexOf(split[i]) > -1) {
      console.log("Give me an " + split[i]);
     } else if(a.indexOf(split[i]) > -1) {
      console.log("Give me a " + split[i]);
     }
   }
}


