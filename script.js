function sendMail(){
    let parms={
    name: document.getElementById("name").value,
    email:document.getElementById("email").value, 
    age:document.getElementById("age").value,
   Comment:document.getElementById("comment").value,
    }
    emailjs.send("service_ug3s1p9","template_s4rjavi",parms).then(alert("Thank you..."))
}