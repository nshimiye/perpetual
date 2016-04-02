'use strict';

/**
 * DefaultRunner provides a singleton of itself
 */

 const TaskRunner = require('../../main/TaskRunner');

 // const _taskRunner = Symbol('taskRunner');
let _taskRunner = null;

class DefaultRunner extends TaskRunner {
  // let cache = {}; // a map that stores id's of running tasks
  constructor(options) {
    // options => { parameters: [ 'time_passed', 'start_time', 'end_time', 'last_output' ] }
    super(options || {});
  }

  static get taskRunner() { return _taskRunner }; // getter
  static set taskRunner(value) { _taskRunner = value }; // setter

  static runner(options) {
    if (!DefaultRunner.taskRunner) {
       DefaultRunner.taskRunner = new DefaultRunner(options);
    }
    return DefaultRunner.taskRunner;
  }
}

module.exports = DefaultRunner;
