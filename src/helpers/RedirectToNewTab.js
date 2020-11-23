const redirectToNewTab = (tagId) => {
    const elements = document.getElementsByClassName(tagId)

    if (elements.length === 0) return
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const tags = element.getElementsByTagName("a");

        for (var i = 0; i < tags.length; i++) {
            tags[i].setAttribute("target", "_blank");
        }
    }

}

export default redirectToNewTab

