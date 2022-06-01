x = 0;
y = 0;
screen_width = 0;
screen_height = 0;

draw_apple = "";

app = "";
speak_data = "";
to_number = "";

function preload() {
    apple = loadImage("apple.png");
}

var SpeechRecognition = window.webKitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    content = event.result[0][0], transcript;

    document.getElementById("status").innerHTML = "the speech has been recognized: " + content;
    to_number = Number(content);
    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_apple = "set";
    }
    else {
        document.getElementById("status").innerHTML = "the speech has not recognized a number ";
    }

}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerheight;

    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0, 150);
}

function draw() {
    if (draw_apple == "set") {
        for (var i = 1; i <= to_number; i++) {
            x = Math.foor(Math.random() * 700);
            y = Math.foor(Math.random() * 400);
            Image(apple, x, y, 50, 50);
        }
        document.getElementById("staus").innerHTML = to_number + " Apples drawn";
        speak_data = to_numbers + "Apples drawn";
        speak();
        drawn_apple = "";
    }
}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisEvent(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}