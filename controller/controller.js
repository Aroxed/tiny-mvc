import TextItems from "../model/textItems.js";
import TextItemsView from "../view/textItemsView.js";

export default class Controller {
    constructor() {
        // link to html element where the list is displayed
        const appElement = document.getElementById("app");
        // model
        this.textItems = new TextItems();
        // view
        this.textItemsView = new TextItemsView(appElement, this.textItems);

        // html element's on-click handlers
        document.getElementById("makeTextLowerCase").addEventListener( "click", (e)=> {this.makeAllLowerCase()});
    }

    makeAllLowerCase() {
        // change model
        this.textItems.makeAllItemsLowerCase();
        // refresh html part (explicit resreshing instead of Proxy class)
        this.textItemsView.refresh();
    }

    add(title) {
        // add to model
        this.textItems.add(title);
        // refresh html part (explicit resreshing instead of Proxy class)
        this.textItemsView.refresh();
    }
}