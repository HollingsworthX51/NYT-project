// ny times search javascript


// global variables


// functions





// main process
$(document).ready(function () {

    $("#btn-search").on("click", function () {

        console.log("im in the button search");

        var pageLimit = 5;
        var beginDate = "20170101";
        var endDate = "20171231";
        var query = "trump";

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
            'api-key': "c0b4d2e16a014795bbdce9d7e4df8a95",
            'q': query,
            'page': pageLimit,
            'begin_date': beginDate,
            'end_date': endDate
        });

        console.log("queryURL:  " + queryURL);
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
            var results = result.response.docs;

            var headlineDiv = $("<div>");
            headlineDiv.attr("id", "headline");

            for (var i = 0; i < results.length; i++) {
                var headline = results[i].headline.main;
                var snippet = results[i].snippet;
                var headlineDiv = $("<div>");
                // headlineDiv.attr("id", "headline");
                var p1 = $("<p>");
                p1 = $("<p>").text("Headline: " + headline);
                var p2 = $("<p>");
                p2 = $("<p>").text("Detail: " + snippet);
                headlineDiv.append(p1);
                headlineDiv.append(p2);
                $("#article").prepend(headlineDiv);


            }
        }).fail(function (err) {
            throw err;
        });
    });

});