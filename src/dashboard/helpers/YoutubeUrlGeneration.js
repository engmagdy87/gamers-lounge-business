const generateYoutubeUrl = (url) => {
    if (url.includes("watch")) {
        const vidId = url.split("=")[1]
        return `https://www.youtube.com/embed/${vidId}`
    }
    return url
}

export default generateYoutubeUrl