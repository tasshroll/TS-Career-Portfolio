import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';


// Form for user to contact me through email
export default function Contact() {

    const styles = {
        header: {
            marginBottom: 30,
        },
        text : {
            width: 600,
            padding: 10,
            margin: 40,
            fontSize: "1.5rem",
            textAlign: "center"
          },
        shape: {
          display: "flex", 
          justifyContent: "center", 
          minHeight: "100vh" 
        }
    };

    // state variables displayed on input form
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');

    // When user enters data on form, change the state depending on the target
    const handleInputChange = (e) => {
      console.log("inside handle Input Change");

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName (inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
      console.log("inside handle Form Submit");

        // Prevent the default page refresh behavior
        e.preventDefault();

        // Validate Email and Username
        if (!validateEmail(email)) {
            alert("Email is invalid")
            return;
        }
        if (!userName) {
          alert("Please enter User Name")
          return;
      }
        // Message must be entered
        if (!message) {
            alert(`Please enter a message, ${userName}`);
            return;
        }

        alert (`Thank you for your message ${userName}`)

        // Clear input for next time
        setUserName('');
        setMessage('');
        setEmail('');
    };
// to_name, from_name, message, reply_to from EmailJS
   return (
    <Container style={styles.shape }>
      <Form >
        <div style={styles.text}>
        <h1 style={styles.header}>Contact Me</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >User Name</Form.Label>
          <Form.Control onChange={handleInputChange} value={userName} name="userName" type="text" placeholder="user name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >Email address</Form.Label>
          <Form.Control onChange={handleInputChange} value={email} name="email" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control onChange={handleInputChange} value={message} name="message" as="textarea" rows={3} />
        </Form.Group>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </Form>
      </Container>
      );
    }