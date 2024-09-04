"use strict"
let myHttp = new XMLHttpRequest;
let row = document.querySelector(".row");
let choice = document.querySelector("select");
let search = document.querySelector("#search");

choice.addEventListener("change", function () {
    getData(choice.value);
});
search.addEventListener("change", function () {
    document.addEventListener("click", function (event) {
        if (event.target != row && event.target != choice)
            getData(search.value);
    });
});

getData('pizza');
function getData(input) {
    myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${input}`);
    myHttp.send()

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4) {
            let data = JSON.parse(myHttp.response);
            displayData(data.recipes);
        }
    });
}

function displayData(details) {
    let content = '';
    for (let i = 0; i < details.length; i++) {
        content += ` <div class="details col-md-4">
    <img class="w-100 mb-2" src="${details[i].image_url}" alt="">
    <p><b>Title:</b> ${details[i].title}</p>
    <p><b>Recipe Id:</b> ${details[i].recipe_id}</p>
    <p><b>Publisher:</b> ${details[i].publisher}</p>
    <p><b>Social Rank:</b> ${details[i].social_rank}</p>
</div>`;
    }
    row.innerHTML = content;
}
// C O L O R S //
let element = document.querySelectorAll(".color li");
var array = [];
for (let i = 0; i < element.length; i++) {
    array.push(element[i].getAttribute('data-color'));
    element[i].addEventListener("click", function () {
        document.body.classList.remove(...array);
        document.body.classList.add(this.getAttribute("data-color"));

    }, false);

}
console.log(array);