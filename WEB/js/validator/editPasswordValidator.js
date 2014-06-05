$(document).ready(function() {
    $('#editPasswordForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
                validators: {
                    notEmpty: {
                        message: 'Le mot de passe est obligatoire'
                    }
                }
            },
            newPassword: {
                validators: {
                    notEmpty: {
                        message: 'Le nouveau mot de passe ne peut pas être vide'
                    }
                }
            },
            confirmNewPassword: {
                validators: {
                    notEmpty: {
                        message: 'La confirmation du nouveau mot de passe ne peut pas être vide'
                    },
                    identical:{
                        field : 'newPassword',
                        message : 'Le mot de passe de confirmation est différent du nouveau mot de passe'
                    }
                }
            }
        }
    });
});