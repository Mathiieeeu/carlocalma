$(document).ready(function(){
    $('#video, #overlay').fadeIn('slow');
    $('#video').html('<div class="col-md-8"><img class="img-fluid" src="images/carlocalma_logostudies.png"></div>');
});

$(document).on("click", function (e){
    if($('#overlay').is(e.target)){
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});
