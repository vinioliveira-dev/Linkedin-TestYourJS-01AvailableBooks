class Books {
    constructor(title, author, ISBN, stock = 0) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.stock = stock
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if (this._stock <= 0) {
            return "out of stock";
        } else if (this._stock < 10 && this._stock > 0) {
            return "low stock";
        } 
        
        return "in stock";
    }

    sell(copiesSold = 1) {
        this.stock -= copiesSold;
        
    }

    restock(number = 5) {
        this.stock += number;
    }

}