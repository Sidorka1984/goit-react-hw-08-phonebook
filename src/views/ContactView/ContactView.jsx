import { useSelector } from 'react-redux';
import { Toaster } from "react-hot-toast";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Container from '../../component/Container/Container';
import Form from '../../component/Form/formHoock';
import FormList from '../../component/ContactsList/ContactsList';
import Filter from '../../component/Filter/Filter';
import { selectors } from '../../redux/contacts';

import { TitleH2 } from "./ContactView.styled";
import { TitleH1 } from "./ContactView.styled";

export default function ContactsView(params) {
  const loading = useSelector(selectors.getIsLoading)
  return (
    <Container>
      <TitleH1>       
        Phonebook
      </TitleH1>
       <Toaster autoClose={4000} position="top-right" />
      <Form />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      <FormList />
      {loading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
    </Container>
  )
}
