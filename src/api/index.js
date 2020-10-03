const hub = 'https://hub.zhangzisu.cn/embed.html'

export const api = new Promise((resolve, reject) => {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = hub
  iframe.addEventListener('load', () => {
    resolve(iframe.contentWindow.api)
  })
  document.body.appendChild(iframe)
})
