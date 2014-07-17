$(document).ready(function() {
    $('#restaurantMenuForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            menuName:{
                validators:{
                    notEmpty:{
                        message : 'Le nom du menu est obligatoire'
                    }
                }
            },
            dishName:{
                validators:{
                    notEmpty:{
                        message : 'Le nom du plat est obligatoire'
                    }
                }
            },
            price: {
                validators: {
                    notEmpty: {
                        message: 'Le prix est obligatoire'
                    },
                    regexp:{
                        regexp: /^\d*(\.|,\d{2})?$/,
                        message : 'Le format du prix est invalide'
                    }
                }
            }
        }
    });
});