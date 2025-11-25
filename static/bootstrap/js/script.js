function sendMail(){
    let parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getAnimations("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_bkouwi4","template_oznl6n8",parms).then(alert("Message Sent!!"))
}