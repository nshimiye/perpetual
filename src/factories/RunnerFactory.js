'use strict';


/**
 * RunnerFactory.js
 */

const Default = require('../runners/default/index');
const Slack = require('../runners/slack/index');

class RunnerFactory {
  constructor() {
    // this won't be run since we are only using the static method
  }
  /**
   * @return taskRunner { TaskRunner }
   */
  static getRunner(runnerType, options) {

    switch (runnerType) {
      case 'DEFAULT':
        return Default.runner(options);

        break;
      case 'SLACK':
        return Slack.runner(options);

        break;
      default:
        return Default.runner(options);

    }
  }
}


module.exports = RunnerFactory;
