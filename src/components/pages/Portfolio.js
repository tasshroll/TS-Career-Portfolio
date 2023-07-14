
// name, gitHub, deployed, image are accessed in the work array
export default function Portfolio({ work }) {

    console.log("inside of portfolio");

    const styles = {
        header: {
            margin: 20,
            padding: 6,
            background: "#e4ebe5"
        },

        subtopics: {
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "flexStart",
            width: 100,
            padding: 10,
            margin: 20,
            fontSize: 15
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
        }
    };

    return (
        <div>
            <main>
                {/*<!-- Work Sidebar -->*/}
                <h1>Work</h1>
                <section>
                    {/* <section className="work-container" > */}
                    <section>
                        {/* <section className="flex-items" > */}
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
                                                alt="Project"
                                                style={styles.projectImage}
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </section>
                </section>

            </main >
        </div >

    );
}