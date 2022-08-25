// var data = require('../data/portfolio-items.json');
// // require(['../data/portfolio-items.json'], function(data){
//     var portfolio_items = JSON.parse(data.portfolio_items);
// // });

portfolio_items = [
    {
        "company": "BBC",
        "description": "Creation and maintenance of web applications developed in Angular, AngularJS, Laravel PHP & NodeJS. UI and UX design of applications.",
        "img_src": "assets/img/posts/logo-ptk-grey-768x1122.png",
        "categories": ["development", "management","design"],
        "skills": ["javascript", "typescript", "Angular", "AngularJS", "NodeJS", "PHP", "Laravel", "AWS", "Python", "Machine Learning", "Artifial Intelligence", "Pandas", "Numpy", "Sklearn", "Github","Photoshop", "Illustrator", "XDesign", "Agile", "JIRA"]
    },
    {
        "company": "Codevember",
        "description": "Codevember is a challenge to produce one code-work based on a given theme. I usually like to challenge myself and do CSS-only animation.",
        "img_src": "assets/img/posts/css-only-saturn.png",
        "categories": ["development", "design"],
        "skills": ["CSS", "HTML"]
    },
    {
        "company": "Lime Creative",
        "description": "Design of calendar pages for Lime Creative.",
        "img_src": "assets/img/posts/calendar-lime-1-768x826.png",
        "categories": ["design"],
        "skills": ["Illustrator", "Photoshop"]
    },
    {
        "company": "Alison Price",
        "description": "Developed a Wordpress website for Alison Price.",
        "img_src": "assets/img/posts/alisonprice.png",
        "categories": ["development"],
        "skills": ["Wordpress", "CSS", "HTML", "PHP", "Javascript"]
    },
    {
        "company": "CASS",
        "description": "Creation of HTML email  and newsletter templates.",
        "img_src": "assets/img/posts/cass.png",
        "categories": ["development"],
        "skills": ["CSS", "HTML", "Dotmailer"]
    },
    {
        "company": "Delacroix Museum",
        "description": "Project management on Delacroix Museum's app on Android and IOS.",
        "img_src": "assets/img/posts/delacroix.png",
        "categories": ["management"],
        "skills": ["CSS", "HTML", "Dotmailer"]
    },
    {
        "company": "Décideurs TV",
        "description": "Redesign of the website of a web TV.",
        "img_src": "assets/img/posts/dtv.png",
        "categories": ["design"],
        "skills": ["photoshop", "illustrator"]
    },
    {
        "company": "DWSN",
        "description": "Creation of a website in Worpress.",
        "img_src": "assets/img/posts/dwsn.png",
        "categories": ["development"],
        "skills": ["Wordpress", "CSS", "HTML", "PHP", "Javascript"]
    },
    {
        "company": "Fontainebleau Castle",
        "description": "Project management on a learning game for the Fontainebleau Castle for Androi and optimised to work on tablets.",
        "img_src": "assets/img/posts/fontainebleau-768x470.png",
        "categories": ["management"],
        "skills": ["android", "photoshop"]
    },
    {
        "company": "Gaggenau",
        "description": "Reskining of an existing website. Creation of a HTML email template.",
        "img_src": "assets/img/posts/gaggenau.png",
        "categories": ["development"],
        "skills": ["CSS", "HTML"]
    },
    {
        "company": "GSMA",
        "description": "Maintenance of a Wordpress website.",
        "img_src": "assets/img/posts/gsma.png",
        "categories": ["development"],
        "skills": ["Wordpress", "HTML", "CSS", "PHP", "javascript"]
    },
    {
        "company": "IFS",
        "description": "Development of a HTML5 animation using Hype.",
        "img_src": "assets/img/posts/ifs.png",
        "categories": ["development"],
        "skills": ["HTML5", "Hype"]
    },
    {
        "company": "Louvre Museum",
        "description": "Project management on audioguides for temporary exhibition, 'Louvre Abu Dhabi, Birth of a museum', and on the opening of the decorative art aisle. Audioguides available on Android, IOS ad Nintendo DS.",
        "img_src": "assets/img/posts/louvre.png",
        "categories": ["management"],
        "skills": ["Basecamp"]
    },
    {
        "company": "Museomix",
        "description": "Project developed during a hackathon in order to tell the story of a wallpaper.",
        "img_src": "assets/img/posts/museomix.png",
        "categories": ["design", "development"],
        "skills": ["photoshop", "json"]
    },
    {
        "company": "Museosphere",
        "description": "360 degree panorama developed using KR Pano in order to assist school to prepare the visit of Paris Museums.",
        "img_src": "assets/img/posts/museosphere.png"
    },
    {
        "company": "Parsley In Time",
        "description": "Maintenance of a bespoked website developed in PHP, JS and HTML.",
        "img_src": "assets/img/posts/parsleyintime.png",
        "categories": ["development"],
        "skills": ["PHP", "HTML", "CSS"]
    },
    {
        "company": "Retro Northern Lights",
        "description": "Visual animation in HTML, CSS and JS.",
        "img_src": "assets/img/posts/retro-northern-lights.png",
        "categories": ["development", "design"],
        "skills": ["HTML", "CSS", "Javascript"]
    },
    {
        "company": "Stenaline",
        "description": "Creation of HTML email and newsletters.",
        "img_src": "assets/img/posts/stenaline.png",
        "categories": ["development"],
        "skills": ["HTML", "CSS"]
    }
];

function addJsonData(selectedItem) {
    if (selectedItem === "") {
        document.getElementById("portfolio-item").innerHTML = "";
    } else {
        let text = "";
        // text = "<h1>" + portfolio_items[selectedItem].company + "</h1>"
        text += "<div class='grid__item one-third' style='padding-left: 0'>"
        text += "<p>" + portfolio_items[selectedItem].description + "</p>";
        text += "<div class='tags-section'><h2>Categories</h2>";
        text += "<ul class='tags'>";
        for (let categoryIndex in portfolio_items[selectedItem].categories) {
            text += "<li class='tag'>" + portfolio_items[selectedItem].categories[categoryIndex] + "</li>";
        }
        text += "</ul></div>";
        text += "<div class='tags-section'><h2>Skills</h2>";
        text += "<ul class='tags'>";
        for (let skillIndex in portfolio_items[selectedItem].skills) {
            text += "<li class='tag'>" + portfolio_items[selectedItem].skills[skillIndex] + "</li>";
        }
        text += "</ul></div>";
        text += "</div>"
        text += "<div class='grid__item two-thirds'><img src=" + portfolio_items[selectedItem].img_src + " /></div>";
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