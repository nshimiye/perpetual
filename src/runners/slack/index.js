'use strict';

/**
 * SlackRunner provides a singleton of itself
 * @TODO make this custom by adding new methods and defining tasks
 */

const TaskRunner = require('../../main/TaskRunner');

// const _taskRunner = Symbol('taskRunner');
let _taskRunner = null;

class SlackRunner extends TaskRunner {
 // let cache = {}; // a map that stores id's of running tasks
 constructor(options) {
   // options => { parameters: [ 'time_passed', 'start_time', 'end_time', 'last_output' ] }
   super(options);
 }

 static get taskRunner() { return _taskRunner }; // getter
 static set taskRunner(value) { _taskRunner = value }; // setter

 static runner(options) {
   if (!SlackRunner.taskRunner) {
      SlackRunner.taskRunner = new SlackRunner(options);
   }
  //  return SlackRunner.taskRunner;
   throw new Error('Not implemented');
 }
}

module.exports = SlackRunner;
