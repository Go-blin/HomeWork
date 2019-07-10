$(document).ready(function () {
    $('#register').submit(function (e) {
        e.preventDefault();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();

        $(".error").remove();
        var escapeFlag = false;

        if (firstName.length < 5) {
            $('#firstName').after('<span class="error">First name is too short</span>');
            escapeFlag = true;
           
        }
        if (lastName.length < 5) {
            $('#lastName').after('<span class="error">Last name is too short</span>');
            escapeFlag = true;
        }
        if (email.length < 5) {
            $('#email').after('<span class="error">Email is too short</span>');
            escapeFlag = true;
        }
        if (escapeFlag) { return; }

        var user = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        console.log(user);
        alert('Success');

        $('#register').trigger('reset');
    });

   

})
  