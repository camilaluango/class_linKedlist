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
    insertarPosicio(value, posicio){
        const nuevoNode = new node(value);
        if (posicio === 0){
            nuevoNode.next = this.head;
            this.head = nuevoNode;
            return;
        }

        let actual = this.head;
        let contador = 0;
        while (actual !== null && contador < posicio - 1){
            actual = actual.next;
            contador++;
        }
        if (actual === null){
            console.log("posicion fuera de los limites");
        }

        nuevoNode.next = actual.next;
        actual.next = nuevoNode;
    }
    eliminarPosicion(posicio) {
        if (this.head === null){
            console.log("la lista esta vacia");
        }
        if (posicio === 0){
            this.head = this.head.next;
            return;
        }

        let actual = this.head;
        let contador = 0;
        while (actual !== null && contador < posicio - 1){
            actual = actual.next;
            contador++;
        }
        if (actual === null || actual.next === null){
            console.log("posicion fuera de limite");
        }
        actual.next = actual.next.next;
    }

    mostrarLista() {
        let actual = this.head;
        while (actual !== null){
            console.log(actual.value);
            actual = actual.next;
        }
    }
}

const lista = new linkedlist();
lista.aggFinal(1);
lista.aggFinal(2);
lista.aggFinal(3);
lista.aggFinal(4);
lista.aggFinal(5);
lista.aggFinal(100);

console.log(lista.mostrarLista())