$(document).ready(function() {
    $('#editRestaurantManagerForm').bootstrapValidator({
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
            }
        }
    });
});