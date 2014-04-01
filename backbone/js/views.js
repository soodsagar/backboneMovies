$(function(){

 
    // List of movies view, rendered in MovieInput 
    var MovieList = Backbone.View.extend({
        tagName: 'tr',

        className: 'each-movie',

        events: {
            'click #removethis': 'remove'
        },

        initialize: function(){
            _.bindAll(this, 'render', 'remove');


        },

        render: function(){
            var templ = _.template($('#list-template').html(), this.model.toJSON());
            $(this.el).html(templ).fadeIn();
            return this;
        },

        remove: function(){
            $(this.el).remove();
            this.model.destroy();
            console.log(this.model.get('Title') + " REMOVED \nTOTAL: " + allMovies.length + "\n");

        }

    });


    
    var MainApp = Backbone.View.extend({
        el: $('div.movie-input'),

        events: {
            'click button#add': 'addMovie',
        },

        initialize: function(){
            _.bindAll(this, 'render', 'addMovie', 'remove');
            this.render();
        },

        render: function(){
            var mainTempl = _.template($("#left-panel-template").html());
            $(this.el).html(mainTempl);

        },

        addMovie: function(){
            var movieInput = this.$("#movie-input-field");
            
            Backbone.ajax({
                dataType: "json",
                url: "http://www.omdbapi.com/?t=" + movieInput.val(),
                data: "",
                success: function(returnJSON){

                    if (returnJSON.Response == "True"){
                        var newMovieView = new Movie(returnJSON);
                        if (returnJSON.Poster == "N/A"){
                            newMovieView.set({"Poster" : "img/noposter.jpg"});
                        }
                        var movieListView = new MovieList({model: newMovieView});
                        $('table.list').append(movieListView.render().el);
                        movieInput.val("");

                        // add movies to inventory (collection) and log
                        allMovies.add(newMovieView);
                        console.log(movieListView.model.get('Title') + " ADDED \nTOTAL: " + allMovies.length + "\n");
                    }
                    else{
                        alert("Movie not found! Please enter exact movie title");
                    }

                },

                error: function(){
                    alert("Error!");
                }
            });
            
        },

    });


    new MainApp();
  

});














