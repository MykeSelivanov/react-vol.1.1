import './App.css';
import { useState } from 'react';

const initialValues = {
    name: '',
    lastname: '',
    message: ''
}

function MultipleHandling() {

    const [values, setValues] = useState(initialValues);
    const handleValues = (event) => {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value,
        })
    }

    // select handler
    const [color, setColor] = useState('blue');
    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    // checkbox handler
    const [acceptedAgreement, setAcceptedAgreement] = useState(false);
    const handleAcceptAgreement = (event) => {
        setAcceptedAgreement((acceptedAgreement) => !acceptedAgreement);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // simple validation
        console.log(values);
        if (values.name === '') {
            alert('PLease type name!')
        } else if (acceptedAgreement === false) {
            alert("Accept our agreement!");
        } else {
            alert('Form Submitted');
        }
    }


    return (
        <div className="App">

            <form onSubmit={handleSubmit}>
                <label>Name:</label> <br />
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleValues}
                    value={values.name} />

                <label>Lastname:</label> <br />
                <input
                    name="lastname"
                    type="text"
                    placeholder="Lastname"
                    onChange={handleValues}
                    value={values.lastName} />

                <textarea
                    name="message"
                    type="text"
                    placeholder="Message"
                    onChange={handleValues}
                    value={values.message} />

                <label>Desired color:</label>
                <select value={color} onChange={handleColorChange}>
                    <option value='blue'>Blue</option>
                    <option value='red'>Red</option>
                    <option value='black'>Black</option>
                </select> <br />

                <label>I accept the agreement</label>
                <input
                    checked={acceptedAgreement}
                    onChange={handleAcceptAgreement}
                    type="checkbox"
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default MultipleHandling;
