function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value 
    };

    emailjs.send("service_nuad31e", "template_dr8d5cl", parms)
    
}