class LinkedList{
    constructor(list){
        this.list = [1,2,3,4];
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

let linkedlist = new LinkedList();

function appendValue(value){
    const node = new Node(value);
    
}

const head = (item) => {
    let head = new Node(item, head);
    return head;
}

console.log(linkedlist.list());