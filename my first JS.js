var i = 0;
var email = 'jamesjshearin@gmail.com';
var speed = 250;

function typeWriter() {
    if (i < email.length) {
        document.getElementById("email").innerHTML += email.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}