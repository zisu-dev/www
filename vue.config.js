const os = require('os')
const { DefinePlugin } = require('webpack')
const gitRevision = require('git-revision')
const ciDetect = require('@npmcli/ci-detect')

const machine = ciDetect() || os.hostname()

module.exports = {
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        GIT_HASH: JSON.stringify(gitRevision('hash')),
        GIT_BRANCH: JSON.stringify(gitRevision('branch')),
        BUILD_DATE: JSON.stringify((new Date()).toLocaleString()),
        BUILD_MACHINE: JSON.stringify(machine)
      })
    ]
  }
}
