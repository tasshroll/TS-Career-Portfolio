import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Form from 'react-bootstrap/Form';


// Form for person to email me
export default function Contact() {
    

    const styles = {
        header: {
            marginBottom: 25,
        },

        text : {
            // display: "flex",
            width: 600,
            padding: 10,
            margin: 40,
            fontSize: "1.5rem"
          },
    
        githubIcon: {
            marginRight: 10,
            width: 30,
            height: 30
        }
    };
    //TODO ADD IN authentication - finish work.js descriptions and skills

    // state variables displayed on input form
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            setErrorMessage("Email is invalid")
            alert (errorMessage)
            return;
        }
        if (!userName) {
          setErrorMessage("Please enter User Name")
          alert (errorMessage)
          return;
      }
        // Message must be entered
        if (!message) {
            setErrorMessage(`Please enter a message, ${userName}`);
            alert (errorMessage)
            return;
        }

        alert (`Thank you for your message ${userName}`)

        // Clear input for next time
        setUserName('');
        setMessage('');
        setEmail('');
        setErrorMessage('')
    };

   return (
      <Form style={styles.text}>
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
      </Form>
      );
    }


        // <div style={styles.subtopics}>
        //   <p>Hello {userName}</p>
        //   <form className="form">
            
        //     <input
        //       value={userName}
        //       name="userName"
        //       onChange={handleInputChange}
        //       type="text"
        //       placeholder="username"
        //     />
        //     <input
        //       value={email}
        //       name="email"
        //       onChange={handleInputChange}
        //       type="email"
        //       placeholder="email"
        //     />
        //     <input
        //       value={message}
        //       name="message"
        //       onChange={handleInputChange}
        //       type="text"
        //       placeholder="message"
        //     />
        //     <button type="button" onClick={handleFormSubmit}>Submit</button>
        //   </form>
        //   {errorMessage && (
        //     <div>
        //       <p className="error-text">{errorMessage}</p>
        //     </div>
        //   )}
        // </div>
