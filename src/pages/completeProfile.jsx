import React from 'react';
import {
    Box,
    Typography,
    Select,
    MenuItem,
    TextField,
    FormControl,
    InputLabel,
    Button
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import StepProgress from '../components/stepProgress';

function CompleteProfile() {
    const [status, setStatus] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [address, setAddress] = React.useState('');
    const navigate = useNavigate();

    // Form validation logic
    const isFormValid = status !== '' && district !== '' && address.trim() !== '';

    // Handle form submission
    const handleSubmit = () => {
        console.log('Form Submitted:', { status, district, address });
        // Navigate to next page (example)
        navigate('/property');
    };

    return (
        <>
            <Box
                sx={{
                    height: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Arial, sans-serif',
                    bgcolor: '#fff',
                }}
            >
                <Box sx={{ width: 300 }}>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ mb: 3, fontWeight: 'bold', fontSize: '20px' }}
                    >
                        Complete your account
                    </Typography>

                    {/* Status Select */}
                    <FormControl fullWidth sx={{ mb: 2 }} size="small">
                        <InputLabel
                            shrink
                            htmlFor="status-select"
                            sx={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}
                        >
                            Statut :
                        </InputLabel>
                        <Select
                            id="status-select"
                            displayEmpty
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            sx={{
                                mt: '15px',
                                backgroundColor: '#e0e0e0',
                                height: 36,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'transparent',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#63d441',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#63d441',
                                },
                            }}
                        >
                            <MenuItem value="">-- Select --</MenuItem>
                            <MenuItem value="tenant">Tenant</MenuItem>
                            <MenuItem value="owner">Owner</MenuItem>
                        </Select>
                    </FormControl>

                    {/* District Select */}
                    <FormControl fullWidth sx={{ mb: 2 }} size="small">
                        <InputLabel
                            shrink
                            htmlFor="district-select"
                            sx={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}
                        >
                            District :
                        </InputLabel>
                        <Select
                            id="district-select"
                            displayEmpty
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            sx={{
                                mt: '15px',
                                backgroundColor: '#e0e0e0',
                                height: 36,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'transparent',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#63d441',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#63d441',
                                },
                            }}
                        >
                            <MenuItem value="">-- Select --</MenuItem>
                            <MenuItem value="Brazzaville">Brazzaville</MenuItem>
                            <MenuItem value="Kinshasa">Kinshasa</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Address Field */}
                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold', mb: 1 }}>
                        Address :
                    </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        sx={{
                            mb: 4,
                            backgroundColor: '#fff',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ccc',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#63d441',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#63d441',
                                },
                            },
                        }}
                    />

                    {/* Footer Note */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#999',
                            fontStyle: 'italic',
                            fontSize: '12px',
                            mt: 2,
                            textAlign: 'center'
                        }}
                    >
                        Les données sont cryptées de bout en bout. Votre profil et vos données seront visibles à vos contacts.
                    </Typography>

                    {/* Navigation Buttons */}
                    <Box
                        width="100%"
                        mt={3}
                        display="flex"
                        alignItems="center"
                        gap={15}
                        justifyContent="space-between"
                    >
                        {/* Back Button */}
                        <Box onClick={() => navigate(-1)} sx={{ cursor: 'pointer' }}>
                            <ArrowBackIcon sx={{ fontSize: 28, color: '#000' }} />
                        </Box>

                        {/* Next Button */}
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                            sx={{
                                flexGrow: 1,
                                ml: 2,
                                py: 1.2,
                                borderRadius: "25px",
                                textTransform: "lowercase",
                                fontWeight: "bold",
                                bgcolor: isFormValid ? "#63d441" : "#d3d3d3",
                                color: "#fff",
                                "&:hover": {
                                    bgcolor: isFormValid ? "#57c036" : "#d3d3d3",
                                },
                            }}
                        >
                            next
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <StepProgress currentStep={4} />
            </Box>
        </>

    );
}

export default CompleteProfile;
