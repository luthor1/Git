function changeText() {
    let messageElement = document.getElementById("message");

    if (messageElement.innerText === "Butona tiklayiniz.") {
        messageElement.innerText = "Merhaba ben volkan konak";
    } else {
        messageElement.innerText = "Butona tiklayiniz.";
    }
}
