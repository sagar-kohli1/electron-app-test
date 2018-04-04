/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */
import { autoUpdater } from 'electron-updater'
process.env.NODE_ENV = 'development'
// debugger
//To show dev tools on the main app set it to true
require('electron-debug')({ showDevTools: true })

require('electron').app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
     .then(() => {})
     .catch(err => {
       console.log('Unable to install `vue-devtools`: \n', err)
     })
})

require('./index')

// autoUpdater.on('update-downloaded', () => {
//   debugger
//   alert('sasaa')
//   autoUpdater.setFeedURL('http://localhost/Release/updates.json')
//   autoUpdater.quitAndInstall()
// })

require('electron').app.on('ready', () => {
  // if (process.env.NODE_ENV === 'production')
  debugger
  console.log('sasa')
  // autoUpdater.setFeedURL('https://github.com/iffy/electron-updater-example/releases/download/v0.5.0/')
  autoUpdater.setFeedURL('https://github.com/SagarKohli/TestApp')
  autoUpdater.checkForUpdates()
})
