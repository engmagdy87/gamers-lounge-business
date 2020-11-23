import isEmailValid from './EmailValidation'

const validateForm = (value, criteria, alias) => {
    let errors = [];

    if (value === "" && criteria.isRequired) errors.push(`${alias} is required`)

    if (value.length < criteria.minLength) errors.push(`${alias} at least ${criteria.minLength} character`)

    if (criteria.isEmail && !isEmailValid(value)) errors.push('Invalid email format')

    if (criteria.isFile && value === "") errors.push('Please choose proper file')

    return errors
}

export default validateForm;