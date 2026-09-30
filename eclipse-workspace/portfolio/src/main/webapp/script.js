// ==================================================
// PROJECTS
// ==================================================

const projects = [

    {
        number: "01",

        title: "QuickBasket",

        icon: "fa-cart-shopping",

        description:
            "A full-stack grocery delivery application with user registration/login, product browsing, cart management, orders and an admin panel.",

        technologies: [
            "Java",
            "JDBC",
            "MySQL",
            "HTML/CSS",
            "JavaScript",
            "Apache Tomcat"
        ],

        github: "#"
    },


    {
        number: "02",

        title: "Fake News Detection",

        icon: "fa-newspaper",

        description:
            "A web application that classifies news articles as real or fake using data cleaning, preprocessing and a Servlet/JDBC/MySQL data layer.",

        technologies: [
            "Java",
            "Servlet",
            "JDBC",
            "MySQL",
            "HTML/CSS",
            "JavaScript"
        ],

        github: "https://github.com/shitalkumari223/FakeNewsDetect"
    }

];



// ==================================================
// DISPLAY PROJECTS
// ==================================================

const projectsContainer =
    document.getElementById("projectsContainer");


projects.forEach(function(project) {


    let technologyHTML = "";


    project.technologies.forEach(function(tech) {

        technologyHTML += `
            <span>${tech}</span>
        `;

    });


    const card =
        document.createElement("div");


    card.className = "project-card";


    card.innerHTML = `

        <div class="project-top">

            <i class="fa-solid ${project.icon}"></i>

        </div>


        <div class="project-body">

            <span class="project-number">
                ${project.number}
            </span>


            <h3>
                ${project.title}
            </h3>


            <p>
                ${project.description}
            </p>


            <div class="tech-stack">

                ${technologyHTML}

            </div>


            <div class="project-links">

                <a href="${project.github}"
                   target="_blank">

                    <i class="fa-brands fa-github"></i>

                    GitHub

                </a>

            </div>

        </div>

    `;


    projectsContainer.appendChild(card);

});



// ==================================================
// THEME
// ==================================================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function() {


    document.body.classList.toggle("light");


    if (
        document.body.classList.contains("light")
    ) {

        themeBtn.innerHTML =
            `<i class="fa-solid fa-sun"></i>`;

    } else {

        themeBtn.innerHTML =
            `<i class="fa-solid fa-moon"></i>`;

    }

});



// ==================================================
// MOBILE MENU
// ==================================================

const menuBtn =
    document.getElementById("menuBtn");


const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


document
    .querySelectorAll(".navbar nav a")
    .forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

        });

    });