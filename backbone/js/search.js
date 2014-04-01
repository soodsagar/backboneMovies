
function searchMovie(title){
    $.ajax({
        url: "http://www.omdbapi.com/?t=" + title,
        type: "post",
        dataType: "json",
        success: function(returnedData){
            return JSON.stringify(returnedData);
        },
        error: function(){
            return "fail";
        }
    });
}


function backSearch(title){
    Backbone.ajax({
        dataType: "text",
        url: "http://www.omdbapi.com/?t=" + title,
        data: "",
        success: function(returnJSON){
            return JSON.stringify(returnJSON.Title);
        }
    });
}