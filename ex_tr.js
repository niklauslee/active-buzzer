// Example for boards with TR (signal = LOW, stop = HIGH)

const buzzer = require("./index");
const PIN = 0;

// beep 5 times.
buzzer.beep(PIN, 5, 50, LOW);
delay(1000);

// beep 10 times.
buzzer.beep(PIN, 10, 50, LOW);
delay(1000);

// beep 5 times with 100ms interval.
buzzer.beep(PIN, 5, 100, LOW);
