
class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
    }
}

const node1 = new Node(5)
const node2 = new Node(6)
const node3 = new Node(10)

node1.left = node2
node2.right = node3