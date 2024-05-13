// window.addEventListener("message", (event) => {
//     if (event.data.type === "resize") {
//         const iframe = document.querySelector("iframe");
//         iframe.style = `max-height: ${event.data.value + 100}px`;
//     }
// }, false);

/*
const el = document.querySelector("#content");

const observer = new MutationObserver((mutationList, observer) => {
    window.parent.postMessage({
        type: "resize",
        value: el.offsetHeight
    }, "*");

    console.log("resize", el.offsetHeight);
}).observe(el, { attributes: true, childList: true, subtree: true });


window.addEventListener("message", (event) => {
    console.log(event.data.type);
}, false);
*/
window.addEventListener("message", (event) => { if (event.data.type === "resize") { const iframe = document.querySelector("iframe"); iframe.style = `max-height: ${event.data.value + 100}px`; }
}, false);