import { useState } from "react"

// name, gitHub, deployed, image are accessed in the work array
export default function Project({ work }) {

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
        },
        githubIcon: {
            marginRight: 10,
            width: 30,
            height: 30
        },
        projectImage: {
            marginRight: 10,
            width: 140,
            height: 100
        },
        photoImage: {
            marginRight: 10,
            width: 120,
            height: 120
        }
    };



    return (
        <div>
            <main>
                {/*<!-- About Me-->*/}
                <section className="subtopics" id="about-me">

                    <h1>About<br />Me</h1>
                    <img src="../../Tif-headshot.jpeg" alt="headshot" style={styles.photoImage} />

                    <p style={styles.subtopics}>
                        With a background in teaching, I am passionate about creating innovative technology solutions
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
                            <ul>
                                {work.map((project) => (
                                    <li key={project.name}>

                                        <a href={project.gitHub}>

                                            <img
                                                src="../../github-logo.png"
                                                alt="GitHub Logo style="
                                                style={styles.githubIcon} />
                                            {project.name}
                                        </a>
                                        <a href={project.deployed}>

                                            <img
                                                src={project.image}
                                                alt="Project Image"
                                                style={styles.projectImage}
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </section>
                </section>

            </main>
        </div>

    );
}