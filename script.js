function autoResize(element) {
    // Reset the height to auto to shrink it when the content is removed.
    element.style.height = '5px';

    // scrollHeight.
    element.style.height = (element.scrollHeight) + 'px';
}

let anchors = Array.from(document.querySelectorAll(".links a"));
document.querySelector(".menuImg").addEventListener("click", () => {
    anchors.forEach(anchor => {
        let span = anchor.getElementsByTagName("span")[0];
        span.style.display = "block";
        let first = document.querySelector(".first");
        first.style.left = "0px";
        first.style.backgroundColor = "#141313";
        first.style.width = "300px";
    });
});

document.addEventListener("click", (event) => {
    anchors.forEach(anchor => {
        let span = anchor.getElementsByTagName("span")[0];
        let first = document.querySelector(".first");
        if (!first.contains(event.target) && event.target !== document.querySelector(".menuImg") && first.style.left === "0px") {
            first.style.left = "-350px";
        }
    })
})