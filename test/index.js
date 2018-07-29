'use strict'

const Application = require('spectron').Application
const electron = require('electron')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const path = require('path')
const setup = require('./setup')

chai.should()
chai.use(chaiAsPromised)

const timeout = process.env.CI ? 30000 : 10000

describe('Welcome Rigenera', function () {
  this.timeout(timeout)

  let app

  const startApp = () => {
    app = new Application({
      path: electron,
      args: [
        path.join(__dirname, '..')
      ],
      waitTimeout: timeout
    })

    return app.start().then((ret) => {
      setup.setupApp(ret)
    })
  }

  const restartApp = () => {
    return app.restart().then((ret) => {
      setup.setupApp(ret)
    })
  }

  before(() => {
    setup.removeStoredPreferences()
    return startApp()
  })

  after(() => {
    if (app && app.isRunning()) {
      return app.stop()
    }
  })

  it('checks hardcoded path for userData is correct', function () {
    return app.client.execute(() => {
      return require('electron').remote.app.getPath('userData')
    }).then((result) => {
      return result.value
    }).should.eventually.equal(setup.getUserDataPath())
  })

  it('opens a window displaying the about page', function () {
    return app.client.getWindowCount().should.eventually.equal(1)
      .browserWindow.isMinimized().should.eventually.be.false
      .browserWindow.isDevToolsOpened().should.eventually.be.false
      .browserWindow.isVisible().should.eventually.be.true
      .browserWindow.isFocused().should.eventually.be.true
      .browserWindow.getBounds().should.eventually.have.property('width').and.be.above(0)
      .browserWindow.getBounds().should.eventually.have.property('height').and.be.above(0)
      .browserWindow.getTitle().should.eventually.equal('Welcome Rigenera')
      .waitForVisible('#about-modal').should.eventually.be.true
      .isVisible('.js-nav').should.eventually.be.false
      .click('button[id="get-started"]').pause(500)
      .isVisible('#about-modal').should.eventually.be.false
      .isVisible('.js-nav').should.eventually.be.true
  })

  describe('when clicking on a section from the nav bar', function () {
    it('it shows the selected section in the main area', function () {
      return app.client.dismissAboutPage()
        .selectSection('windows')
        .isExisting('button.is-selected[data-section="windows"]').should.eventually.be.true
    })
  })

  describe('when the app is restarted after use', function () {
    it('it launches at last visted section & demo', function () {
      let onlyFirstVisible = Array(30).fill(false)
      onlyFirstVisible[0] = true

      return app.client.waitForVisible('#windows-section')
        .then(restartApp)
        .then(function () {
          return app.client.waitForVisible('#windows-section')
        })
    })
  })

  it('does not contain any accessibility warnings or errors', function () {
    return app.client.dismissAboutPage()
      .auditSectionAccessibility('app')
      .auditSectionAccessibility('windows')
      .auditSectionAccessibility('crash-hang')
  })
})
