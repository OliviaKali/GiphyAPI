var topics = ["Game of Thrones", "Agents of Shield", "Brooklyn Nine-Nine", "The Office", "Parks and Rec", "This is Us"];

function renderButtons() {
    
    $("#buttons-view").empty();

    for (var i = 0; i <topics.length; i++) {
        var a = $("<button>");
        a.addClass("TVshow");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-TVshow").on("click", function(event) {
    event.preventDefault();
    var TVshows = $("#TVshow-input").val().trim();
    topics.push(TVshows);
    renderButtons();
});

renderButtons();


//log-movie-name-solved
//button-triggered-ajax-solution
//pausing-gifs solution

$("button").on("click", function () {
    var show= $(this).attr("data-show");
})

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ&q=" + topics + "&limit=25&offset=0&rating=G&lang=en"

//"https://api.giphy.com/v1/gifs/trending?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ";

// var APIkey = 2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
})