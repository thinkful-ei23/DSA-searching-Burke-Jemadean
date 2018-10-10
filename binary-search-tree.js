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

function main() {
  const bst = new BinarySearchTree();
  bst.insert(25);
  bst.insert(15);
  bst.insert(50);
  bst.insert(10);
  bst.insert(24);
  bst.insert(35);
  bst.insert(70);
  bst.insert(4);
  bst.insert(12);
  bst.insert(18);
  bst.insert(31);
  bst.insert(44);
  bst.insert(66);
  bst.insert(90);
  bst.insert(22);

  function preOrder(binarySearchTree) {
    //process node
    //recursively step left
    //recursively step right
    console.log(binarySearchTree.key);
    if (binarySearchTree.left) {
      preOrder(binarySearchTree.left);
    }
    if (binarySearchTree.right) {
      preOrder(binarySearchTree.right);
    }
  }

  function inOrder(binarySearchTree) {
    //recursively step left
    //process node    
    //recursively step right
    if (binarySearchTree.left) {
      inOrder(binarySearchTree.left);
    }
    console.log(binarySearchTree.key);
    if (binarySearchTree.right) {
      inOrder(binarySearchTree.right);
    }
  }

  function postOrder(binarySearchTree) {
    //recursively step left  
    //recursively step right
    //process node
    if (binarySearchTree.left) {
      postOrder(binarySearchTree.left);
    }
    if (binarySearchTree.right) {
      postOrder(binarySearchTree.right);
    }
    console.log(binarySearchTree.key);
  }


  postOrder(bst);

}

main();