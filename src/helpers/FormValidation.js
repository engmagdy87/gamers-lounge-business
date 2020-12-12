import isEmailValid from './EmailValidation'

const validateForm = (value, criteria, alias) => {
    let errors = [];
    // "" for empty string and "-1" for default option in select tag
    if ((value === "" || value === "-1" || value.length === 0) && criteria.isRequired) errors.push(`${alias} is required`)

    if (value.length < criteria.minLength) errors.push(`${alias} at least ${criteria.minLength} character`)

    if (criteria.isEmail && !isEmailValid(value)) errors.push('Invalid email format')

    if (criteria.isFile && value === "") errors.push('Please choose proper file')

    return errors
}

const validateFormFields = (value, field, alias, validationCriteria) => {
    let errors = {}
    errors = {
        ...errors,
        [field]: validateForm(value, validationCriteria[alias], alias)
    };
    return errors
}
const isValidationErrorExist = (targetData, aliases, validationCriteria) => {
    let errors = {};
    let errorsLength = 0;
    Object.keys(targetData).forEach(key => { errors = { ...errors, ...validateFormFields(targetData[key], key, aliases[key], validationCriteria) } }
    );
    Object.keys(errors).forEach(
        error => (errorsLength += errors[error].length)
    );
    return { errors, length: errorsLength };
}

export default isValidationErrorExist;