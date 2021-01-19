const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild = (node) => {
    if (this.children.length < 2) {
      this.children.push(node);
      console.log(`${node.name} child of ${this.name}`);
    } else console.log("child is an orphan.");
  };

  removeChild = (node) => {
    this.children = this.children.filter((child) => child !== node);
  };

  getChildName = (name) => {
    for (let child of this.children) {
      if (child.name === name) {
        return child;
      }
    }
    return null;
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

const root = new TreeNode("Alqattan");
let fullName = prompt("Enter full name (Write 'done' if your finished): ");

while (fullName !== "done") {
  let current = root;

  let names = fullName.split(" ").reverse();
  let firstName = names.pop();
  let lastName = names.shift();

  if (lastName === current.name) {
    if (names) {
      for (let name of names) {
        let child = current.getChildName(name);
        if (child) {
          current = child;
        } else {
          console.log("Person dose not exsist");
          break;
        }
      }
    }
    let newNode = new TreeNode(firstName);
    current.addChild(newNode);
  }
  console.log("--------------------------------------------------------------");
  fullName = prompt("Enter child name (Write 'done' if your finished): ");
}

root.traverse();

// const root = new TreeNode(familtName);
// const child1 = new TreeNode(items[0]);
// const child2 = new TreeNode(items[1]);

// root.addChild(child1);

// child1.addChild(child2);
// root.traverse();

// // To inter Full name and split
// let fullName = prompt("Enter full name: ");
// let items = fullName.split(" ");
// let familtName = items[items.length - 1];
// // console.log(items);
// //------------------------------
