class LinkedList{
    constructor(list){
        this.list = list;
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

let linkedlist = new LinkedList([]);

function appendValue(value){
    const node = new Node(value);
    linkedlist.list.push(node);
}

const head = (item) => {
    let head = new Node(item, head);
    return head;
}


appendValue(1);
appendValue(3);

console.log(linkedlist);