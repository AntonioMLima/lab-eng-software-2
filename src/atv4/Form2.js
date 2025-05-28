import { useState } from 'react';
import './Form2.css';

export default function Form2() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
            firstName: e.target.value,
            lastName: person.lastName,
            email: person.email
        })
    }

    function handleLastNameChange(e) {
        setPerson({
            firstName: person.firstName,
            lastName: e.target.value,
            email: person.email
        })
    }

    function handleEmailChange(e) {
        setPerson({
            firstName: person.firstName,
            lastName: person.lastName,
            email: e.target.value
        })
    }


    return (
        <>
            <div className='form-container'>

                <label>
                    First name:
                    <input
                        value={person.firstName}
                        onChange={handleFirstNameChange}
                    />
                </label>
                <label>
                    Last name:
                    <input
                        value={person.lastName}
                        onChange={handleLastNameChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        value={person.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <p>
                    {person.firstName}{' '}
                    {person.lastName}{' '}
                    ({person.email})
                </p>
            </div>
        </>
    );
}