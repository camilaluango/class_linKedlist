class node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedlist {
    constructor(){
        this.head = null;
    }
    aggFinal(value){
        const nuevoNode = new node(value);
        if(this.head === null) {
            this.head = nuevoNode;
        } else {
            let actual = this.head;
            while (actual.next !== null) {
                actual = actual.next;
            }
            actual.next = nuevoNode;
        }
    }

    mostrarLista() {
        let actual = this.head;
        while (actual !== null){
            console.log(actual.value);
            actual = actual.next;
        }
    }
}