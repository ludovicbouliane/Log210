$(document).ready(function() {
    $('#registerForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName:{
                validators:{
                    notEmpty:{
                        message : 'Le prénom est obligatoire'                        
                    }
                }
            },
            lastName:{
                validators:{
                    notEmpty:{
                        message : 'Le nom est obligatoire'                        
                    }
                }
            },
            address:{
                validators:{
                    notEmpty:{
                        message : 'L\'adresse est obligatoire'                        
                    }
                }
            },
            city:{
                validators:{
                    notEmpty:{
                        message : 'La ville est obligatoire'                        
                    }
                }
            },
            state:{
                validators:{
                    notEmpty:{
                        message : 'L\'état est obligatoire'                        
                    }
                }
            },
            country:{
                validators:{
                    notEmpty:{
                        message : 'Le pays est obligatoire'                        
                    }
                }
            },
            zipCode:{
                validators:{
                    notEmpty:{
                        message : 'Le code postal est obligatoire'                        
                    }
                }
            },
            phoneNumber:{
                validators:{
                    notEmpty:{
                        message : 'Le numéro de téléphone est obligatoire'                        
                    },
                    regexp:{
                        regexp: /(\d{3}) (\d{3})-(\d{4})/,
                        message: 'Le numéro de téléphone ne respecte pas le format demandé'
                    }
                }
            },
            birthDate:{
                validators:{
                    notEmpty:{
                        message : 'La date de naissance est obligatoire'                        
                    },
                    regexp:{
                        regexp: /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
                        message : 'La date est invalide'
                    }
                }
            },
            email:{
                validators:{
                    notEmpty:{
                        message : 'L\'adresse courriel est obligatoire'
                    },
                    emailAddress: {
                        message: 'L\'adresse courriel n\'est pas valide'
                    }
                }
            },
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