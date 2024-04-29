window.addEventListener("message", (event) => {
    if (event.data.type === "resize") {
        const iframe = document.querySelector("iframe");
        iframe.height = event.data.value + "px";
    }
}, false);

console.log("e");