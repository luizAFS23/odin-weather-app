class LinkedList{
    constructor(list){
        this.list = list;
    }

    get list(){
        return this.showList();
    }

    showList(){
        return this.list;
    }
}

class Node{
    next = null;
    value = null;

    constructor(element, next){
        this.value = element;
        this.next = next;
    }
}

function appendValue(value){
    const node = new Node(value);

}

let linkedlist = new LinkedList();
console.log(node.next);