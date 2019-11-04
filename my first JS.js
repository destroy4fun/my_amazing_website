var i = 0;
var txt = 'jamesjshearin@gmail.com';
var speed = 250;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("email").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}