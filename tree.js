const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild = (node) => {
    this.children.push(node);
  };

  removeChild = (node) => {
    this.children = this.children.filter((child) => child !== node);
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
}

// To inter Full name and split
let fullName = prompt("Enter full name: ");
let items = fullName.split(" ");
let familtName = items[items.length - 1];
// console.log(items);
//------------------------------

const root = new TreeNode(familtName);
const child1 = new TreeNode(items[0]);
const child2 = new TreeNode(items[1]);

root.addChild(child1);
// root.addChild(child2);

child1.addChild(child2);
// root.removeChild(child2);
root.traverse();
