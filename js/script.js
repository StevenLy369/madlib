$(document).ready(function(){
   var sentences=["one"];
   


    $("#formOne").submit(function (event){
        event.preventDefault();
        sentences.forEach(function (sentence){
           sentences.push(($("input#" + sentence).val()))
       })


        
        console.log(sentences);

    })












});