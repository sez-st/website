window.addEventListener("message", (event) => {
    if (event.data.type === "resize") {
        const iframe = document.querySelector("iframe");
        iframe.style = `max-height: ${event.data.value + 100}px`;
    }
}, false);