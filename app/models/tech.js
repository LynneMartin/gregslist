
// Inside the Tech{} are the rules for what a tech item has to have.


export default class Tech {
    constructor(data) {
        this.type = data.type
        this.brand = data.brand
        this.description = data.description
        this.price = data.price
    }

    get Template() {
        return `
       <div class="col-md-4">
    <h4>Type: ${this.type}</h4>
    <h4>Brand: ${this.brand}</h4>
    <h4>Description: ${this.description}</h4>
    <h4>Price: ${this.price}</h4>
</div>
    `
    }

}