import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Input, TitleSecond, Button } from './Form.styles';
import { FiUser, FiPhoneCall } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { operation, selectors } from "../../redux/contacts";



export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectors.getContacts);
    const dispatch = useDispatch(); 


    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
      
            case 'number':
                setNumber(value);
                break;
      
            default: return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (contacts.some((contact) => contact.name === name || contact.number === number)) {
            toast.error(`${name} or ${number} already in the contacts.`);
            
            reset();
            return;
        } else {
            dispatch(operation.addContact({
                id: uuidv4(),
                name,
                number,
            }))
            reset();
        };

        // if (contacts.some((contact) => contact.name === name)) {
            // toast.error(`${name} already in the contacts.`);
            // reset();
            // return;
        // }
        //  if (contacts.some((contact) => contact.number === number)) {
            //  toast.error(`${number} already in the contacts.`);
            //  reset();
            //  return;
        // };

        // dispatch(actions.addContact({ name, number }));

        // reset();
    };

    const reset = () => {
        setName('')
        setNumber('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <TitleSecond htmlFor={nameInputId}><FiUser /> Name</TitleSecond>
            <Input
                type="text"
                name="name"
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={name}
                onChange={handleChange}
                id={nameInputId}
                required
            />
            <TitleSecond htmlFor={numberInputId}><FiPhoneCall /> Number</TitleSecond>
            <Input
                type="tel"
                name='number'
                placeholder='Enter number'
                autoComplete='all'
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                value={number}
                id={numberInputId}
                required
            />
            <Button
                type="submit"
                disabled={!name || !number}><AiOutlineUserAdd /> Add contact</Button>
        </form>

    )

}
// Form.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
// }