global.path = require('path')
global.chai = require('chai')
global.chaiAsPromised = require('chai-as-promised')
global.chai.use(global.chaiAsPromised)
global.expect = chai.expect
global.Application = require('spectron').Application
