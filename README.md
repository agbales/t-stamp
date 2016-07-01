# Timestamp Microservice

## Overview

This service checks the param to see whether that string contains a unix timestamp or distinguishable natural language date (ex: January 1, 2016 OR Jan 1 16). If so, it returns both the Unix and natural language forms. Otherwise, it returns null for both properties.

Find it here: [https://agbales-timestamp-microservice.herokuapp.com/](https://agbales-timestamp-microservice.herokuapp.com/)

##Example usage:

https://timestamp-agbales.c9users.io/December%2015,%202015

https://timestamp-agbales.c9users.io/Dec%15%15

https://timestamp-agbales.c9users.io/1450137600

Each example will output:

{ "unix": 1450137600, "natural": "December 15, 2015" }

## Info

[Node.js](https://nodejs.org/en/)
[Express.js](http://expressjs.com/)
[Moment.js](https://github.com/moment/moment/) for time formatting.
