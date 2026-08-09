const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");

let isOpen = false;

function toggleEnvelope() {

    isOpen = !isOpen;

    if (isOpen) {

        envelope.classList.add("open");

        openButton.textContent = "Close Letter 💕";

    } else {

        envelope.classList.remove("open");

        openButton.textContent = "Open Letter 💌";

    }
}

envelope.addEventListener("click", toggleEnvelope);

openButton.addEventListener("click", toggleEnvelope);
