import template from "./score.component.html";
import { parseUrl} from "../../scripts/utils";
import {Component} from "../../scripts/components";
import "./score.component.css";

  export class ScoreComponent extends Component{
    constructor() {
      super(template);
      let params = parseUrl();
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);

    }

  init() {

    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size.toString();
    document.getElementById("time").innerText = this.time.toString();
  }
  }
