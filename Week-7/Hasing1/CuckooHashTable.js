class CuckooHashTable {
    constructor(size) {
      this.size = size;
      this.table1 = new Array(size).fill(null);
      this.table2 = new Array(size).fill(null);
    }
  
    hashFunction1(key) {
      return key % this.size;
    }
  
    hashFunction2(key) {
      return Math.floor(key / this.size) % this.size;
    }
  
    insert(key, value, table, maxAttempts) {
      for (let attempts = 0; attempts < maxAttempts; attempts++) {
        const currentTable = table === this.table1 ? this.table2 : this.table1;
        const index = table === this.table1 ? this.hashFunction1(key) : this.hashFunction2(key);
  
        if (currentTable[index] === null) {
          currentTable[index] = { key, value };
          return true;
        } else {
          // Swap the current entry with the new entry and reinsert the old entry
          const tempKey = currentTable[index].key;
          const tempValue = currentTable[index].value;
          currentTable[index] = { key, value };
          key = tempKey;
          value = tempValue;
          table = currentTable;
        }
      }
  
      // If the maximum number of attempts is reached, rehash and try again
      this.rehash();
      return this.insert(key, value, table, maxAttempts);
    }
  
    rehash() {
      this.size *= 2;
      const oldTable1 = this.table1;
      const oldTable2 = this.table2;
      this.table1 = new Array(this.size).fill(null);
      this.table2 = new Array(this.size).fill(null);
  
      // Reinsert elements from the old tables into the new tables
      oldTable1.forEach((entry) => {
        if (entry !== null) {
          this.insert(entry.key, entry.value, this.table1, this.size);
        }
      });
  
      oldTable2.forEach((entry) => {
        if (entry !== null) {
          this.insert(entry.key, entry.value, this.table2, this.size);
        }
      });
    }
  
    displayTables() {
      console.log("HashTable 1:");
      this.table1.forEach((entry, index) => {
        if (entry !== null) {
          console.log(`${entry.key} ${entry.value}`);
        }
      });
  
      console.log("HashTable 2:");
      this.table2.forEach((entry, index) => {
        if (entry !== null) {
          console.log(`${entry.key} ${entry.value}`);
        }
      });
    }
  }
  
  function main() {
    const size = 5; // Initial size of the hash tables
    const cuckooHashTable = new CuckooHashTable(size);
  
    // Prompt the user to enter key-value pairs
    console.log("Enter key-value pairs (e.g., 12 apple):");
    console.log("Enter an empty line to finish.");
    let input = prompt("Enter a key-value pair: ");
  
    while (input !== "") {
      const [key, value] = input.split(" ");
      cuckooHashTable.insert(parseInt(key), value, cuckooHashTable.table1, size);
      input = prompt("Enter a key-value pair: ");
    }
  
    // Display the final hash tables
    cuckooHashTable.displayTables();
  }
  
  // Call the main function to start the program
  main();
  