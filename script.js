function changeText() {
    let messageElement = document.getElementById("message");

    if (messageElement.innerText === "Bu, basit bir HTML, CSS ve JS örneğidir.") {
        messageElement.innerText = "Butona tikladiniz!";
    } else {
        messageElement.innerText = "Bu, basit bir HTML, CSS ve JS örneğidir.";
    }
}
