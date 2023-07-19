// name, gitHub, deployed, image are accessed in the work array
import headshot from '../../Assets/images/Tif-headshot.jpeg'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

export default function About() {


    const styles = {
        text: {
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            marginBottom: "30px"
        },
        image: {
            marginBottom: "20px"
        }
    };

    return (

        <section style={styles.text}>

            <h1>About Me</h1>
            <Image src={headshot} alt="headshot" thumbnail style={styles.image} />
            <Col xs lg="6">
                <Card >
                    <Card.Body>
                        With a background in teaching, I am passionate about creating innovative technology solutions
                        for improved user experiences.  I am pursuing a certificate in Full Stack Web Development from Arizona State University Coding
                        Boot Camp. With a growth mindset, I focus on continuous
                        learning and self-improvement. I am highly motivated to tackle new challenges and collaborate effectively as a
                        team member. With exceptional communication and writing abilities, I can efficiently convey complex ideas and
                        information.
                    </Card.Body>
                </Card>
            </Col>

        </section>
    );
}