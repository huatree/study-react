// 实例化 myEventEmitter
const myEvent = new myEventEmitter()
// 编写一个简单的 handler
const testHandler = function (params) {
  console.log(`test事件被触发了，testHandler 接收到的入参是${params}`)
}
// 监听 test 事件
myEvent.on('test', testHandler)
// 在触发 test 事件的同时，传入希望 testHandler 感知的参数
myEvent.emit('test', 'newState')
