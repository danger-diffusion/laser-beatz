import NextImage from 'next/image'
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

const FinishedMainQuest = () => {
    const theme = useTheme();
    return (
        <Grid sx={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ maxWidth: 200, mb: 2 }}>
            <NextImage src='/img/aurora.jpg' width='250' height='250' />
            </Box>
            <Typography variant='h5' sx={{ textAlign: 'center', mb: 2 }}>Quest abgeschlossen</Typography>
            <Typography variant='h1' sx={{ textAlign: 'center', mb: 2, color: theme.palette.primary.main }}>“Du hast dir einen Kristall verdient!“</Typography>
            <Button variant='contained' sx={{ width: '100%' }} href="/questLog">Weiter geht's!</Button>
        </Grid>
    ); 
}

export default FinishedMainQuest;