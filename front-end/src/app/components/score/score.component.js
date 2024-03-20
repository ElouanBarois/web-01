import template from "./score.component.html";
import {parseUrl} from "../../scripts/utils";
import {Component} from "../../scripts/components";
import "./score.component.css";

let environment = {
    api: {
        host: "http://localhost:8081",
    },
};

export class ScoreComponent extends Component {
    constructor() {
        super(template);
        let params = parseUrl();
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);
    }

    async init() {
        try {
            document.getElementById("name").innerText = this.name;
            document.getElementById("size").innerText = this.size.toString();
            document.getElementById("time").innerText = this.time.toString();
            await postScore(this.name, this.time, this.size);
            const scores = await fetchScores();
            displayHighScores(scores);
        } catch (error) {
            console.error("Error while initializing score component:", error);
        }
    }
}

async function postScore(name, time, size) {
    try {
        const response = await fetch(`${environment.api.host}/scores`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, time, size}),
        });
        if (!response.ok) {
            console.error("Failed to post score:", response.statusText);
        }
    } catch (error) {
        console.error("Error while posting score:", error);
    }
}

async function fetchScores() {
    try {
        const response = await fetch(`${environment.api.host}/scores`, {
            method: "GET",
        });
        if (response.ok) {
            return await response.json();
        } else {
            console.error("Failed to fetch scores:", response.statusText);
            return [];
        }
    } catch (error) {
        console.error("Error while fetching scores:", error);
        return [];
    }
}

function displayHighScores(scores) {
    scores.sort((a, b) => {
        if (a.size !== b.size) {
            return b.size - a.size;
        } else {
            return a.time - b.time;
        }
    });

    const highScoresTable = document.createElement("table");
    highScoresTable.innerHTML = `
        <thead>
            <tr>
                <th>Player Name</th>
                <th>Number of Pairs</th>
                <th>Time (seconds)</th>
            </tr>
        </thead>
        <tbody id="high-scores-body"></tbody>
    `;
    const highScoresBody = highScoresTable.querySelector("#high-scores-body");

    scores.forEach(score => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${score.name}</td>
            <td>${score.size}</td>
            <td>${score.time}</td>
        `;
        highScoresBody.appendChild(row);
    });

    const highScoresList = document.getElementById("high-scores");
    highScoresList.innerHTML = "";
    highScoresList.appendChild(highScoresTable);

}
