import NavAnchors from './NavAnchors';
import { urls } from './utils/work.js'
import stack_icon from '../Assets/images/stack_overflow_icon.png';
import li_icon from '../Assets/images/linkedIn.png';
import gh_icon from '../Assets/images/github-logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer({ currentPage, handlePageChange }) {

    const styles = {
        icons: {
            justifyContent: "center",
        },
    };

    return (
        <>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container style={styles.icons}>
                    <Navbar.Brand href={urls.gitHub}>
                        <img
                            src={gh_icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="GitHub source code icon"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href={urls.linkedIn}>
                        <img
                            src={li_icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Linked In site"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href={urls.stack_overflow}>
                        <img
                            src={stack_icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Stack Overflow site"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </>
    );
}
