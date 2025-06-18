import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StepProgress from "../components/stepProgress";
import { useNavigate } from "react-router-dom";

const StartProfile = () => {
    const [image, setImage] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    const isFormValid = firstName.trim() !== "" && lastName.trim() !== "";

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="h-[90vh] flex flex-col justify-center">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    p={4}
                    width="100%"
                    maxWidth={350}
                    mx="auto"
                >
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Complete your account
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Add your image
                    </Typography>

                    <Box position="relative" my={2}>
                        <Avatar
                            src={image || ""}
                            sx={{ width: 100, height: 100, bgcolor: "#e0e0e0" }}
                        >
                            {!image && <PersonOutlineIcon fontSize="large" />}
                        </Avatar>

                        <input
                            accept="image/*"
                            type="file"
                            id="upload-image"
                            hidden
                            onChange={handleImageChange}
                        />
                        <label htmlFor="upload-image">
                            <IconButton
                                component="span"
                                size="small"
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    bgcolor: "#fff",
                                    boxShadow: 1,
                                }}
                            >
                                <PhotoCameraIcon fontSize="small" />
                            </IconButton>
                        </label>
                    </Box>

                    <Box width="100%" mt={2}>
                        <TextField
                            label="Firstname"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Lastname"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Box>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                        align="center"
                        mt={3}
                    >
                        Les données sont cryptées de bout en bout. Votre profil et vos données
                        seront visible à vos contacts.
                    </Typography>

                    <Box width="100%" mt={3}>
                        <Button
                            variant="contained"
                            fullWidth
                            disabled={!isFormValid}
                            onClick={() => {
                                if (isFormValid) {
                                    navigate('/completeProfile');
                                }
                            }}
                            sx={{
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
            </div>
            <div className="flex justify-center">
                <StepProgress currentStep={4} />
            </div>
        </div>
    );
};

export default StartProfile;
