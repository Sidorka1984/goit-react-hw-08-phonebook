// import PropTypes from 'prop-types';
import { Input } from '../Form/Form.styles';
import { Text } from './Filter.styles';
import { useSelector, useDispatch } from "react-redux";
// import { getFilter } from '../../redux/selectors';
// import * as actions from '../../redux/actions.js';
import { changeFilter } from '../../redux/slices/todo';
import { selectors } from "../../redux";



const Filter = () => {
    const value = useSelector(selectors.getFilter);
    const dispatch = useDispatch();
    const onChange = (e) => dispatch(changeFilter(e.target.value));
    return (
        <>
            <Text>Find contacts by name</Text>
            <Input
                type='text'
                name='name'
                placeholder="Name to search"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={value}
                onChange={onChange}
                required>
                
            </Input>
        </>
    )
}
export default Filter;