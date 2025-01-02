class BinaryNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const root = new BinaryNode("A");
const B = new BinaryNode("B");
const C = new BinaryNode("C");
const D = new BinaryNode("D");
const E = new BinaryNode("E");
const F = new BinaryNode("F");

root.left = B;
root.right = C;
B.left = D;
B.right = E;
C.left = F;

console.log(root);
