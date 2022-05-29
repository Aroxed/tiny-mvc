import TextItem from "./textItem.js";

export default class TextItems {
    constructor() {
        // items are stored here
        this.items = []; 
        // maxId is used to generate unique ID sequentially
        this.maxId = 0;
    }

    add(title) {
        // get a unique ID
        const id = this.maxId;
        // create an item
        let textItem = new TextItem(id, title);
        // add item to the list
        this.items.push(textItem);
        // add "1" to maxId for the next item 
        this.maxId++;
    }

    makeAllItemsLowerCase() {
        // update all items' titles
        for (let textItem of this.items) {
            textItem.makeLowerCase();
        }
    }
}