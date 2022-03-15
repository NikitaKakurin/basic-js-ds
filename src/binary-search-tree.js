const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head=null;
  }

  root() {
    if(this.head===null){
      return null;
    }
    return this.head;
  }

  add(value) {
    const node = new Node(value)
    let current = this.head;
    if(current===null){
      this.head=node;
      return;
    }
    
    while(current){
      if(current.data>value){
        if(current.left===null){
          current.left = node;
          current.left.data = value;
          return;
        }
        current = current.left;
      }
      if(current.data<value){
        if(current.right===null){
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
    let node = this.head;
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
    this.removeNode(this.head, value);
  }

  removeNode(node, value, parent){
    if(!node){
      return null;
    }
    
    if(node.data === value){
      if(!node.left&&!node.right){
        if(parent){
          if(parent.data > value){
            parent.left=null
            return;
          }
          if(parent.data < value){
            parent.right=null;
            return ;
          }
        }
        node = null;
        return;
      }
      if(!node.right&&node.left){
        node.data = node.left.data
        node.right = node.left.right
        node.left = node.left.left
        return;
      }
      if(!node.left&&node.right){
        node.data = node.right.data
        node.left = node.right.left
        node.right = node.right.right
        return;
      }

      if(node.left&&node.right){
        let minNode = this.findMinNode(node.right);
        let minData = minNode.data;
        this.removeNode(node.right,minNode.data,node);
        node.data = minData;
        return node;
      }
    }
    if(node.data > value){
      this.removeNode(node.left,value,node)
      return;
    }
    if(node.data < value){
      this.removeNode(node.right,value,node)
      return ;
    }

  }
  
  min() {
    return this.findMinNode(this.head).data;
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
    return this.findMaxNode(this.head).data;
  }
}

module.exports = {
  BinarySearchTree
};