
$(document).ready(function () {
    // ajax!!! 
 /*$.ajax({
 
    url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=81c2ea79fca364daa87277ef91a150b3",
    
    data: {
     id:
     },
        
    dataType: "json",
        
    success: function( json ){
    
        $( " " ).text(json.title ).appendTo( "body" );
        $( " ").html( json.html ).appendTo( "body" );
    },
 });
 */ 

    $(".form").submit(function (event) {
        event.preventDefault();
       $( ".weather" ).empty();
        $( ".temp" ).empty();
        $( ".info" ).empty();
        var city = $("#city").val();
        console.log(city);
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=81c2ea79fca364daa87277ef91a150b3").done(
                        function (data){
                        console.log(data);
                        
$("div.weather").append(data.weather[0].description);
$("div.temp").append(data.main.temp + "℃");
$("div.info").append(data.main.humidity + "%");
$("div.weather").append(data.weather.rain);
                  
        });
         
        $("h2.weather-city").text(city);
        $("#city").val("");
    
    });


    
    
});