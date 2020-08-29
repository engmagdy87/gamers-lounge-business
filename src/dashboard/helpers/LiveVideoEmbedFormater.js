const liveVideoEmbedFormatter = (url) => {
    if (url.includes("youtube") && url.includes("watch")) {
        const vidId = url.split("=")[1]
        return `https://www.youtube.com/embed/${vidId}`
    }

    if (url.includes("facebook")) {
        return `https://www.facebook.com/plugins/video.php?href=${url}&height=315`
    }

    if (url.includes("twitch")) {
        const items = url.split("/")
        const channel = items[items.length - 1]
        return `https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}`
    }
    return url
}

const liveVideoChatEmbedFormatter = (url) => {
    if (url.includes("youtube")) {
        const vidId = url.split("=")[1]
        return `https://www.youtube.com/live_chat?v=${vidId}&embed_domain=${window.location.hostname}`
    }

    if (url.includes("facebook")) {
        return false
    }

    if (url.includes("twitch")) {
        const items = url.split("/")
        const channel = items[items.length - 1]
        return `https://www.twitch.tv/embed/${channel}/chat?parent=${window.location.hostname}`
    }
    return url
}

export { liveVideoEmbedFormatter, liveVideoChatEmbedFormatter }