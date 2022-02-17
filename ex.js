const buzzer = require("./index");
const PIN = 0;

// beep 5 times.
buzzer.beep(PIN, 5);
delay(1000);

// beep 10 times.
buzzer.beep(PIN, 10);
delay(1000);

// beep 5 times with 100ms interval.
buzzer.beep(PIN, 5, 100);
