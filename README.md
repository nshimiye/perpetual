# perpetual
Perform a task periodically

This is just another version of *setInterval*

## use cases
* Periodically update a token bearer from a third party service.
* Test a REST API from time to time to make sure it's performance is as intact as it was when the API was created.
* Train a machine learning model from time to time.

## Dependancies
* node v4.4.2 LTS
* npm 2.15.1

## Installation
```
  npm install perpetual --save
```

## Usage

Below is a set of step you will need to follow in order to successfully run a periodic task.
```
// Initialize the task runner
let perpetual = require('perpetual');
let runnerInstance = perpetual.initDefaultRunner();

// Use the runner to define a task
let args = [12345678]; // argument
function printElapsed(initial){ console.log(' Time is', Date.now() - initial); } // function to run when task starts
runnerInstance.defineTask(printElapsed, args);

// Use the runner to start task
runnerInstance.start(taskId);

// Use the runner to stop task
runnerInstance.stop(taskId);

```


## Tests
```
  npm test
```
## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0-beta.1 Initial release
