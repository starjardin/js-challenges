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

function breadthFirstTraverse(tree, callback) {
    if (!tree) return;

    callback(tree);
    
    const queue = [];

    // We create a queue

    if (tree.left) queue.push(tree.left);
    if (tree.right) queue.push(tree.right);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        callback(currentNode);

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
}


breadthFirstTraverse(root, (node) => {
    console.log(node.value);
});