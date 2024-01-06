class LinkedList{
    constructor(list){
        this.list = list;
    }

    get list(){
        return this.showList();
    }

    set list(value){
        this.list.push(value);
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

let linkedlist = new LinkedList([1,2,3,4]);

function appendValue(value){
    const node = new Node(value);
    
}

const head = (item) => {
    let head = new Node(item, head);
    return head;
}

console.log(linkedlist.showList());