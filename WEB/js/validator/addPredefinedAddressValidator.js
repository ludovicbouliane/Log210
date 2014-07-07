$(document).ready(function() {
    $('#addPredefinedAddressForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            addressName:{
                validators:{
                    notEmpty:{
                        message: 'Le nom de l\'adresse est obligatoire'
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
            }
        }
    });
});