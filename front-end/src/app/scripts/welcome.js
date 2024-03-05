// TODO #import-html: use ES default imports to import welcome.html as template
import template from "../views/welcome.html";
import {Component} from "./components";

  export class WelcomeComponent extends Component{
    constructor() {
        super(template);
    }


    init() {
      let form = document.querySelector("form.form-signin");

      form.addEventListener(
          "submit",
          // TODO #arrow-function: use arrow function instead.
          function (event) {
            event.preventDefault();
            if (form.checkValidity() === false) {
              event.stopPropagation();
              form.classList.add("was-validated");
            } else {
              let name = event.srcElement.querySelector("#nickname").value;
              let size = parseInt(event.srcElement.querySelector("#size").value);

              this._startGame(name, size);
            }
          }.bind(this),
          false
      );

      return this;
    };
     _startGame(name, size) {
      let gamePage = './#game';
      // TODO #template-literals:  use template literals (backquotes)
      window.location = gamePage + "?name=" + name + "&size=" + size;
    }
  }