class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Tree('a');

const treeB = new Tree('b');
const treeC = new Tree('c');
const treeD = new Tree('d');
const treeE = new Tree('e');
const treeF = new Tree('f');
const treeG = new Tree('g');
const treeH = new Tree('h');

root.left = treeB;
root.right = treeC;

treeB.left = treeD;
treeB.right = treeE;

treeC.left = treeF;
treeC.right = treeG;

treeE.right = treeH;

function reverseBT(tree) {
    if (!tree) return;

    // Swap the left and right children
    const temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;

    // Recursively reverse the left and right subtrees
    reverseBT(tree.left);
    reverseBT(tree.right);
}

console.log('Before reversal:', root);
reverseBT(root);
console.log('After reversal:', root);