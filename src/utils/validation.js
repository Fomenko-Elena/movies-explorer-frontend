import validator from "validator";

export const validationSchemas = {
  email: (target) => {
    const validationMessage = target.validationMessage;
    if (validationMessage) return {
      message: validationMessage,
      isValid: false,
    }
    const value = target.value;
    if (validator.isEmail(value)) {
      return { isValid: true }
    }
    return {
      message: 'Неправильный формат email',
      isValid: false,
    }
  }
}