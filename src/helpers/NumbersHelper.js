const numberOfDecimalsInStringNumber = (number) => {
    if (number.split('.').length === 1) return 0
    return number.split('.')[1].length
}

export { numberOfDecimalsInStringNumber }