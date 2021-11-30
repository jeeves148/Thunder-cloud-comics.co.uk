//this makes sure the page is loaded before any jQuery starts
$(document).ready(function(){  

    var hiWorld = "<h1> Hellow World </h1>"

    $("h1").click(function(){
        $("h1").append(hiWorld);
    });

    //Dark switch script

    let dark = false;

        $("#dark-switch").click(function(){
            if (dark == false)
            {
                $("body").get(0).style.setProperty("--blank-space", "black");
                $("body").get(0).style.setProperty("--text-color", "white");
                $("body").get(0).style.setProperty("--background-color", "black");
                $("body").get(0).style.setProperty("--topnav-color", "white");
                $("body").get(0).style.setProperty("--foreground-color", "black");
                dark = true;
            }
            else if(dark == true)
            {
                $("body").get(0).style.setProperty("--blank-space", "white");
                $("body").get(0).style.setProperty("--text-color", "black");
                $("body").get(0).style.setProperty("--background-color", "#fffd82");
                $("body").get(0).style.setProperty("--topnav-color", "#333");  
                $("body").get(0).style.setProperty("--foreground-color", "white");
                dark = false;              
            }
    });


    
});//end of document ready so really don't write any code outside of this