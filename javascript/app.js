$(document).ready(function() {
  var topics = [
    "Game of Thrones",
    "Agents of Shield",
    "Brooklyn Nine-Nine",
    "The Office",
    "Parks and Rec",
    "This is Us"
  ];

//   var TVshowBtn = $(this).attr("data-name");

//   var queryURL =
//     "https://api.giphy.com/v1/gifs/search?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ&q=" +
//     TVshowBtn +
//     "&limit=25&offset=0&rating=G&lang=en";

  function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
      a.addClass("tvShow");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#buttons-view").append(a);
    }
  }

  $("#add-TVshow").on("click", function(event) {
    event.preventDefault();
    var tvShows = $("#TVshow-input").val().trim();
    topics.push(tvShows);
    renderButtons();
  });

  renderButtons();


  $(document).on("click", "button", function() {
    // $("#giphyImages").empty();
    // $("button").removeClass("active");
    // $(this).addClass("active");


  // function displayTVInfo () {
    var TVshowBtn = $(this).attr("data-name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ&q=" +
      TVshowBtn +
      "&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data;
    

      // if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var animation = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;
        var tvShowImage = $("<img>");
        tvShowImage.attr("src", still);
        tvShowImage.attr("data-still", still);
        tvShowImage.attr("data-animate", animation);
        tvShowImage.attr("data-state", "still");
        tvShowImage.addClass("tvShow");

        gifDiv.append(p);
        gifDiv.append(tvShowImage);

        $("#giphyImages").prepend(gifDiv);
      }

        //}
      
    });
  });

  $(document).on("click", ".tvShow", function() {
   
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });


  $("#add-TVshow").on("click", function(event) {
    event.preventDefault();
    var addedTVshows = $("#TVshow-input").val().trim();
    topics.push(addedTVshows);
  })


});
