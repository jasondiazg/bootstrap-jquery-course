"use strict";

$(document).ready(setDefaults);

function setDefaults() {
    $("#btn-get-chuck-norris-joke").click(getChuckNorrisJokeByQuery);
    $(".btn-get-random-joke").on("click", getChuckNorrisJoke);
    $("button:last").on({ click: getChuckNorrisJokeByCategory });
    getCategories();
    getChuckNorrisJoke();
    getFootballApiData();
}

function showSweetAlert(options) {
    if (options.isModal) {
        const toast = swal.mixin({ toast: true, position: options.position ? options.position : 'bottom-end', showConfirmButton: false, timer: 3000 });
        toast({ type: options.type ? options.type: 'success', title: options.title ? options.title : '' });
    } else {
        swal({ type: options.type ? options.type: 'success', title: options.title ? options.title : '', text: options.text ? options.text : ''});
    }
}

function getChuckNorrisJoke() {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        success: (result, status, xhr) =>
                {
                    showSweetAlert({ isModal: true, title: 'Chuck Norris Joke consulted successfully' });
                    let joke = new Array(result);
                    showJokes(joke);
                },
        error: (xhr, status, error) => 
                { 
                    showSweetAlert({ type: 'error', title: 'Error', text: "Error to get Chuck Norris Joke. Try again! Ref: " + error + ". Status: " + status })
                }
    });
}

function getCategories() {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/categories",
        type: "GET",
        success: (result, status, xhr) =>
                {
                    showSweetAlert({ isModal: true, title: 'Chuck Norris Categories consulted successfully' });
                    showCategories(result);
                },
        error: (xhr, status, error) => 
                { 
                    showSweetAlert({ type: 'error', title: 'Error', text: "Error to get Chuck Norris Categories. Try again! Ref: " + error + ". Status: " + status })
                }
    });
}

function getChuckNorrisJokeByCategory() {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random?category=" + $("#categories").val(),
        type: "GET",
        success: (result, status, xhr) =>
                {
                    showSweetAlert({ isModal: true, title: 'Chuck Norris Jokes consulted successfully' });
                    let joke = new Array(result);
                    showJokes(joke);
                },
        error: (xhr, status, error) => 
                { 
                    showSweetAlert({ type: 'error', title: 'Error', text: "Error to get Chuck Norris Joke. Try again! Ref: " + error + ". Status: " + status })
                }
    });
}

function getChuckNorrisJokeByQuery() {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/search?query=" + $("#input-query").val(),
        type: "GET",
        success: (result, status, xhr) =>
                {
                    showSweetAlert({ isModal: true, title: 'Chuck Norris Jokes consulted successfully' });
                    let joke = result.result;
                    showJokes(joke);
                },
        error: (xhr, status, error) => 
                { 
                    showSweetAlert({ type: 'error', title: 'Error', text: "Error to get Chuck Norris Joke. Try again! Ref: " + error + ". Status: " + status })
                }
    });
}

function showCategories(categories) {
    let select = $("select");
    categories.forEach((category) => {
        let option = "<option>" + category + "</option>";
        select.append(option);
    });
}

function showJokes(jokes) {
    let table = $("table"),
        tbody = $("tbody"),
        tr, td;

    if (tbody.length > 0)
        //table.removeChild(tbody);
        tbody.remove();

    tbody = $("<tbody></tbody>");
    
    //tbody.setAttribute("id", "tbody");
    tbody.attr("id", "tbody");
    
    //table.appendChild(tbody);
    table.append(tbody);

    jokes.forEach((joke) => {
        tr = $("<tr></tr>");

        td = $("<td></td>");
        //td.innerHTML = joke.id;
        td.html(joke.id);
        tr.append(td);

        td = $("<td></td>");
        td.html(joke.value);
        tr.append(td);

        td = $("<td></td>");
        let a = $("<a></a>");
        a.attr("href", joke.url);
        a.html(joke.url);
        td.append(a);
        tr.append(td);

        td = $("<td></td>");
        let img = $("<img></img>");
        img.attr("src", joke.icon_url);
        td.append(img);
        tr.append(td);

        tbody.append(tr);
    });

    // document.getElementById("total").innerText = "Jokes found: " + jokes.length;
    $("h5").text("Jokes found: " + jokes.length);
}



function getFootballApiData() {
    $.ajax({
        url: "https://api.football-data.org/v2/competitions?areas=2224",
        headers: { 'X-Auth-Token': '21feb114d68e483a967b9dc06e696011' },
        type: "GET",
        success: (result, status, xhr) =>
                {
                    showSweetAlert({ isModal: true, title: 'Areas consulted successfully' });
                    console.log(result);
                },
        error: (xhr, status, error) => 
                { 
                    showSweetAlert({ type: 'error', title: 'Error', text: "Error to get Areas. Try again! Ref: " + error + ". Status: " + status })
                }
    });
}