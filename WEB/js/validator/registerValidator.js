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
                    },
                    zipCode: {
                        min: 6,
                        max: 7,
                        message: 'Le code postal doit avoir entre 6 et 7 charactères'
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
                    date:{
                        format: 'DD/MM/YYYY',
                        message: 'La date n\'est pas valide'
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