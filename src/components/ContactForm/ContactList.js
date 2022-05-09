import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


const ContactList =()=>{
 const dispatch = useDispatch();
  const filters = useSelector(state => state.filter);
  const contacts = useSelector(state=> state.contacts.items);
  console.log(contacts)
const normalizeFilter = filters.toLowerCase();
const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
const onDelete = id => dispatch(contactsOperations.deleteContacts(id)); 



function stringToColor(string) {
  let hash = 0;
  let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
return {
  sx: {
    bgcolor: stringToColor(name),
  },
  children: `${name.split(' ')[0][0]}`,
};
}
return (

            <List >       
 {
    filterContacts.map(({id,name, number})=>{
      return(
        <ListItem key={id}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
        <Avatar {...stringAvatar(`${name}`)} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          //secondary={secondary ? 'Secondary text' : null}
        />
          <ListItemText
          primary={number}
          //secondary={secondary ? 'Secondary text' : null}
        />
      </ListItem>
      )
    })
  }
  
  </List>
        

)}

 

 export default ContactList

