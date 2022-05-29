import TextItemView from "./textItemView.js";

export default class TextItemsView {
    constructor(appHtmlElement, textItems) {
        // appHtmlElement is a HTML element. It's used to refresh the list at the screen
        this.appHtmlElement = appHtmlElement;
        this.textItems = textItems;
    }
    toHtml() {
        // it collects all items' html
        let result = "";
        for (const textItem of this.textItems.items) {
            const textItemView = new TextItemView(textItem);
            result += textItemView.toHtml();
        }
        return result;
    }

    refresh() {
        // this is to update HTML explicitly 
        this.appHtmlElement.innerHTML = this.toHtml();
    }
}