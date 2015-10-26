
$(document).ready(function () {
    // ajax!!! 
 
    $(".form").submit(function (event) {
        event.preventDefault();
       $( ".weather" ).empty(); 
        var city = $("#city").val();
        console.log(city);
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=81c2ea79fca364daa87277ef91a150b3").done(
                        function (data){
                        console.log(data);
                        
                        $("div.weather").append(data.weather[0].description);
$("div.temp").append(data.main.temp + "℃"
                    );
$("div.info").append(data.main.humidity + "%");
                  
        });
         
        $("h2.weather-city").text(city);
        $("#city").val("");
    
    });


    
    
});