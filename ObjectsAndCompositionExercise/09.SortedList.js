function createSortedList() {
    class List {
        constructor() {
            this.arr = [];
            this.size = 0;
        }        
        add(element) {
            this.arr.push(element);
            this.size++;
            return this.arr.sort(function(a, b){return a - b});
        }
        remove(index) {
            if (index >= 0 && index < this.arr.length) {
                this.arr.splice(index, 1);
                this.size--;
            }         
            return this.arr.sort(function(a, b){return a - b});
        }
        get(index) {
            if (index >= 0 && index < this.arr.length) {
                return this.arr[index];
            }     
        }
    }

    let obj = new List();

    obj.arr.sort(function(a, b){return a - b});
    
    return obj;
}