$(".gofilter").click(function (e) {
    e.preventDefault();

    var dyaofweek = $("#dayow").val();
    var starttime = $("#stime").val();

    $.ajax({
        url: "https://data.sfgov.org/resource/jjew-r69b.json?dayofweekstr=" + dyaofweek + "&start24=" + starttime,
        type: "GET",
        data: {
            
            "$$app_token": "W0LnJ7YYQZZ4hGhn8G5bEI1xZ"
        }
    }).done(function (data) {
        console.log(data);
        //alert("Retrieved " + data.length + " records from the dataset!");
        var htmldata = "";

        for (var i = 0; i < data.length; i++) {
            htmldata += `
                <tr>                
                    <td>${data[i].applicant}</td>
                    <td>${data[i].location}</td>                
                </tr>
            `
        }

        $(".bodytable").empty();
        $(".bodytable").append(htmldata);
        
    })

});