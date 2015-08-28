$(document).ready(function() {

    // AJAX GET
    $('.get-more').click(function(){

        $("#btnPersons").click(function(){
            $.ajax({
                type: "GET",
                url: "/get_persons/",
                dataType: "json",
                success: function(resultado){
                    $.each(resultado, function(i,item){
                        $("#corpoTabela").append(
                            '<tr>' +
                            '<td>' +
                            item.fields['firstname'] +
                            '</td>' +
                            '<td>' +
                            item.fields['lastname'] +
                            '</td>' +
                            '</tr>'
                        );
                    });
                }
            });
        });
    });


    // AJAX POST
    $('.add-todo').click(function(){
      console.log('am i called');

        $.ajax({
            type: "POST",
            url: "/ajax/add/",
            dataType: "json",
            data: { "item": $(".todo-item").val() },
            success: function(data) {
                alert(data.message);
            }
        });

    });



    // CSRF code
    function getCookie(name) {
        var cookieValue = null;
        var i = 0;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (i; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        crossDomain: false, // obviates need for sameOrigin test
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    }); 


});
