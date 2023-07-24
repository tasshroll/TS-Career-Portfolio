import { Button } from "react-bootstrap";
import splashImg from "../../Assets/images/sunset-us.jpg";
import Typewriter from 'typewriter-effect';

// initial home page of portfolio
export default function Home() {

    const styles = {
        background: {
            background: `url(${splashImg})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        text: {
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            // justifyContent: "center",
            marginBottom: "30px",
            // height: "100vh",
        },
        title: {
            color: "white",
            fontSize: "4rem",
            fontWeight: "500",
            marginTop: "100px",
        },
        button: {
            backgroundColor: "white",
            borderColor: "white",
            color: "black",
        },
        buttonHover: {
            backgroundColor: "grey",
            color: "black",
        },
    };

    return (

        <section style={styles.background}>

            <div style={styles.text}>
                <h1 style={styles.title}>Tifni Shroll</h1>
                <div style={{ color: "white", fontSize: "2rem", fontWeight: "500", marginBottom: "30px" }}>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', "Life Long Learner"],
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter

                                // .typeString("Tifni Shroll")
                                // .pauseFor(500)
                                // .deleteAll()
                                // .typeString("Welcomes You")                        
                                .start();

                        }}
                    />
                </div>
                <Button
                    variant="outline-dark"
                    href="/about" 
                    // style={{ backgroundColor: "white", hover: "" }} >
                    style={styles.button} 
                    onMouseEnter={(e) => e.target.style = styles.buttonHover} 
                    onMouseLeave={(e) => e.target.style = styles.button} >
                    Enter
                </Button>
            </div>
        </section>
    );
}