const getFirstLettersOfString = (text) => {
    const words = text.split(" ")
    let letters = ""
    words.forEach(word => {
        letters += word[0]
    });

    return letters.toUpperCase()
}

const TruncateText = (text) => {
    if (!text) return
    if (text.length <= 20) return text
    return `${text.slice(0, 20)}...`
}

export { getFirstLettersOfString, TruncateText }