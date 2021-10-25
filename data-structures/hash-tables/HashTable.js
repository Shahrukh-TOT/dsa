class HashTable {
    constructor(size) {
        this.data = new Array(size);
    };

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) this.data[address] = [];
        this.data[address].push([key, value]);

        console.log(this.data);
    } // O(1)

    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if (!currentBucket) return undefined;
        for (let i = 0; i < currentBucket.length; i++) {
            const pair = currentBucket[i];
            if (pair[0] === key) return pair[1];
        }
    } // O(1), in collision O(n) rarely

    keys() {
        let keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            const currentBucket = this.data[i];
            if (currentBucket) {
                for (let j = 0; j < currentBucket.length; j++) {
                    const pair = currentBucket[j];
                    keysArray.push(pair[0]);
                }
            }
        }
        return keysArray;
    } // O(n^2)
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 1000);
myHashTable.set('apples', 34);
console.log(myHashTable.get('apples'));

console.log(myHashTable.keys());
// myHashTable.get('grapes');