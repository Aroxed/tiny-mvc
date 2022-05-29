export default class TextItem {
    constructor(id, title) {
        this.title = title
        this.id = id
    }
    
    makeLowerCase() {
        // update the title
        this.title = this.title.toLowerCase();
    }
}