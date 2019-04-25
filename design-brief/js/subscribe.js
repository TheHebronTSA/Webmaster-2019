
$(function() {

    "use strict";

    /* ================================================
   jQuery Validate - Reset Defaults
   ================================================ */

    $.validator.setDefaults({
        ignore: [],
        highlight: function(element) {
            $(element).addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).removeClass('has-error');
        },
        errorPlacement: function(error, element) {
            return false;
        }
    });

    /* 
    VALIDATE
    -------- */

    $("#subscribeform").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            /* uncomment if Name is needed */

            fname: "required",
            /* lname: "required", 
             */
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function(form) {

            $("#js-subscribe-btn").attr("disabled", true);

            /* 
             CHECK PAGE FOR REDIRECT (Thank you page)
             ---------------------------------------- */

            var redirect = $('#subscribeform').data('redirect');
            var phpurl = $('#subscribeform').attr('action');

            var noredirect = false;
            if (redirect == 'none' || redirect == "" || redirect == null) {
                noredirect = true;
            }

            $("#js-contact-btn").attr("disabled", true);
            $('#js-contact-result').fadeIn('slow').html('<div class="error-msg">Please wait</div>');

            /* 
             FETCH SUCCESS / ERROR MSG FROM HTML DATA-ATTR
             --------------------------------------------- */

            var success_msg = $('#js-subscribe-result').data('success-msg');
            var error_msg = $('#js-subscribe-result').data('error-msg');

            var dataString = $(form).serialize();

            /* 
             AJAX POST
             --------- */

            $.ajax({
                type: "POST",
                data: dataString,
                url: phpurl,
                cache: false,
                success: function(d) {
                    $(".form-group").removeClass("has-success");
                    if (d == 'success') {
                        if (noredirect) {
                            $('#js-subscribe-result').fadeIn('slow').html('<div class="alert alert-success error-msg">' + success_msg + '</div>').delay(3000).fadeOut('slow');
                            $('#subscribeform')[0].reset();
                        } else {
                            window.location.href = redirect;
                        }
                    } else {
                        $('#js-subscribe-result').fadeIn('slow').html('<div class="alert alert-danger error-msg">' + error_msg + '</div>').delay(3000).fadeOut('slow');

                    }
                    setTimeout(function() {
                        $("#js-subscribe-btn").attr("disabled", false);
                    }, 1000);
                },
                error: function(d) {
                    $('#js-subscribe-result').fadeIn('slow').html('<div class="alert alert-danger error-msg"> Cannot access Server </div>').delay(3000).fadeOut('slow');
                    setTimeout(function() {
                        $("#js-subscribe-btn").attr("disabled", false);
                    }, 1000);

                }
            });
            return false;

        }
    });

});
