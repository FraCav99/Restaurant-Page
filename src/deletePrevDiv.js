const removePrevContent = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.removeChild(contentDiv.lastChild);
}

export default removePrevContent;