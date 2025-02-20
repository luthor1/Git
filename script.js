function changeText() {
    let messageElement = document.getElementById("message");

    if (messageElement.innerText === "Butona tiklayiniz.") {
        messageElement.innerText = "Butona tikladiniz!";
    } else {
        messageElement.innerText = "Butona tiklayiniz.";
    }
}
