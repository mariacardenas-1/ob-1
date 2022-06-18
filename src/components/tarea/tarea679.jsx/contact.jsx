import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from './contactClass';
import { STATE } from '../tarea679.jsx/stateEnum'
import './contact.css'

const ContactComponent = ({contact, online, remove}) => {

    useEffect(() => {
        console.log('Created Contact')
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`)
        };
    }, [contact]);

    function stateContact(){
        switch (contact.state) {
            case STATE.ONLINE:
                return (
                    <h6 className='mb-0'>
                    </h6>)

            case STATE.OFFLINE:
                return (
                    <h6 className='mb-0'>
                      
                    </h6>)

            default:
                break;
       }    
    }
       function changeContactIcon(){
           if(contact.state === STATE.ONLINE | contact.state){
               return (<i onClick={() => online(contact)} className='bi-toggle-on contact-action' style={{color: 'green'}}></i>) 
           }else {
               return (<i onClick={() => online(contact)} className='bi-toggle-off contact-action' style={{color: 'grey'}}></i>)
           }
       }

    return (
        <tr className='fw-normal'>
           <th>
               <span className='ms-2'>{contact.name}</span>
           </th> 
           <td className='aling-middle'> 
                {stateContact()}
               {changeContactIcon()}
           </td>
           <td>
               <i className='bi-trash task-action' onClick={() => remove(contact)} style={{color: 'tomato' }}></i>
           </td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    online: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent;
