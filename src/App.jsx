// import { useState } from 'react'
import Title from "./components/Title/Title";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { nanoid } from "nanoid";
//model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchContacts, setSearchContacts] = useState("");

  const dataFromContactForm = (data) => {
    const newContact = { id: nanoid(), ...data };
 

    setContacts((prevContacts) => [...prevContacts, newContact]);
 };

  const search = (searchName) => {
    setSearchContacts(searchName);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContacts.toLowerCase())
  );

  return (
    <>
      <Title title="Phonebook" />
      <ContactForm onData={dataFromContactForm} />
      <SearchBox searchContacts={searchContacts} onSearchChange={search} />
      <ContactList
        contacts={filteredContacts}
        // contacts={contacts}
      />
    </>
  );
}

export default App;
