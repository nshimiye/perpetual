'use strict';
/*
 * test the module's index file ( <root-folder>/index.js )
 * this file: <root-folder>/test/unit/index.js
 */
let expect = require('chai').expect,
    perpetual = require('../../index');
let TaskRunner = require('../../src/main/TaskRunner');
let initTaskRunner = perpetual.initTaskRunner,
    initDefaultRunner = perpetual.initDefaultRunner;


// test 1. => testing initTaskRunner
describe('#initTaskRunner', function() {

  // returns instance of taskRunner class (if inputs are correct )
  it('creates instance of taskRunner class if provided runnerType and options params are correct', function() {

    expect(
      initTaskRunner('SLACK', {token: 'fake-token', secret: 'fake-secret-key'})
    ).to.be.an.instanceof(TaskRunner);

  });

  // returns null (if no inputs are provided), null (if no inputs are provided)
  it('provide a null output if improper runnerType or options param are provided', function() {

    expect(
      initTaskRunner('NON_EXISTING_TYPE', {})
    ).to.be.an.instanceof(TaskRunner);
    expect(
      initTaskRunner('NON_EXISTING_TYPE', {})
    ).to.be.null;

  });

  // null (if no inputs are provided)
  it('does not create anything if no params are provided', function() {

    expect(
      initTaskRunner()
    ).to.be.null;

  });

});


// test 2. => testing initDefaultRunner
describe('#initDefaultRunner', function() {

  it('creates instance of taskRunner class if options param is formatted properly', function() {

    // let taskInstance = initDefaultRunner({ parameters: [ 'time_passed', 'start_time', 'end_time', 'last_output' ] });
    expect(
      initDefaultRunner({ parameters: [ 'time_passed', 'start_time', 'end_time', 'last_output' ] })
    ).to.be.an.instanceof(TaskRunner);

  });

  it('creates instance of taskRunner class if no options param is provided', function() {

    // let taskInstance = initDefaultRunner();
    expect(
      initDefaultRunner()
    ).to.be.an.instanceof(TaskRunner);

  });

  it('throws error if options is not formatted properly', function() {

    // let taskInstance = initDefaultRunner({ parameters: [ 'report' ] }); // @TODO this may not work properly because the function is run outside of expect
    expect(
      initDefaultRunner({ parameters: [ 'report' ] })
    ).to.throw(Error);

  });

});
