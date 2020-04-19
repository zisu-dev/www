const os = require('os')
const { DefinePlugin } = require('webpack')
const gitRevision = require('git-revision')
const ciDetect = require('@npmcli/ci-detect')
const AsyncStylesheetWebpackPlugin = require('async-stylesheet-webpack-plugin')

const machine = process.env.CI_OVERRIDE || ciDetect() || os.hostname()

const enableHistory = !process.env.DISABLE_HISTORY
const inMainlandChina = !!process.env.IN_MAINLAND_CHINA

module.exports = {
  configureWebpack: {
    plugins: [
      new AsyncStylesheetWebpackPlugin(),
      new DefinePlugin({
        GIT_HASH: JSON.stringify(gitRevision('hash')),
        GIT_BRANCH: JSON.stringify(gitRevision('branch')),
        BUILD_DATE: JSON.stringify((new Date()).toLocaleString()),
        BUILD_MACHINE: JSON.stringify(machine),
        USE_HISTORY: JSON.stringify(enableHistory),
        MAINLAND_CHN: JSON.stringify(inMainlandChina)
      })
    ]
  }
}
