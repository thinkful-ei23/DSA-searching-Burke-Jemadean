'use strict';
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  bfs(values=[]) {
    const queue = [this];

    while (queue.length) {
      const node = queue.shift();
      values.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return values;
  }
}