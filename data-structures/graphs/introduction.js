/**
 * Tree is like a Graph and vice versa.
 * 
 * Types of Graphs
 * 1. Directed
 * 2. Undirected
 * 3. Weighted
 * 4. Unweighted
 * 5. Cyclic
 * 6. Acyclic
 * 
 * How to build a Graph
 * 1. Edge List
 * const graph = [[0, 2], [2, 3], [1, 3], [2, 1]]
 * 
 * 2. Adjacent List (node value is index of array)
 * const graph = [[2], [2, 3], [0, 1, 3], [1, 2]]
 * 
 * 3. Adjacent Matrix
 * const graph = {
 *      0: [0, 0, 1, 0], 
 *      1: [0, 0, 1, 1], 
 *      2: [1, 1, 0, 1], 
 *      3: [0, 1, 1, 0], 
 *  }
 * 
 * Pros
 * 1. Relationships
 * 
 * Cons
 * 1. Scaling is hard
 * 
 */