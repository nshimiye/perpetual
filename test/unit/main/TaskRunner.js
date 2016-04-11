/*jshint mocha:true */
'use strict';
/*
 * test the module's index file ( <root-folder>/index.js )
 * this file: <root-folder>/test/unit/runners/default/index.js
 */
let expect = require('chai').expect;
let TaskRunner = require('../../../src/main/TaskRunner');

describe('#defineTask ', function() {
  // returns instance of taskRunner class (if inputs are correct )
  it('generates an id for the task', function() {
    let definition = function(a, b) { console.log( 'arg 1', a, 'arg 2', b); };
    let args = [ 1, 2];
    let context = null;
    expect(
      runnerInstance.defineTask(definition, args, context)
    ).to.be.an.instanceof(TaskRunner);

  });
  it('throws an error if the definition param is not a function', function() {
    let definition = function(a, b) { console.log( 'arg 1', a, 'arg 2', b); };
    let args = [ 1, 2];
    let context = null;
    expect(
      runnerInstance.defineTask(definition, args, context)
    ).to.throw(Error);

  });
  it('throws an error if no param provided', function() {

    expect(
      runnerInstance.defineTask()
    ).to.throw(Error);

  });
});

describe('#start ', function() {
  // returns instance of taskRunner class (if inputs are correct )
  it('generate json object with ok attr set to true after a call to start the task', function() {

    let definition = function(a, b) { console.log( 'arg 1', a, 'arg 2', b); };
    let args = [ 1, 2];
    let context = null;
    let id = runnerInstance.defineTask(definition, args, context);

    expect(
      runnerInstance.start(id)
    ).to.be.an.instanceof(TaskRunner); // @TODO rewrite the test

  });
});

describe('#stop ', function() {
  // returns instance of taskRunner class (if inputs are correct )
  it('generate json object with ok attr set to true after a call to stop the task', function() {

    let definition = function(a, b) { console.log( 'arg 1', a, 'arg 2', b); };
    let args = [ 1, 2];
    let context = null;
    let id = runnerInstance.defineTask(definition, args, context);
    runnerInstance.start(id);

    expect(
      runnerInstance.stop(id)
    ).to.be.an.instanceof(TaskRunner);  // @TODO rewrite the test

  });
});
