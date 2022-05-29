export default class TextItemView {
    constructor(textItem) {
        this.textItem = textItem;
    }
    toHtml() {
        return `<p>${this.textItem.title}</p>`;
    }
}