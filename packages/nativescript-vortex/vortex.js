
const Vortex = {}

Vortex.isNative = () => {
    return !!window.nsWebViewBridge
}

Vortex.getInitialContext = (fn) => {
    window.nsWebViewBridge.on('vortex.context', fn)
    window.nsWebViewBridge.emit('vortex.get-context')
}

Vortex.publish = (topic, data) => {
    window.nsWebViewBridge.emit(topic, data)
}

Vortex.subscribe = (topic, fn) => {
    window.nsWebViewBridge.on(topic, fn)
}

Vortex.unsubscribe = (topic, fn) => {
    window.nsWebViewBridge.off(topic, fn)
}

Object.freeze(Vortex)

export default Vortex;