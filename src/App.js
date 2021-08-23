// import { useState, useEffect, useRef } from "react";
// import { v4 as uuidv4 } from "uuid";
import { Toaster } from "react-hot-toast";
import Container from "./Container";
import Form from "./Form";
import Filter from "./Filter/Filter.jsx";
import ContactsList from "./ContactsList/ContactsList.jsx";
import { GrContactInfo } from "react-icons/gr";
// import ContactsJson from "../Data/contacts.json";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../redux/selectors";

export default function App() {
  const contacts = useSelector(getContacts);
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container title="Phonebook">
      <Toaster autoClose={4000} position="top-right" />
      <Form />
      <h2>
        <GrContactInfo /> Contacts
      </h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}
