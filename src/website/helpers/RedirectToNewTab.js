const redirectToNewTab = (tagId) => {
    const element = document.getElementById(tagId)
    if (!element) return

    const tags = element.getElementsByTagName("a");

    for (var i = 0; i < tags.length; i++) {
        tags[i].setAttribute("target", "_blank");
    }
}

export default redirectToNewTab

