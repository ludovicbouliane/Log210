using System;
using System.ComponentModel.DataAnnotations;
using Model.Enum;

namespace Model.ControllerModel
{
    public class OrderStatus
    {
        public string OrderId { get; set; }

        [ValidEnumValue]
        public OrderStatusType Status { get; set; }
    }

    public class ValidEnumValueAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var enumType = value.GetType();
            var isValid = System.Enum.IsDefined(enumType, value);

            if (!isValid)
            {
                return new ValidationResult(String.Format("{0} is not a valid value for type {1}", value, enumType.Name));
            }

            return ValidationResult.Success;
        }
    }
}