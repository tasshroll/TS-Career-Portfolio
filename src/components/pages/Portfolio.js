import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import gLogo from '../../Assets/images/github-logo.png'

// work array contains porject details
export default function Portfolio({ work1 }) {

    const styles = {
        header: {
            margin: 20,
            padding: 6,
            background: "#e4ebe5"
        },
        title: {
            textAlign: "center",
            marginBottom: 30,
            marginRight: 5,
            marginLeft: 5
        },

        githubIcon: {
            marginRight: 10,
            width: 30,
            height: 30,
            textAlign: 'center'
        },
        projectImage: {
            // marginRight: 10,
            margin: 10,
            width: 140,
            height: 100
        },
        customContainer: {
            marginLeft: "0",
            marginRight: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }


    };

    // map method displays html containing project details for each element in work array
    // Will display 6 cards with project image, title, description, list of skills, 
    // link to deployed project - through the image and link to gitHub - through the icon
    return (
        <>
            {/* <Container style={styles.customContainer}> */}
            <Container >

                <div style={styles.title}>
                    <h1 >Coding Portfolio</h1>
                    <h4 style={{ fontWeight: 300 }}>Click an image to explore a project:</h4>

                </div>
                <Row xs={1} md={2} lg={3} className="g-5">
                    {work1.map((project, idx) => (
                        <Col key={idx}>
                            <Card border="secondary" style={{ width: '18rem' }}>

                                <Card.Link href={project.deployed}>
                                    <Card.Img variant="top" src={project.image} />
                                </Card.Link>

                                <Card.Body>
                                    <Card.Title >{project.name}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <Card.Link href={project.gitHub}>
                                        <div style={styles.title}>
                                            <Card.Img variant="top" src={gLogo} style={styles.githubIcon} />
                                        </div>
                                    </Card.Link>
                                    <Card.Text >{project.technologies}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );

}