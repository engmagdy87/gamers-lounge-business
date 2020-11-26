const getFirstLettersOfString = (text) => {
    const words = text.split(" ")
    let letters = ""
    words.forEach(word => {
        letters += word[0]
    });

    return letters.toUpperCase()
}

const truncateText = (text) => {
    const numberOfCharacters = 25
    if (!text) return
    if (text.length <= numberOfCharacters) return text
    return `${text.slice(0, numberOfCharacters)}...`
}

const changeTextDirection = (text) => {
    const arabicPattern = /[\u0600-\u06FF]/;
    return arabicPattern.test(text)
}

const reformatStringToBeInURL = (text) => {
    return text.split(" ").filter(str => str !== "").join("-").toLowerCase()
}

const getEntityId = (text) => {
    return text.split("-")[0]
}

const getEntityName = (text) => {
    return text.split("-").slice(1).join(" ")
}

export { getFirstLettersOfString, truncateText, changeTextDirection, reformatStringToBeInURL, getEntityId, getEntityName }