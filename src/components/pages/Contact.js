import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';

const initialFormData = Object.freeze({
  userName: "",
  userEmail: "",
  message: "",
});

// Form for user to contact me through email
export default function Contact() {

  const apiKey = process.env.REACT_APP_API_KEY;

  const styles = {
    header: {
      marginBottom: 30,
    },
    text: {
      width: 400,
      padding: 15,
      margin: 40,
      fontSize: "1.5rem",
      textAlign: "center"
    },
    shape: {
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
      maxWidth: "60px",

    }
  };

  // state variables displayed on input form
  const [userEmail, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [formData, updateFormData] = useState(initialFormData);

  // When user enters data on form, change the state depending on the target
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'userEmail') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }

    updateFormData({ ...formData, [inputType]: inputValue });
    console.log(formData);
  };

  const handleFormSubmit = (e) => {
    // Prevent the default page refresh behavior
    e.preventDefault();

    // Validate Email and Username
    if (!validateEmail(userEmail)) {
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
    var templateParams = {
      user_name: userName,
      user_email: userEmail,
      message: message
    };

    console.log(templateParams);

    // invoke EmailJS to send an email to me
    emailjs.send('contact_service', 'contact_form', templateParams, apiKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    alert(`Thank you for your message ${userName}`);

    // Clear input for next time
    setUserName('');
    setMessage('');
    setEmail('');
  };

  // render a form for User to enter their name, email, and message
  return (
    <Container style={styles.shape}>

      <Form >
        <div style={styles.text}>
          <h1 style={styles.header}>Contact Me</h1>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >User Name</Form.Label>
            <Form.Control onChange={handleInputChange} value={userName} name="userName" type="text" placeholder="user name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >Email address</Form.Label>
            <Form.Control onChange={handleInputChange} value={userEmail} name="userEmail" type="email" placeholder="name@example.com" />
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