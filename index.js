function beep(pin, count, interval = 50, beepSignal = HIGH) {
  pinMode(pin, OUTPUT);
  for (var i = 0; i < count; i++) {
    digitalWrite(pin, beepSignal);
    delay(interval);
    digitalWrite(pin, beepSignal === HIGH ? LOW : HIGH);
    delay(interval);
  }
}

exports.beep = beep;
