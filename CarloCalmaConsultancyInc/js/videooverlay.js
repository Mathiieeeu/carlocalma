sessionStorage.setItem('firstVisit', '0');

if(sessionStorage.getItem('firstVisit') === '0')
{ 
    $('#video, #overlay').fadeIn('slow');
    $('#video').html('<div class="col-md-6"><img class="img-fluid" src="images/carlocalma_logostudies.png"></div>');
    $(document).on("click", function (e){
        if($('#overlay').is(e.target))
        {
            $('#video, #overlay').fadeOut('slow');
            $('#video').html('');
            sessionStorage.setItem('firstVisit', '1');
        }
    });
}
else
{
}
