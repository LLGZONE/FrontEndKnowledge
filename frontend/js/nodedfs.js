/**
 * <div>
 *  <div>
 *  </div>
 * </div>
 */

function nodeDfs(id) {
  const ele = document.getElementById(id)
  console.log(ele.tagName, ele.className)
  let children = ele.children
  for (let i = 0; i < children.length; i++) {
    dfs(children[i])
  }
}

function dfs(node) {
  console.log(node.tagName, node.className)
  let children = node.children
  for (let i = 0; i < children.length; i++) {
    dfs(children[i])
  }
}

export default nodeDfs
