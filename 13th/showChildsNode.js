function showChild(node, index) {
    if (node.nodeType !== 1) {
        console.error('wrong node type');
    } else if (index < 0 || index > node.childNodes.length){
        console.error('incorrect index');
    } else {
        console.log(node.childNodes[index]);
    }  
}