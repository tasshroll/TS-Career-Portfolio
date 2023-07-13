import { useState } from "react"

// name, gitHub, deployed, image are accessed in the work array
export default function Project(work) {

    const styles = {
        header: {
            margin: 20,
            padding: 6,
            background: "#e4ebe5"
        },

        subtopics: {
            padding: "0 20 20 20",
            backgroundColor: "#e4ebe5",
            /* text-align:center; */
            fontSize: 15,
            color: "black"
        }
    };

    return (
        <div>
            <main>
                {/*<!-- About Me-->*/}
                <section className="subtopics" id="about-me">

                    <h1>About<br />Me</h1>
                    <p style={styles.subtopics}>
                        With a background in software engineering and teaching, I am passionate about creating innovative technology solutions
                        for improved user experiences.  I am persuing a certificate in Full Stack Web Development from Arizona State University Coding
                        Boot Camp. With a growth mindset, I focus on continuous
                        learning and self-improvement. I am highly motivated to tackle new challenges and collaborate effectively as a
                        team member. With exceptional communication and writing abilities, I can efficiently convey complex ideas and
                        information.
                    </p>
                </section>

                {/*<!-- Work Sidebar -->*/}
                <aside>
                    <h1>Work</h1>
                </aside>

                <section className="work-container" id="work">

                    <section className="flex-items" >
                        <div>
                            {work.map((project) => (
                                <li>
                                    {{project.name}}
                                </li>
                            ))}
                        </div>
                    </section>



                    {/*</section><!-- Work Cards go in this Section -->*/}
                    {/* <section className="flex-items" id="food-img"> */}
                    <section className="flex-items" >

                        <div>
                            <img
                                src="Assets/images/Koding-Kitch.png"
                                className="img-fluid"
                            />
                            <header>Project</header>
                            <a href="https://ggdave.github.io/Koding-Kitchen">
                                <p>Recipe Finder</p>
                            </a>
                        </div>
                    </section>

                    {/*<!-- Weather App -->*/}
                    <section className="flex-items" id="trees-img">
                        <div>
                            <header>Weather Pulse </header>
                            <a href="https://tasshroll.github.io/weather-dashboard/">
                                <p>Node/loT</p>
                            </a>
                        </div>
                    </section>

                    {/*<!-- Tech Blog -->*/}
                    <section className=" flex-items" id="kitchen-img">
                        <div>
                            <header>Tech Blog </header>
                            <a href="https://best-tech-blog-app.herokuapp.com/">
                                <p>mySQL2/Sequelize/bcrypt/Express </p>
                            </a>
                        </div>
                    </section>

                    {/*<!-- Book Worm -->*/}
                    <section className="flex-items" id="books-img">
                        <div>
                            <header>Book Worm </header>
                            <a href="http://bookwormy.herokuapp.com/">
                                <p>MERN Stack</p>
                            </a>
                        </div>
                    </section>

                    {/*<!-- Note Taker -->*/}
                    <section className="flex-items" id="crystals-img">
                        <div>
                            <header>Note Taker </header>
                            <a href="https://tifs-best-note-taker.herokuapp.com/">
                                <p>Express</p>
                            </a>
                        </div>
                    </section>

                </section>

            </main>
        </div>

    );
}