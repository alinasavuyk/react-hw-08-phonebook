import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ContactFilter=()=>{
  const value = useSelector(state => state.filter);
  //console.log(value)
  const dispatch = useDispatch();
  return(
     <Box noValidate sx={{ mt: 1 }}>
      <TextField
          margin="normal"
          required
          fullWidth
          label="Find contacts by name"
          autoFocus
          type="text"
          value={value}
          onChange={(e) => {
    dispatch(changeFilter(e.target.value));
  }}
        />
 </Box>
   
)}

ContactFilter.propTypes = {
  value: PropTypes.string,
};
export default ContactFilter