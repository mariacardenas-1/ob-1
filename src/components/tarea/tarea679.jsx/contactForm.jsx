import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from './contactClass';
import { STATE } from '../tarea679.jsx/stateEnum'


const ContactForm = ({add}) => {

    const nameRef = useRef('');
    const stateRef = useRef(STATE.OFFLINE);

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            stateRef.current.value,
            false,
        );

        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name' />
                <label htmlFor='selectLevel' className='sr-only' >State</label>
                <select ref={stateRef} defaultValue='{STATE.ONLINE}' id='selectorState'>
                    <option value={STATE.OFFLINE}>
                        Offline
                    </option>
                    <option value={STATE.ONLINE}>
                        Online
                    </option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
