import React, {useState, useEffect} from 'react';
import { STATE } from '../tarea679.jsx/stateEnum'
import ContactComponent from './contact';
import { Contact } from './contactClass';
import ContactForm from '../tarea679.jsx/contactForm'

const ContactListComponent = () => {

        const defaultContact1 = new Contact('contacto1', true, STATE.OFFLINE)
        const defaultContact2 = new Contact('contacto2', false, STATE.ONLINE)

        const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);

        useEffect(() => {
            console.log('Contact state has been modified')
            return () => {
                console.log('ContactList component is going to unmount')
            };
        }, [contacts]);

        function contactOnline(contact){
            console.log(`Contact ${contact.name} is online`);
            const index = contacts.indexOf(contact);
            const tempContacts = [...contacts];
            tempContacts[index].state = !tempContacts[index].state;
            // we update the state of the componnet with the new list of task and it will update the iteration 
            // of the tasks in order to show the task update
            setContacts(tempContacts);
        }

        function deleteContact(contact){
            console.log('Deleted this Contact', contact);
            const index = contacts.indexOf(contact);
            const tempContacts = [...contacts];
            tempContacts.splice(index, 1);
            setContacts(tempContacts);
        }

        function addContact(contact){
            console.log('Added this Contact', contact);
            const index = contacts.indexOf(contact);
            const tempContacts = [...contacts];
            tempContacts.push(contact);
            setContacts(tempContacts);
        }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Contacts:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Contact</th>
                                    <th scope='col'>State</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                        return (
                                            <ContactComponent
                                                key={index}
                                                contact={contact}
                                                online={contactOnline}
                                                remove={deleteContact}>
                                            </ContactComponent> 
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
            {/* <ContactComponent task={defaultTask}></ContactComponent> */}
        </div>
    );
}

export default ContactListComponent;
