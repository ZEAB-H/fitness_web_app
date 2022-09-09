import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const HeroBanner= () =>{
    return(
        <Box sx={{
            mt:{lg:'212px', xs:'70px'},
            ml:{sm:'50px'}
        }} position="relative" p="20px">
            <Typography color="#FF2625" fontweight="600" fontsize="26px">
                Fitness Club
            </Typography>
            <Typography fontweight={700} sx={{fontsize: {lg:'44px',xs:'40px'}}}>
                Sweat, Smile <br/> and Repeat
            </Typography>
            <Typography fontsize="22px" lineHeight="35px">
                Checkout the most effective exercises
            </Typography>

        </Box>
    )
}

export default HeroBanner