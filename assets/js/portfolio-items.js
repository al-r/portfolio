// var data = require('../data/portfolio-items.json');
// // require(['../data/portfolio-items.json'], function(data){
//     var portfolio_items = JSON.parse(data.portfolio_items);
// // });

portfolio_items = [
    {
        "company": "BBC",
        "description": "test 1",
        "img_src": "assets/img/posts/logo-ptk-grey-768x1122.png"
    },
    {
        "company": "Codevember",
        "description": "test 2",
        "img_src": "assets/img/posts/logo-ptk-grey-768x1122.png"
    },
    {
        "company": "Lime Creative",
        "description": "test 3",
        "img_src": "assets/img/posts/logo-ptk-grey-768x1122.png"
    }
];

function addJsonData(selectedItem) {
    if (selectedItem === "") {
        document.getElementById("portfolio-item").innerHTML = "";
    } else {
        let text = "";
        // text = "<h1>" + portfolio_items[selectedItem].company + "</h1>"
        text += "<p>" + portfolio_items[selectedItem].description + "</p>"
        text += "<img src=" + portfolio_items[selectedItem].img_src + " />"
        document.getElementById("portfolio-item").innerHTML = text;
    }
}

function generateSelectOptions() {
    let select = document.getElementById("select-portfolio-item");

    for (let key in portfolio_items) {
        let opt = document.createElement("option");
        opt.className = "filters__item"
        opt.value = key;
        opt.innerHTML = portfolio_items[key].company;
        select.appendChild(opt);
    }
}

// Execute commands
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function(){
        generateSelectOptions();
    }, 500);
 }, false);