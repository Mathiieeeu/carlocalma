$(document).ready(function(){
    $('#video, #overlay').fadeIn('slow');
    $('#video').html('<img class="img-fluid" width="1000" src="images/carlocalma_logostudies.png"/>');
});

$(document).on("click", function (e){
    if($('#overlay').is(e.target)){
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});
