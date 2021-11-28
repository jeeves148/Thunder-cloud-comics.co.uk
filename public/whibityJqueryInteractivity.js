//this makes sure the page is loaded before any jQuery starts
$(document).ready(function(){  

    var hiWorld = "<h1> Hellow World </h1>"

    $("h1").click(function(){
        $("h1").append(hiWorld);
        

    });
});