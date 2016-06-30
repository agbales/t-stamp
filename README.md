# Timestamp Microservice

## Usage

This service checks the param to see whether that string contains a unix timestamp or distinguishable natural language date (ex: January 1, 2016 OR Jan 1 16). If so, it returns both the Unix and natural language forms. Otherwise, it returns null for both properties.

##Example usage:

https://timestamp-agbales.c9users.io/December%2015,%202015
https://timestamp-agbales.c9users.io/Dec%15%15
https://timestamp-agbales.c9users.io/1450137600

Example output:

{ "unix": 1450137600, "natural": "December 15, 2015" }

## Build Info

Built with the [FCC version of Clementine.js](http://www.clementinejs.com/versions/fcc.html#c9.ioSetup), a lightweight boilerplate for fullstack JavaScript development which utilizes MongoDB, Express and Node.js.

[Moment.js](https://github.com/moment/moment/) provides time formatting.

## License

MIT License. [Click here for more information.](LICENSE.md)
