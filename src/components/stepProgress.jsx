import React from 'react';
import { Box, Typography } from '@mui/material';

const StepProgress = ({ currentStep, totalSteps = 4 }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
            <Box display="flex" gap={2}>
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const step = index + 1;
                    const isActive = step === currentStep;

                    return (
                        <Box
                            key={step}
                            sx={{
                                width: isActive ? 40 : 12,
                                height: 12,
                                borderRadius: 6,
                                bgcolor: isActive ? '#63d441' : '#ddd',
                                transition: 'all 0.3s ease',
                            }}
                        />
                    );
                })}
            </Box>

            <Typography variant="body2" color="text.secondary" mt={1}>
                {currentStep} — {totalSteps}
            </Typography>
        </Box>
    );
};

export default StepProgress;
