document.addEventListener('DOMContentLoaded', function() {

    startTabAnimation();

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopTabAnimation();
            document.title = ":( come back";
        } 
        else {
            document.title = "you came back :)"; 
            setTimeout(() => {
                startTabAnimation();
            }, 500);
        }
    });


});

const animation = [
    "- - - - -",
    "O - - - -",
    "O L - - -",
    "O L A - -",
    "O L A F -",
    "O L A F S",
    "O L A F S",
    "O L A F -",
    "O L A - -",
    "O L - - -",
    "O - - - -",
];

let intervalId;
let animationTimeouts = [];

function startTabAnimation() {
    if (!intervalId) {
        stopTabAnimation();
        
        intervalId = setInterval(() => {
            animationTimeouts.forEach(timeout => clearTimeout(timeout));
            animationTimeouts = [];
            
            for (let e = 0; e < animation.length; e++) {
                let timeout = setTimeout(() => {
                    document.title = animation[e];
                }, e * 250);
                animationTimeouts.push(timeout);
            }
        }, animation.length * 250);
    }
}

function stopTabAnimation() {
    clearInterval(intervalId);
    intervalId = null;
    animationTimeouts.forEach(timeout => clearTimeout(timeout));
    animationTimeouts = [];
}