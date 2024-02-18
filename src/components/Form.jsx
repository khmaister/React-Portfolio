import { useState } from 'react';
import { validateName, validateEmail, validateMessage } from '../utils/helpers';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email or username is invalid');
            return;
        }
        if (!validateName(name)) {
            setErrorMessage('The name field is required');
            return;
        }
        if (!validateMessage(message)) {
            setErrorMessage('The message field is required');
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <h1 id="contact" className=" mt-5 mb-5 p-30">Contact Page</h1>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <input
                                value={name}
                                name="name"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Full Name"
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                className="form-control"
                                name="email"
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-secondary mb-5">
                            Submit
                        </button>
                    </form>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};


export default Form;