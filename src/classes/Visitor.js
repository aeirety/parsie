class Visitor {

    constructor(query, object) {
        this.query = query;
        this.original = query;
        this.object = object;
    }

    sub(length) {
        return this.query = this.query.substring(length);
    }

}

// Exports

module.exports = Visitor;