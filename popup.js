
$.ajax
({
        type: "GET",
        url: "https://coronavirus-19-api.herokuapp.com/countries/ph",
        contentType: "application/json;charset=utf-8",
        headers: 
        {
            'Access-Control-Allow-Origin': '*',
        },
        success: function (result, status, xhr) 
        {
            $('#totalCases').text(result.cases);
            $('#totalRecovered').text(result.recovered);
            $('#totalDeaths').text(result.deaths);
            $('#totalNewCases').text(result.todayCases);
            $('#totalActive').text(result.active);
            $('#totalSerious').text(result.critical);
        },

        error: function (xhr, status, error) 
        {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
});

