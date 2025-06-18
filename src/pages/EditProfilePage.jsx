import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

const EditProfilePage = () => {
    const [profileData, setProfileData] = useState({
        name: 'LEON JUSTE IBOMBO',
        username: 'tenant',
        email: 'example@email.com'
    });

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        console.log('Profile Updated:', profileData);
        // Add your save logic here, maybe make an API call to save the data
    };

    return (
        <div className="h-screen bg-gray-100">
            <Grid container className="h-full">
                {/* Edit Form Section */}
                <Grid item xs={12} md={6} className="flex justify-center items-center p-10">
                    <Paper className="w-full p-10 shadow-xl">
                        <Typography variant="h5" className="text-center mb-6">
                            Edit Profile
                        </Typography>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="name"
                            value={profileData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="username"
                            value={profileData.username}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="email"
                            value={profileData.email}
                            onChange={handleChange}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '20px' }}
                            onClick={handleSave}
                        >
                            Save Changes
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default EditProfilePage;
