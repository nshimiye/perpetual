/**
 * provide all needed entries for developers to use this addon

 * Design:
 *    General task accomplished can be defined as “run automated tasks that occur every hour/day …”
 * Methods:
      initTaskRunner // input values: runnerType ( FUSEPROSPECTOR, SLACK ), options ( json object, content varies depending on the runnerType ) , returns the name/id used to start
      start // name/id of task runner
      stop // name/id of task runner
 * @author Marcellin<nmarcellin2@gmail.com>
 * @since 04-01-2016
 */
module.exports = { // index.js
  /**
   * instantiate the custom task runner, this comes from a set of runners that do custom work
   * @param runnerType {} ( FUSEPROSPECTOR, SLACK ), options ( json object, content varies depending on the runnerType )
   * @param options { JSON } values: runnerType ( FUSEPROSPECTOR, SLACK ), options ( json object, content varies depending on the runnerType )
   * @return returns { taskRunner instance } pointer to this task runner
   *
   * @note this method is used only if you want to call custom task runners
   */
  initTaskRunner: function(runnerType, options) {
    return String('NOT implemented yet');
  },

  /**
   * instantiate the default task runner, this does nothing special
   * @param options { JSON } <optional> specify the format of the output report every time you stop the task. { parameters: [ 'time_passed', 'start_time', 'end_time', 'last_output' ] }
   * @return { taskRunner instance } pointer to this task runner
   */
  initDefaultRunner: function(options) {
    return String('NOT implemented yet');
  },

  /**
   *
   * default task runner
   * @param definition { function, arguments } the function to be executed and the values used as parameters to this function
   * i.e. running "start" will be the same as calling "function( arguments )"
   * @return returns the name/id used to start the task
   */
  definedTask: function(definition) {
    return String('NOT implemented yet');
  },

  /**
   * run the task if it not running
   * tell the task-runner to run the task specified by the given id
   *
   * @param id { String } name/id of task runner
   * @return void { JSON } summary report of what happened { error, data }
   */
  start: function(id) {
    return String('NOT implemented yet');
  },
  /**
   * stop the task and give report to the user about how long the task has been running and anything important
   *
   * @param id { String } name/id of task runner
   * @return { JSON } summary report of what happened { error, data }
   */
  stop: function(id) {
    return String('NOT implemented yet');
  }
};
