// ESERCIZIO:
// Rifare Rifare l'esercizio della to do list.
// ogni toDo sarà un oggetto, con due proprietà:
// - text
// - done (true/false) indica se toDo è stato fatto

// MILESTONE 1:
// Stampare all'interno di una lista, un item per ogni toDo.
// Se done è true, visualizzare toDo sbarrato.

// MILESTONE 2
// Predisporre un campo di input testuale e un pulsante "aggiungi"
// cliccando sul pulsante, il testoviene letto e crea un nuovo toDo
// che viene aggiunto alla lista toDo.

const { createApp } = Vue;

createApp ({
    data() {
        return {
            toDos: [
                {
                text: "Fare Coding",
                done: true,
            }, {
                text: "Avere crisi esistenziale",
                done: true,
            }, {
                text: "Fare la spesa",
                done: false,
            }, {
                text: "Cibarsi in tranquillità",
                done: false,
            }],
            newToDo: "",
            error: false
        };
    },
    methods: {
        addToDo () {
            if(this.newToDo.length > 0) {
                this.error = false;
    
                this.newToDo = this.newToDo[0].toUpperCase() + this.newToDo.substring(1);
        
                this.toDos.unshift(this.newToDo);
                this.newToDo = "";
            } else {
                this.error = true;
    
                setTimeout(() => {
                    this.error = false;
                }, 3000)
            }
        },  
        removeToDo(indexToRemove) {
            // console.log("rimuovi", indexToRemove);
            this.toDos.splice(indexToRemove, 1);
        }
    }

}).mount("#app");