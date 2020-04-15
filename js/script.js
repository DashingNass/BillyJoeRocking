/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


console.log("testing");


var clickMe = document.getElementById("buttons");
var geluid = new Audio("/audio/beep.mp3");

var RockingPoeperd = new Audio("/audio/madness.mp3");

// Deze functie laat een geluidje bij het begin horen
function test() { //roept functie aan.
    geluid.play(); //laat het geluidje afspelen.

}
clickMe.addEventListener("click", test);
//Roept de naam van de functie, waarbij je deze aanroept als je op de knoppen klikt en speelt het geluidje "beep.mp3" af.




// Functie 1: Let's rock
function rocken() {
    document.getElementById("buttons");
    var video = document.getElementById('idlestate');
    video.src = "images/LetsRock.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('idlestate').addEventListener('ended', reload, false);

    function reload() {
        location.reload();
    }
}



// Functie 2: Let's sing
function singing() {
    document.getElementById("buttons");
    var video = document.getElementById('idlestate');
    video.src = "images/LetsSing.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('idlestate').addEventListener('ended', reload, false);

    function reload() {
        location.reload();

    }
}

// Functie 3: Smash that motherf*cker / Guitar Slam
functie

function smash() {
    document.getElementById("buttons");
    var video = document.getElementById('idlestate');
    video.src = "images/SmashThatMotherfucker.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('idlestate').addEventListener('ended', reload, false);

    function reload() {
        location.reload();

    }
}
