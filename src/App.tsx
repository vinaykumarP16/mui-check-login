import { Button, TextField } from '@mui/material';
import * as React from 'react';
import './style.css';

export default function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = () => {
    //dummy here
  };

  const sendValue = () => {
    console.log('check email', email);
    console.log('check password', password);
  };
  return (
    <div>
      <div className="input-spacing">
        <TextField
          className="input-spacing"
          variant="outlined"
          id="email"
          name="email"
          label="Email ID"
          fullWidth
          size="small"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="input-spacing">
        <TextField
          className="input-spacing"
          variant="outlined"
          fullWidth
          id="password"
          name="password"
          label="Password"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button variant="contained" onClick={() => sendValue()}>
        {' '}
        Login{' '}
      </Button>
    </div>
  );
}
