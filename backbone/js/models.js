   // Create model
    var Movie = Backbone.Model.extend({
        defaults: {
            Title: 'no-title',
            Poster: "img/noposter.jpg",
        }

    });

    
    // Create collection of movie models
    var movieCollection = Backbone.Collection.extend({
        model: Movie
    });

    var allMovies = new movieCollection();
