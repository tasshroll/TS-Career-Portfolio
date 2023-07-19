import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// Work.js contains all project details and url links
import {urls} from '../utils/work';
import {skills} from '../utils/work';

export default function Resume() {

    const styles = 
    { downloadBtn : {
        margin : 30}
    }; 

    function downloadResume() {
        window.location.href = urls.resume;
    };

    // create button to access resume and a list of skills
    return (
        <Container align="center" fluid>
            <Row>
                <Col>
                <div className="mb-2">
                 <Button variant="secondary" size="lg" style={styles.downloadBtn} onClick={downloadResume}>
                    Download My Resume                     
                </Button>{' '}
                 </div>
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