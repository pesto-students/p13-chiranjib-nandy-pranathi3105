function topologicalSort(vertices, adjacencyMatrix) {
    const visited = new Array(vertices).fill(false);
    const stack = [];
  
    function dfs(vertex) {
      visited[vertex] = true;
  
      for (let i = 0; i < vertices; i++) {
        if (adjacencyMatrix[vertex][i] === 1 && !visited[i]) {
          dfs(i);
        }
      }
  
      stack.push(vertex);
    }
  
    for (let i = 0; i < vertices; i++) {
      if (!visited[i]) {
        dfs(i);
      }
    }
  
    return stack.reverse();
  }
  
  // Get user input for the number of vertices and adjacency matrix
  const vertices = parseInt(prompt("Enter the number of vertices:"));
  const adjacencyMatrix = [];
  console.log("Enter the adjacency matrix (0s and 1s):");
  
  for (let i = 0; i < vertices; i++) {
    adjacencyMatrix.push(prompt().split(' ').map(Number));
  }
  
  // Perform Topological Sort on the adjacency matrix
  const sortedVertices = topologicalSort(vertices, adjacencyMatrix);
  
  // Display the sorted vertices
  console.log("Sorted Vertices:");
  console.log(sortedVertices.join(' -> '));
  