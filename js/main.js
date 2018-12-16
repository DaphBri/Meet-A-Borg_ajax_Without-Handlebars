//DEMO DE $.getJSON() SANS HANDLEBARS

$.getJSON("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")

.done(function(data){
    data.forEach(function(robot){
        $("<div class='box' data-gender='" + robot.gender + "'><p>" + robot.first_name + "<strong> " + robot.last_name + "</strong></p><div class='card " + robot.gender + "'> <div class='type'><strong>Type: </strong>" + robot.type + "</div><img src='" + robot.portrait + "' alt='portrait'></img><div class='language'><strong>Langue parlée: </strong>" + robot.language + "</div></div><div class='description'>" + robot.description + "</div></div>").appendTo('#container');
    });

    //50 hommes et 50 femmes dans le text du millieu
    let hommes = $('[data-gender="Male"]').length;
    let femmes = $('[data-gender="Female"]').length;
    $(".male").prepend(hommes + " ");
    $(".female").prepend(femmes + " ");

})
.fail(function(){
    alert("Loading ...")
})


//bouton de selection
$(".middle-block__buttons .but").click(function(){
    let genre = $(this).data("filter");
    $('.box').hide();
    $('[data-gender='+genre+']').show();
    if (genre == "All") {
     $('.box').show();
    }


})


//50 hommes et 50 femmes dans le text du millieu (ne marche plus ici)

// let hommes = $('[data-gender="Male"]').length;
// let femmes = $('[data-gender="Female"]').length;

// $(".male").prepend(hommes + " ")
// $(".female").prepend(femmes + " ")


