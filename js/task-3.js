class StringBuilder{
    #value;
    constructor(initalvalue) {
        this.#value = initalvalue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += str;
    }
    padStart(str) {
        this.#value = str + this.#value;
    }
    padBoth(str) {
        this.padEnd(str);
        this.padStart(str);
        //this.#value = str + this.#value + str;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
