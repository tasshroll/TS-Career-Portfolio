// import images of each project
import kodingKitchen from '../../Assets/images/Koding-Kitch.png'
import weather from '../../Assets/images/weather-dashboard.png'
import book from '../../Assets/images/bookworm.png'
import blog from '../../Assets/images/blog_profile_page.png'
import note from '../../Assets/images/Save-a-note.png'
import password from '../../Assets/images/Password-screenshot.png'
import Uplift_Beat from '../../Assets/images/Uplift_Beat.png'


// Array holding objects wot project details
export const work1 = [
    {
        name: "Uplift Beat",
        gitHub: "https://github.com/tasshroll/Uplift-Beat",
        deployed: "https://uplift-beat-1ed3f823ed28.herokuapp.com/",
        image: Uplift_Beat,
        description: "Get the latest uplifting articles  on current events with just a click. Stay informed and up-to-date. Save articles that interest you the most.",
        technologies: "MERN, MongoDB, Express, React, Node, Apollo Client, GraphQL, JWT, JavaScript, API, React"
    },
    {
        name: "Koding Kitchen",
        gitHub: "https://github.com/tasshroll/Koding-Kitchen",
        deployed: "https://tasshroll.github.io/Koding-Kitchen/",
        image: kodingKitchen,
        description: "Quickly pull up tasty recipes based on your current cravings, food type, or diet needs. Enter ingredients on hand for recipe suggestions.",
        technologies: "JavaScript, HTML, CSS, API, Front End, local-storage"
    },
    {
        name: "Weather Pulse",
        gitHub: "https://github.com/tasshroll/weather-dashboard",
        deployed: "https://tasshroll.github.io/weather-dashboard/",
        image: weather,
        description: "Retrieve real-time weather updates for multiple cities and view the five day forecast. The app uses OpenWeather API and runs in the browser and features dynamically updated HTML and CSS, powered by JavaScript.",
        technologies: "JavaScript, HTML, CSS, API, Front End, local-storage"
    },
    {
        name: "Book Worm",
        gitHub: "https://github.com/tasshroll/BookWorm",
        deployed: "https://bookwormy.herokuapp.com/",
        image: book,
        description: "Find a good book to read! This application allows users to find books, save their favorite books, and comment on books. Must sign in to use site.",
        technologies: "Node, Express.js, REST API, bcrypt, JavaScript, HTML, CSS, Sequelize, mySQL"
    },
    {
        name: "Tech Blog",
        gitHub: "https://github.com/tasshroll/best-blog-site",
        deployed: "https://best-tech-blog-app.herokuapp.com/",
        image: blog,
        description: "Developers can publish blog posts and comment on other posts about technical concepts, recent advancements, and new technologies. Users must signup/login to use the site. ",
        technologies: "bcrypt, MVC, Sequelize, mySQL2, Express, Handlebars, JavaScript, HTML"
    },
    {
        name: "Note Taker",
        gitHub: "https://github.com/tasshroll/best-note-taker",
        deployed: "https://tifs-best-note-taker.herokuapp.com/",
        image: note,
        description: "Write and save notes with this note taker. This application uses an Express.js back end and saves and retrievse note data from a JSON file. Deployed to Heroku",
        technologies: "Express.js, Front End, Back End, JSON, JavaScript, HTML, CSS, "
    },
    {
        name: "Password Gen",
        gitHub: "https://github.com/tasshroll/password-gen",
        deployed: "https://tasshroll.github.io/password-gen/",
        image: password,
        description: "React app designed to generate random passwords based on user criteria. This features dynamically updated HTML and CSS powered by JavaScript.",
        technologies: "React, JavaScript, HTML, CSS"
    },
]

export const urls = 
    {
        stack_overflow: "https://stackoverflow.com/users/22244564/tasshroll",
        resume: "https://docs.google.com/document/d/1PQyY64zJtuLAxFP9K0l_yvupJwXLNUz9x3R-v2NWoxI/export?format=pdf",
        linkedIn: "https://bit.ly/3rrudhR",
        gitHub: "https://github.com/tasshroll",
        portfolio: "https://bit.ly/3O99Qil "
    }

export const skills = ["React", "JavaScript", "HTML", "CSS", "SQL", "NoSQL", "MongoDB",
        "MERN", "React", "Node", "jQuery", "Bootstrap", "API", "Insomnia", "Heroku",
        "Ada", "JSON"];

