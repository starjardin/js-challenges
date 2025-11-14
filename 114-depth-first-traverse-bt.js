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


/* 

            a
          /   \
         b     c
        / \   / \
       d   e f   g
            \
             h

*/

function depthFirstTraverse(tree, callback) {
    if (!tree) return;

    callback(tree);
    depthFirstTraverse(tree.left, callback);
    depthFirstTraverse(tree.right, callback);
}

depthFirstTraverse(root, (node) => {
    console.log(node.value);
});