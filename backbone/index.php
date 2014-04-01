<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Backbone.js Sagar</title>
    <meta name="description" content="Learning Backbone.js - Sagar Sood">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>

<script id="left-panel-template" type="text/template">

    <div class='left-panel'> 
        <img class='logo' src='img/logo.png' width='150'>
        <input type='text' id='movie-input-field' placeholder='Enter a movie title..'> <br> 
        <button id='add' class='btn btn-block btn-lg btn-success'><i class='glyphicon glyphicon-plus'></i> Add Movie</button> 

    <div class='right-panel'><table class='list'></table></div>

</script>


    
<script id="list-template" type="text/template">
    
    <td>
        <img src='<%= Poster %>' height="200">
    </td>
    <td style='padding: 5px 5px 5px 15px; position: relative;'>
    <span class='remove-button'><i class='glyphicon glyphicon-remove' id='removethis'></i></span>
        <h3><%= Title %></h3>
        <span class='meta-label'>Year: </span>            <%= Year %> <br>
        <span class='meta-label'>Released: </span>        <%= Released %> <br>
        <span class='meta-label'>Genre: </span>           <%= Genre %> <br>
        <span class='meta-label'>Plot: </span>            <%= Plot %> <br>
    </td>

</script>

<div class="main">
    <div class="well" style="width: 75%; margin:auto;">

        <div class="movie-input"></div>

    </div>
</div>

<!-- ALL JS UNDER HERE -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js"></script>
<script src="bootstrap/js/bootstrap.js"></script>
<script src="js/models.js"></script>
<script src="js/views.js"></script>

</body>
</html>
