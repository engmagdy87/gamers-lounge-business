const getFirstLettersOfString = (text) => {
    const words = text.split(" ")
    let letters = ""
    words.forEach(word => {
        letters += word[0]
    });

    return letters.toUpperCase()
}

const TruncateText = (text) => {
    const numberOfCharacters = 25
    if (!text) return
    if (text.length <= numberOfCharacters) return text
    return `${text.slice(0, numberOfCharacters)}...`
}

export { getFirstLettersOfString, TruncateText }