import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchContact, deleteContact } from '../../redux/operation.js';
import { Contact, ContactItem, BtnDelete } from './ContactsList.styles';
import { AiOutlineDelete, AiOutlineUser } from 'react-icons/ai';
// import * as actions from "../../redux/actions.js";
// import { getVisibleContacts } from "../../redux/selectors.js";
import { operation, selectors } from "../../redux";


const ContactsList = () => {
    const contacts = useSelector(selectors.getVisibleContacts);
    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
        dispatch(operation.deleteContact(id));
        // console.log(id);
    }
    useEffect(() => {
        dispatch(operation.fetchContact())
    }, [dispatch])
   
    return (
        <Contact>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <span>
                        <AiOutlineUser />
                        {name}:
                    </span>
                    
                    
                    <span>{number}</span>
                    <BtnDelete onClick={() => onDeleteContact(id)}><AiOutlineDelete /></BtnDelete>
                </ContactItem>
            ))}
        </Contact>
    )
}
export default ContactsList;