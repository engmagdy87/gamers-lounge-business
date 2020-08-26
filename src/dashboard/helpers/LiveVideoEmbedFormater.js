const liveVideoEmbedFormatter = (url) => {
    if (url.includes("youtube") && url.includes("watch")) {
        const vidId = url.split("=")[1]
        return `https://www.youtube.com/embed/${vidId}`
    }

    if (url.includes("youtube") && url.includes("embed"))
        return url

    if (url.includes("twitch")) {
        const items = url.split("/")
        const channel = items[items.length - 1]
        return `https://player.twitch.tv/?channel=${channel}&parent=${getParentUrl()}`
    }
    return url
}

const liveVideoChatEmbedFormatter = (url) => {
    if (url.includes("youtube") && url.includes("embed")) {
        const items = url.split("/")
        const vidId = items[items.length - 1]
        return `https://www.youtube.com/live_chat?v=${vidId}&embed_domain=localhost`
    }

    if (url.includes("twitch")) {
        const items = url.split("=")
        const parent = items[items.length - 1]
        const channel = items[items.length - 2].split("&")[0]
        return `https://www.twitch.tv/embed/${channel}/chat?parent=${parent}`
    }
    return url
}

const getParentUrl = () => {
    switch (process.env.NODE_ENV) {
        case "development":
            return "localhost"

        case "staging":
            return "esports-summit.netlify.app/"

        case "production":
            return "esportssummit-me.com/"

        default:
            return "localhost"
    }
}

export { liveVideoEmbedFormatter, liveVideoChatEmbedFormatter }