# Active Buzzer

Kaluma library to generate beep sound with active buzzer

# Wiring

Here is a wiring example.

| Raspberry Pi Pico | Active Buzzer | 
| ----------------- | ------------- |
| GND               | -             |
| GP0               | +             |

Wiring for a board with TR (KY-012).

| Raspberry Pi Pico | Active Buzzer | 
| ----------------- | ------------- |
| 3V3               | VCC           |
| GND               | GND           |
| GP0               | I/O           |

![wiring](https://github.com/niklauslee/active-buzzer/blob/main/images/wiring.jpg?raw=true)

# Install

```sh
npm install https://github.com/niklauslee/active-buzzer
```

# Usage

```javascript
const buzzer = require('active-buzzer');
const PIN = 0;

// beep 5 times.
buzzer.beep(PIN, 5);
delay(1000);

// beep 10 times.
buzzer.beep(PIN, 10);
delay(1000);

// beep 5 times with 100ms interval.
buzzer.beep(PIN, 5, 100);
```

Example for some boards with TR (reversed signal)

```javascript
// Example for boards with TR (beep = LOW, stop = HIGH)

const buzzer = require('active-buzzer');
const PIN = 0;

// beep 5 times.
buzzer.beep(PIN, 5, 50, LOW);
delay(1000);

// beep 10 times.
buzzer.beep(PIN, 10, 50, LOW);
delay(1000);

// beep 5 times with 100ms interval.
buzzer.beep(PIN, 5, 100, LOW);
```

# API
 
## beep(pin, count[, interval[, beepSignal]])
 
Generate beep sound.
 
- **`pin`** `<number>` Pin number for active buzzer.
- **`count`** `<number>` Number of count to beep.
- **`interval`** `<number>` delay time in milliseconds to beep as well as stop. Default: `50`.
- **`beepSignal`** `<number>` Signal to make beep sound. Default: `HIGH`. (In some boards with TR, LOW signal is required to make beep bound.)
