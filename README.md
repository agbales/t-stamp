# Timestamp Microservice

## Usage

This service checks the param to see whether that string contains a unix timestamp or distinguishable natural language date (ex: January 1, 2016 OR Jan 1 16).

If so, it returns both the Unix and natural language forms. Otherwise, it returns null for both properties.

##Example usage:

https://timestamp-ms.herokuapp.com/December%2015,%202015
https://timestamp-ms.herokuapp.com/1450137600

Example output:

{ "unix": 1450137600, "natural": "December 15, 2015" }

## Build Info

Built with the [FCC version of Clementine.js](http://www.clementinejs.com/versions/fcc.html#c9.ioSetup), a lightweight boilerplate for fullstack JavaScript development which utilizes MongoDB, Express and Node.js.

## License

MIT License. [Click here for more information.](LICENSE.md)
