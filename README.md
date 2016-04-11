# perpetual-yas
Perform a task periodically
[![Build Status](https://travis-ci.org/nshimiye/perpetual.svg?branch=master)](https://travis-ci.org/nshimiye/perpetual)
[![Coverage Status](https://coveralls.io/repos/github/nshimiye/perpetual/badge.svg?branch=master)](https://coveralls.io/github/nshimiye/perpetual?branch=master)


[![Waterlock][waterlock-image]][waterlock-url]
-----------------------------------------------

[![Gitter][gitter-image]][gitter-url]

[![Inline docs][inch-image]][inch-url]

| [![Build Status][travis-image]][travis-url] | [![NPM version][npm-version-image]][npm-url] | [![NPM downloads][npm-downloads-image]][npm-url] | [![Dependency Status][dependency-image]][dependency-url] |
| ------- | ------- | ------- | ------- |
| [![Coverage Status][coverage-image]][coverage-url] | [![Code Climate][climate-image]][climate-url] | [![Gittip][gittip-image]][gittip-url] | [![MIT License][license-image]][license-url]



This is just another version of *setInterval*. yas is short for Yet Another SetInterval.

## use cases
* Periodically update a token bearer from a third party service.
* Test a REST API from time to time to make sure it's performance is as intact as it was when the API was created.
* Train a machine learning model from time to time.
* Create daily report on slack messages your team send to each other.
  * most frequent topic.
  * percentage of happy vs unhappy messages.

## Dependancies
* node v4.4.2 LTS
* npm 2.15.1

## Installation
```bash
  npm install perpetual-yas --save
```

## Usage

Below is a set of step you will need to follow in order to successfully run a periodic task.
```javascript
// Initialize the task runner
let perpetual = require('perpetual-yas');
let runnerInstance = perpetual.initDefaultRunner();

// Use the runner to define a task
let args = [12345678]; // arguments
function printElapsed(initial) { // function to run when task starts
  console.log('Time is ', Date.now() - initial); 
}
let taskId = runnerInstance.defineTask(printElapsed, args);

// Use the runner to start task
runnerInstance.start(taskId);

// Use the runner to stop task
runnerInstance.stop(taskId);

```


## Tests
```bash
  npm test
```
## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0-beta.1 Initial release
