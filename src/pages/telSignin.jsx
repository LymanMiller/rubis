import React from 'react';
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Button,
} from '@mui/material';
import StepProgress from '../components/stepProgress';
import { Link } from 'react-router-dom';

export default function TelSignin() {
    const [phone, setPhone] = React.useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;
        const onlyNums = input.replace(/[^0-9]/g, ''); // only digits
        setPhone(onlyNums);
    };

    const handleSend = () => {
        // Add logic to handle phone submission here
        console.log('Phone number:', phone);
    };

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="90vh"
                px={2}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Sign in
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Bien plus qu’un appartement
                </Typography>

                <Box mt={4} width="100%" maxWidth={300}>
                    <Typography
                        variant="body2"
                        sx={{ color: '#c0c0c0', mb: 1, textAlign: 'left' }}
                    >
                        Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type your phone number
                    </Typography>

                    <TextField
                        placeholder="__  ___  ___ "
                        fullWidth
                        variant="outlined"
                        value={phone}
                        onChange={handleInputChange}
                        inputProps={{
                            inputMode: 'numeric',
                            pattern: '[0-9]*',
                            maxLength: 9, // Max 9 digits after +242
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Typography fontSize={25} color='black' fontWeight="bold">+242&nbsp;</Typography>
                                </InputAdornment>
                            ),
                            sx: {
                                fontSize: '25px',
                                letterSpacing: '0.3rem',
                                px: 1,
                                py: 0,
                            },
                        }}
                    />

                    <Box textAlign="center" mt={3}>
                        <Link to={"/AuthenticateCode"}>
                            <Button
                                onClick={handleSend}
                                variant="contained"
                                sx={{
                                    backgroundColor: '#63d441',
                                    color: 'white',
                                    borderRadius: '20px',
                                    textTransform: 'lowercase',
                                    px: 5,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#57c036',
                                    },
                                }}
                            >
                                send
                            </Button>
                        </Link>
                    </Box>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                        textAlign="center"
                        display="block"
                        mt={4}
                    >
                        Rassurez-vous de bien lire votre numéro de téléphone
                        avec d’appuyer le bouton “envoyer”
                    </Typography>
                </Box>
            </Box >
            <StepProgress currentStep={2} />
        </>
    );
}
