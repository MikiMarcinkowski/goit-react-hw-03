// import { useState } from 'react'
import Title from "./components/Title/Title";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { nanoid } from "nanoid";
//model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
         
        ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  console.log(contacts);

  const [searchContacts, setSearchContacts] = useState("");

  const dataFromContactForm = (data) => {
    const newContact = { id: nanoid(), ...data };
      const contactExists = contacts.some(
        (contact) =>
          contact.name.toLowerCase() === data.name.toLowerCase() &&
          contact.number === data.number
      );

      if (contactExists) {
        alert("Contact already exists.");
        return; 
      }
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

   const deleteContact = (id) => {
     setContacts((prevContacts) =>
       prevContacts.filter((contact) => contact.id !== id)
     );
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
        onDelete={deleteContact}
        // contacts={contacts}
      />
    </>
  );
}

export default App;
