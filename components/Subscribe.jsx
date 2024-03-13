"use client"
import { useState } from 'react';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #ffffff',
            borderRadius: '10px'
        },
        '&:hover fieldset': {
            border: '2px solid #ffffff',
            borderRadius: '10px'
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #ffffff',
            borderRadius: '10px'
        },
    },
    '& input': {
        fontSize: '16px',
        padding: '15px 20px',
        borderRadius: '10px'
    },
    'input': {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#ffffff'
        }
    }
}));


const Subscribe = () => {
    const [checked, setChecked] = useState(true);
    const [name, setName] = useState('Cat in the Hat');

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <section className='subscribe-bg'>
            <Container maxWidth="lg">
                <Box className="text-center">
                    <h4 className='sub-heading'>Subscribe to Get Deals on Bookings</h4>
                    <p className='sub-desc'>Signup & get Discount Updates on Every Bookings</p>
                    <br />
                    <Box sx={{ marginBottom: '20px' }}>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    color: '#ffffff'
                                }
                            }}
                        />
                        <span className='sub-accept mb-4'>I Accept to Receive the offers & Discounts from Caterings&Tiffins.com</span>
                    </Box>

                    <Container maxWidth="md" >
                        <Stack direction="row" justifyContent="center">
                            <Stack direction={{ xs: 'column', sm: 'column', md: "row" }} justifyContent="center" alignItems="center" className='subscribe-input'>

                                <CssTextField
                                    id="outlined-number"
                                    variant="outlined"
                                    label="Enter Email ID"
                                    className='mt-0'
                                    style={{ width: '75%' }}
                                    InputLabelProps={{
                                        style: { color: '#ffffff' },
                                    }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '8px'
                                        }
                                    }}
                                />
                                <Button variant="contained" sx={{
                                    backgroundColor: '#c33332', padding: '10px 30px',
                                    fontSize: '16px', fontWeight: '600', textTransform: 'capitalize', marginLeft: '10px',
                                    borderRadius: '10px', '&:hover': {
                                        backgroundColor: '#c33332',
                                    }
                                }}>Sign Up</Button>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </Container>
        </section>
    )
}

export default Subscribe