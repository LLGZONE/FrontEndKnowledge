class Graph {
  constructor(vetrics, edges) {
    this.vetrics = vetrics || []
    this.edges = new Map(edges || [])
  }

  addVertex(v) {
    this.vetrics.push(v)
    this.edges.set(v, [])
  }

  addEdge(v, w) {
    let vedge = this.edges.get(v)
    vedge.push(w)
    let wedge = this.edges.get(w)
    wedge.push(v)
    this.edges.set(v, vedge)
    this.edges.set(w, wedge)
  }

  dfs() {
    let visit = []
    for (let i = 0; i < this.vetrics.length; i++) {
      if (!visit[this.vetrics[i]]) {
        dfsVisit.call(this, this.vetrics[i])
      }
    }

    function dfsVisit(v) {
      console.log(v)
      visit[v] = true
      let u = this.edges.get(v)
      for (let i = 0; i < u.length; i++) {
        if (!visit[u[i]]) {
          dfsVisit.call(this, u[i])
        }
      }
    }
  }

  plainDfs() {
    let visit = []
    if (this.vetrics.length < 0) return
    let stack = [this.vetrics[0]]
    while (stack.length > 0) {
      let v = stack.pop()
      if (!visit[v]) {
        console.log(v)
        visit[v] = true
      }
      let u = this.edges.get(v)
      for (let i = u.length - 1; i >= 0; i--) {
        if (!visit[u[i]]) {
          stack.push(u[i])
        }
      }
    }
  }

  bfs() {
    if (this.vetrics.length < 0) return
    let visit = []
    let queue = []
    queue.push(this.vetrics[0])
    while (queue.length > 0) {
      let v = queue.shift()
      if (!visit[v]) {
        console.log(v)
        visit[v] = true
      }
      let u = this.edges.get(v)
      for (let i = 0; i < u.length; i++) {
        if (!visit[u[i]]) {
          queue.push(u[i])
        }
      }
    }
  }
}

var graph = new Graph()
var vertices = [1, 2, 3, 4, 5]
for (var i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i])
}
graph.addEdge(1, 4) // 增加边
graph.addEdge(1, 3)
graph.addEdge(2, 3)
graph.addEdge(2, 5)
graph.dfs()
console.log('dfs')
graph.plainDfs()
console.log('bfs')
graph.bfs()
