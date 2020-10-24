import _ConvertToVirtualNode from 'html-to-vdom'
import VirtualNode from 'virtual-dom/vnode/vnode.js'
import VirtualText from 'virtual-dom/vnode/vtext.js'

const ConvertToVirtualNode = _ConvertToVirtualNode({ 'VNode': VirtualNode, 'VText': VirtualText })

class Utility {

  static convertToNode(...parameter) {
    return ConvertToVirtualNode(...parameter)
  }

}

export default Utility