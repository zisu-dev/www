const hub = 'http://localdev.zhangzisu.cn:8081/embed'

export const api = new Promise((resolve, reject) => {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = hub
  iframe.addEventListener('load', () => {
    resolve(iframe.contentWindow.api)
  })
  document.body.appendChild(iframe)
})
