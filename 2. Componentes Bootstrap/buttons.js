"use strict";

function checkButton() {
    document.getElementById('check-button').checked = !document.getElementById('check-button').checked;
    if (document.getElementById('check-button').checked) {
        document.getElementById('label-check').className = "btn btn-warning";
    } else {
        document.getElementById('label-check').className = "btn btn-warning active";
    }
}

function checkBox() {
    document.getElementById('check-box').checked = !document.getElementById('check-box').checked;
}