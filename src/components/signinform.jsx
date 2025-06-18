import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👇 Your sign-in logic here (can be Firebase, API, etc.)
    console.log('Logging in with:', { email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography className='text-black' component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Email Address"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
