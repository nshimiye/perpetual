'use strict';
/**
 * @author Marcellin<nmarcellin2@gmail.com>
 */

// es6 way of defining private variables @TODO figure out how this works
const _DELAY = Symbol('DELAY');
const _cache = Symbol('cache'); // a map that stores id's of running tasks { <id> : { definition: <function to run>, pointer: <pointer setInterval> } }
const _idSource = Symbol('idSource');

//-- START id generator
function * idMaker() {
    let x = 0;
    while(true) { x = x + 1; yield x; }
}
//-- END id generator

class TaskRunner { // runnerFactory.js
  constructor(options) {
    this[_DELAY] = options.delay || 5000;
    this[_cache] = {};
    this[_idSource] = idMaker( 1 ); // start from 1
  }
  /**
   *
   * @param definition { Function } the function to be executed
   * @param args { Array } list of values used as parameters to this function
   * i.e. running "start" will be the same as calling "function( arguments )"
   * @return returns the name/id used to start the task
   */
  defineTask(definition, args, context) {
    // put this in a map
    let cache = this[_cache];
    let idSource = this[_idSource];
    let id = idSource.next().value; // @DONE create idSource generator
    cache[id] = { definition: definition, arguments: args, context: context, pointer: undefined };

    return id;
  }

  /**
   * run the task if it not running
   * tell the task-runner to run the task specified by the given id
   *
   * @param id { String } name/id of task runner
   * @return void { JSON } summary report of what happened { error, data }
   */
  start(id) {
    let cache = this[_cache];
    let DELAY = this[_DELAY];
    let definition = cache[id]['definition'];
    let args = cache[id]['arguments'];
    let context = cache[id]['context'] || null; //if user has provided the context
    let intervId = setInterval(() => definition.apply(context, args), DELAY);
    cache[id]['pointer'] = intervId;
    return { ok: true, message: 'task started', data: null };
  }

  /**
   * stop the task and give report to the user about how long the task has been running and anything important
   *
   * @param id { String } name/id of task runner
   * @return { JSON } summary report of what happened { error, data }
   */
  stop(id) {
    let cache = this[_cache];
    let intervId = cache[id]['pointer'];
    clearInterval(intervId);

    return { ok: true, message: 'task stopped', data: null };
  }

}


module.exports = TaskRunner;
