'use strict';
class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key; // if null, we have an empty tree
    this.value = value;
    this.parent = parent; // if null, it is the root
    this.left = null; // pointers to the child nodes
    this.right = null;
  }

  insert(key, value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }

    else if (key < this.key) {

      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this); // it is now the root of its own tree
      }
      else {
        this.left.insert(key, value); // the this is now this.left 
      }
    }
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
  //if the item is found at the root then return that value
    if (this.key === key) {
      return this.value;
    }

    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    //You have searched the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key === key) { // checking the parent of all the nodes
      if (this.left && this.right) { // once you find it, determine the children
        const successor = this.right._findMin(); // find the left most value in the right branch
        // can we do this.left._findMax(); ? and be equally ok
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }  
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key); // check the left branch and on
    }
    else if (key > this.key && this.right) {
      this.right.remove(key); // check the right branch and on
    }
    else {
      throw new Error('Key Error');
    }
  }
}

function printPreOrder(BST) {
  console.log(BST.key);
  if (BST.left) {
    printPreOrder(BST.left);
  }
  if (BST.right) {
    printPreOrder(BST.right);
  }
}

function printInOrder(BST) {
  if (BST.left) {
    printInOrder(BST.left);
  }
  console.log(BST.key);
  if (BST.right) {
    printInOrder(BST.right);
  }
}

function printPostOrder(BST) {
  if (BST.left) {
    printPostOrder(BST.left);
  }
  if (BST.right) {
    printPostOrder(BST.right);
  }
  console.log(BST.key);
}

function main() {
  const bst = new BinarySearchTree();
  const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  for (let i = 0; i < data.length; i++) {
    bst.insert(data[i]);
  }
  printInOrder(bst);
}

main();