import { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';

// Form for person to email me
export default function Contact() {
    

    const styles = {
        header: {
            margin: 20,
            padding: 6,
            background: "#e4ebe5"
        },

        subtopics : {
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
        },
        photoImage: {
            marginRight: 10,
            width: 120,
            height: 120
        }
    };

    // state variables displayed on input form
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // When user enters data on form, change the state depending on the target
    const handleInputChange = (e) => {
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
        // Prevent the default page refresh behavior
        e.preventDefault();

        // Valid Email and Username must be entered
        if (!validateEmail(email) || (!userName)) {
            setErrorMessage("Email or username is invalid")
            return;
        
        }
        // Message must be entered
        if (!message) {
            setErrorMessage(`Please send me a message, ${userName}`);
            return;
        }

        alert (`Thank you for your message ${userName}`)

        // Clear input for next time
        setUserName('');
        setMessage('');
        setEmail('');
    };

   return (
        <div style={styles.subtopics}>
          <p>Hello {userName}</p>
          <form className="form">
            
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="username"
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      );
}