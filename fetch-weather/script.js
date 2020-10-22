function fetchweather(){
    var location = $('.search-bar').val();
    if(location==undefined || location==''){
        alert('Please Enter location to search!');
    }else{
        $('.date').html(dateBuilder(new Date()));
    var urlWeather = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=f5ecc4e1a5b64290a7464036cd36dec8&units=metric';
    $.ajax({
        url : urlWeather,
        type : 'GET',
        dataType:'json',
        success : function(data) {   
            $('.location').html(`${data.name} , ${data.sys.country}`);
            var temp =Math.round(data.main.temp);
            $('.temp').html(`${temp} °c`);
            $('.weather').html(`${data.weather[0].main}`);
            if(temp>16){
                $('#background-div').addClass('warm');
            }else{
                $('#background-div').removeClass('warm');
            }
        },
        error : function(request,error)
        {
            alert('error in processing');
            console.log("Request: "+JSON.stringify(request));
        }
    });
}
}

const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
