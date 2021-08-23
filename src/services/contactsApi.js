import axios from "axios";

axios.defaults.baseURL = "https://611a85245710ca00173a1a7b.mockapi.io";

export const fetchContacts = () => {
  return axios.get("/contacts");
};

export const fetchAddContact = (contact) => {
  return axios.post(`/contacts`, contact);
};

export const fetchDeleteContact = (id) => {
  return axios.delete(`contacts/${id}`);
};
