import  { useState } from 'react';
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function ContactForm () {
    const [name, setName ]=useState('')
    const [number, setNumber ]=useState('')
   
    const contacts = useSelector( getContacts);
    const   nameInputId=nanoid();
    const  numberInputId=nanoid();

console.log(contacts)

    
  const dispatch = useDispatch();

  const  handleChacgeName=e=>{
    setName(e.target.value);
    }
    const  handleChacgeNumber=e=>{
        setNumber(e.target.value);
        }
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e)
    const onSaveContactClicked = contacts.find(contact => contact.name === name);
    const message = 'Name is alredy in contacts';
    if (onSaveContactClicked) {
      alert(message);
      return
    } else dispatch(contactsOperations.addContacts(name, number));

    setName('');
    setNumber('');
  };
    return(
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
          margin="normal"
          required
          fullWidth
          label="Name"
          autoFocus
          type="text"
          name="name"
          value={name}
          onChange={handleChacgeName}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        />

      <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChacgeNumber}
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >Add contact</Button>
          </Box>
    )
    
}


export default ContactForm