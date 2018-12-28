$(document).ready(function(){
    $('#video, #overlay').fadeIn('slow');
    $('#video').html('<video width="1000" autoplay controls><source src="video/TEASER.mov" type="video/mp4"><p>Your browser does not support the HTML5 Video element</p></video>');
});

$(document).on("click", function (e){
    if($('#overlay').is(e.target)){
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});