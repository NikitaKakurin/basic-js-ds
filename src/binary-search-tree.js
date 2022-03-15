const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    if(!this.data){
      return null;
    }
    return this;
  }

  add(value) {
    const node = new BinarySearchTree()
    let current = this;
    if(!current.data){
      current.data=value;
      return;
    }
    
    while(current){
      if(current.data>value){
        if(!current.left){
          current.left = node;
          current.left.data = value;
          return;
        }
        current = current.left;
      }
      if(current.data<value){
        if(!current.right){
          current.right = node;
          current.right.data = value;
          return;
        }
        current = current.right;
      }
    }

  }

  has(value) {
    if(this.find(value)){
      return true
    }
    return false;
  }

  find( value ) {
    let node = this;
    while(node){
      if(node.data === value){
        return node;
      }
      if(node.data > value){
        node = node.left
      }else if(node.data < value){
        node = node.right
      }
    }
    return null;
  }

  remove( value ) {
    this.removeNode(this, value);
  }

  removeNode(node, value){
    if(!node){
      return null;
    }

    if(node.data === value){
      if(!node.left&&!node.right){
         node.data = null;
         node.left = null;
         node.right = null;
         return;
      }
      if(!node.right){
        node.data= node.left.data
        node.left= node.left.left
        node.right= node.left.right
        return;
      }
      if(!node.left){
        node.data= node.right.data
        node.left= node.right.left
        node.right= node.right.right
        return;
      }

      if(node.left&&node.right){
        let minNode = this.findMinNode(node.right)
        node.data=minNode.data
        this.removeNode(node.right,minNode.data)
        return node;
      }
    }
    if(node.data > value){
      this.removeNode(node.left,value)
      return;
    }
    if(node.data < value){
      this.removeNode(node.right,value)
      return ;
    }

  }
  
  min() {
    return this.findMinNode(this).data;
  }

  findMinNode(root){
    let node = root;
    while(node.left){
      node=node.left;
    }
    return node;
  }

  findMaxNode(root){
    let node = root;
    while(node.right){
      node=node.right;
    }
    return node;
  }

  max() {
    return this.findMaxNode(this).data;
  }
}

module.exports = {
  BinarySearchTree
};