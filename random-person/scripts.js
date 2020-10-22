function getRandomUser(){

    $('#loading').show();
    $('#user-data').hide();

    $.ajax({
        url : 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole',
        type : 'GET',
        dataType:'json',
        success : function(data) {   
            var user=data[0];
            $('#name').html(user.first+' '+user.last);
            $('#address').html(user.address);
            $('#email').html(user.email);
            $('#user-data').show();
            $('#loading').hide();
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });
}

$(document).ready(function(){
    getRandomUser();
});