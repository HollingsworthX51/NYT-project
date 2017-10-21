// ny times search javascript


// global variables


// functions



var obj;

// main process
$(document).ready(function() {
    $("#btn-search").on("click", function(event) {
        // stop the form from submitting
        event.preventDefault();

        var pageLimit = 5;
        var beginDate = "20170101";
        var endDate = "20171231";
        var query = $('#searchInput').val();

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
            'api-key': "c0b4d2e16a014795bbdce9d7e4df8a95",
            'q': query,
            'page': pageLimit,
            // 'begin_date': beginDate,
            // 'end_date': beginDate
        });

        $.ajax({
            url: queryURL,
            method: 'GET',
        }).done(function(response) {
            // console.log(response);

            var results = response.response.docs;
            // ========================
            if (results.length) {

                for (var i = 0; i < results.length; i++) {


                    var headlineDiv = $('<div class="card nyt-card">');
                    headlineDiv.attr("id", "headline");



                    var headline = results[i].headline.main;
                    var snippet = results[i].snippet;


                    var p1 = $('<p class="results-healine">Headline: ' + headline + '</p>');
                    var p2 = $("<p>");
                    p2 = $("<p>").text("Detail: " + snippet);

                    var bodyDiv = $('<div class="card-body">');
                    headlineDiv.append(p1);
                    bodyDiv.append(p2);
                    headlineDiv.append(bodyDiv);


                    $("#articles").prepend(headlineDiv);


                }
            }
        }).fail(function(err) {
            throw err;
        });
    });
});
