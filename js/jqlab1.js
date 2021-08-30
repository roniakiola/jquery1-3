/*window.onload = function() {
    if (window.jQuery) {   
        alert("Toimii");
    } else {
        alert("EI TOIMI");
    }
}*/

//Adding id attribute #jotain to second <p>
$('p:eq(1)').attr('id', 'jotain');
//Removes first <p>
$('p:eq(0)').remove();
//Changes background and text colour of first <div>
$('#fdiv').css({"background-color": "grey", "color": "white"});

//Creates on click event for button #nappi (adds new paragraph after #jotain)
$('#nappi').click(function(){
    $('#jotain').after('<p id="tp">Hello user</p>');
});

$('#4p').hide();

//On/Off hover event to show and hide paragraph
$('#sdiv').hover(function(){
    //changes text content for #4p
    $('#4p').text('About to select a link');
    $('#4p').show();
}, function(){          //Mouse out
    $('#4p').hide();
});