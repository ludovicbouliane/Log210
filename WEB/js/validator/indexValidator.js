$(document).ready(function() {
    $('#loginForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Le nom d\'usager est obligatoire'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Le mot de passe est obligatoire'
                    }
                }
            }
        }
    });
});