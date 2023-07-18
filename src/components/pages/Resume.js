import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Resume() {

    const styles = 
    { downloadBtn : {
        margin : 30
    }
    }; 

    // technical skills to display
    const skills = ["React", "JavaScript", "HTML", "CSS", "SQL", "NoSQL", "MongoDB",
        "MERN", "React", "Node", "jQuery", "Bootstrap", "API", "Insomnia", "Heroku",
        "Ada", "JSON"];

    // Function to download resume
    function downloadResume() {
        const resumeURL = "https://docs.google.com/document/d/1PQyY64zJtuLAxFP9K0l_yvupJwXLNUz9x3R-v2NWoxI/export?format=pdf"
        window.location.href = resumeURL;
    };

    return (
        <Container align="center" fluid>
            <Row>
                <Col>
                <div className="mb-2">
                 <Button variant="secondary" size="lg" style={styles.downloadBtn} onClick={downloadResume}>
                    Download My Resume                     
                </Button>{' '}
                 </div>
                {/* <div style={styles.downloadBtn}>
                    
                    <button  onClick={downloadResume}>Download My Resume</button>
                </div> */}
                    <h1>Technical Skills</h1>

                    <Card border="secondary" style={{ width: '20rem' }}>
                        <ListGroup  >
                            {skills.map((skill, index) => (
                                <ListGroup.Item variant="light" key={index}>{skill}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}