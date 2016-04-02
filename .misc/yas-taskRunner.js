'use strict';

// Initialize the task runner
let perpetual = require('../index');
let runnerInstance = perpetual.initDefaultRunner();

// Use the runner to define a task
let args = [Date.now()]; // arguments
function printElapsed(initial) { // function to run when task starts
  console.log(' Elapsed Time is ', Date.now() - initial);
}
let taskId = runnerInstance.defineTask(printElapsed, args);
let taskId2 = runnerInstance.defineTask(printElapsed, args);
console.log(' [ task definition taskId ] ', taskId);
console.log(' [ task definition taskId 2 ] ', taskId2);

// Use the runner to start task
let taskStartOutput = runnerInstance.start(taskId);
console.log(' [ output of task start method ] ', taskStartOutput);

setTimeout( () => {

  // Use the runner to stop task
  let taskStopOutput = runnerInstance.stop(taskId);
  console.log(' [ output of task stop method ] ', taskStartOutput);

}, 10000);

// non stopping task
runnerInstance.start(taskId2);
