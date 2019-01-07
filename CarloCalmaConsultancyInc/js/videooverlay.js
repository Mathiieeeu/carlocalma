$(document).ready(function(){
    $('#video, #overlay').fadeIn('slow');
    $('#video').html('<img width="800" src="images/carlocalma_logostudies.png"/>');
});

$(document).on("click", function (e){
    if($('#overlay').is(e.target)){
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});
