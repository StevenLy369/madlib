$(document).ready(function(){
   


    $("#formOne").submit(function (event){
        event.preventDefault();

        var sentences = $("input#sentence").val();

        // console.log(sentences);

        var newSentence = sentences.split(' ');
        var newWords = [];
        
        newSentence.forEach(function (newSentence){
            if (newSentence.length >= 3 ){
                newWords.push(newSentence);
            }
        })

        var newNewSentence=[];
        var newNewSentence = newSentence.concat(newWords);

        



        console.log(newWords);
        console.log(newNewSentence);

    })


});