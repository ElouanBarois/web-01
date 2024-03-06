import {Component} from "../../../scripts/components";
import "./card.component.css";
import template from "./card.component.html";

import back from "./Assets/cards/back.png";
import card0 from "./Assets/cards/card-0.png";
import card1 from "./Assets/cards/card-1.png";
import card2 from "./Assets/cards/card-2.png";
import card3 from "./Assets/cards/card-3.png";
import card4 from "./Assets/cards/card-4.png";
import card5 from "./Assets/cards/card-5.png";
import card6 from "./Assets/cards/card-6.png";
import card7 from "./Assets/cards/card-7.png";
import card8 from "./Assets/cards/card-8.png";
import card9 from "./Assets/cards/card-9.png";

let CARDS_IMAGE = [
    back,
    card0,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
];


export class CardComponent extends Component{
    constructor(id) {
        super(template)
        // is this card flipped?
        this._flipped = false;

        // has the matching card has been discovered already?
        this.matched = false;

        this._elt = document.createElement("div");
        this._elt.innerHTML = this.template;
        this._elt = this._elt.firstElementChild;
        this._id = id;

        this._imageElt = this.getElement().querySelector(".card-wrapper");
        this._imageElt.querySelector("img.front-face").src =
            CARDS_IMAGE[this._id + 1];
        this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];

    }


    getElement() {
        return this._elt;
    };

    flip() {
        this._imageElt.classList.toggle("flip");
        this._flipped = !this._flipped;
    };

    equals(card) {
        return card._id === this._id;
    };


    get flipped(){
        return this._flipped;
    }

}