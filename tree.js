/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current) {
        sum = sum + current.val;

        if (current.children) {
          for (let child of current.children) {
            toVisitStack.push(child);
          }
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let sum = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      console.log(current);
      if (current) {
        current.val % 2 === 0 ? (sum = sum + 1) : sum;

        console.log(sum);
        if (current.children) {
          for (let child of current.children) {
            toVisitStack.push(child);
          }
        }
      }
    }
    return sum;
  }
  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let sum = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      console.log(current);
      if (current) {
        current.val > lowerBound ? (sum = sum + 1) : sum;

        console.log(sum);
        if (current.children) {
          for (let child of current.children) {
            toVisitStack.push(child);
          }
        }
      }
    }
    return sum;
  }
}

module.exports = { Tree, TreeNode };
