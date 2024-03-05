// TODO #import-html: use ES default imports to import game.html as template
import template from "../views/score.html";
import { parseUrl} from "./utils";

  // TODO #class: use the ES6 class keyword
  /* class ScoreComponent constructor */
  export function ScoreComponent() {
    // TODO #extends: call super(template)
    var params = parseUrl();
    this.template = template;
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }


  // TODO #class: turn function into a method of ScoreComponent
  ScoreComponent.prototype.init = function init() {

    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size.toString();
    document.getElementById("time").innerText = this.time.toString();
  };
