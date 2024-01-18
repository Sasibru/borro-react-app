//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LogIn() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="emailAddress" label="Emailadress" variant="outlined" />
      <TextField id="passWord" label="Password" variant="outlined" />
      
    </Box>
  );
}
