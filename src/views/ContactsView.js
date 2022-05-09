import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from "../components/ContactForm/ContactList";
import ContactForm  from '../components/ContactForm/ContactForm';
import ContactFilter  from '../components/ContactForm/ContactFilter';
import s from "../components/ContactForm/contactForm.module.css"
//import { ReactComponent as AddIcon } from '../icons/add.svg';
//import { todosOperations, todosSelectors } from '../redux/todos';
import contactsOperations from '../redux/contacts/contacts-operations';
export default function ContactsView() {

  const dispatch = useDispatch();

 useEffect(() => {
   function fetchContact(){
      dispatch(contactsOperations.fetchContacts())
}
fetchContact()
}, [dispatch]);

  return (
    <div className={s.container}>
    <h2>Phonebook</h2>
    <ContactForm />
    <h2>Contacts</h2>
   <ContactFilter/>  
    <ContactList/> 
    </div>
  );
}