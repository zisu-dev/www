const os = require('os')
const { DefinePlugin } = require('webpack')
const gitRevision = require('git-revision')
const ciDetect = require('@npmcli/ci-detect')

const machine = process.env.CI_OVERRIDE || ciDetect() || os.hostname()

const HistoryBlacklist = [
  'coding'
]

const MainlandChina = [
  'coding'
]

const enableHistory = (!!process.env.ENABLE_HISTORY) ||
  !HistoryBlacklist.includes(machine)
const inMainlandChina = (!!process.env.IN_MAINLAND_CHINA) ||
  MainlandChina.includes(machine)

module.exports = {
  configureWebpack: {
    plugins: [
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
