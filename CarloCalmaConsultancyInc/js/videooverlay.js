$(document).ready(function(){
    $('#video, #overlay').fadeIn('slow');
    $('#video').html('<iframe width="971" height="546" src="https://www.youtube.com/embed/AJjMQGoS84M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

$(document).on("click", function (e){
    if($('#overlay').is(e.target)){
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});
