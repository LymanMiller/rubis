import React, { useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import StepProgress from "../components/stepProgress";
import { Link } from "react-router-dom";

export default function AuthenticateCode() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);
    const [focusedIndex, setFocusedIndex] = useState(null);

    const handleChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 3) {
                inputsRef.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
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

                {/* OTP Fields */}
                <Box display="flex" gap={2} mt={3}>
                    {otp.map((digit, i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            onFocus={() => setFocusedIndex(i)}
                            onBlur={() => setFocusedIndex(null)}
                            ref={(el) => (inputsRef.current[i] = el)}
                            style={{
                                width: 48,
                                height: 48,
                                textAlign: "center",
                                fontSize: 20,
                                border: "2px solid",
                                borderColor:
                                    focusedIndex === i
                                        ? "#63d441" // green border on focus
                                        : digit
                                            ? "#ccc" // gray border if filled
                                            : "#ddd", // light gray default
                                borderRadius: 6,
                                outline: "none",
                            }}
                        />
                    ))}
                </Box>

                {/* Footer */}
                <Box display="flex" flexDirection="column" alignItems="center" mt={4} gap={1}>
                    <Typography color="textSecondary">Send again?</Typography>
                    <Link to={"/startProfile"}>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#63d441",
                                borderRadius: "9999px",
                                px: 4,
                                py: 1,
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#57bd39",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Link>
                </Box>
            </Box>

            {/* Step Progress Bar */}
            <StepProgress currentStep={3} />
        </>
    );
}
