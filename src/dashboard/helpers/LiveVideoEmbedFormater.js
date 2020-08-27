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
        console.log('====================================');
        console.log(`https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}`);
        console.log('====================================');
        return `https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}`
    }
    return url
}

const liveVideoChatEmbedFormatter = (url) => {
    if (url.includes("youtube") && url.includes("embed")) {
        const vidId = url.split("=")[1]
        return `https://www.youtube.com/live_chat?v=${vidId}&embed_domain=${window.location.hostname}`
    }

    if (url.includes("twitch")) {
        const items = url.split("/")
        const channel = items[items.length - 1]
        console.log('====================================');
        console.log(`https://www.twitch.tv/embed/${channel}/chat?parent=${window.location.hostname}`);
        console.log('====================================');
        return `https://www.twitch.tv/embed/${channel}/chat?parent=${window.location.hostname}`
    }
    return url
}

export { liveVideoEmbedFormatter, liveVideoChatEmbedFormatter }