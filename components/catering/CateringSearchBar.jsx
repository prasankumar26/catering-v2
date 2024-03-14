"use client"
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DatePickerSearch from '../search/DatePickerSearch';
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import DatePickerSearchOrange from '../search/DatePickerSearchOrange';


const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #C33332',
        },
        '&:hover fieldset': {
            border: '2px solid #C33332',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #C33332',
        },
    },
    '& input': {
        border: 'none',
        fontSize: '15px',
        padding: '13.2px 20px',
    },
}));

const CateringSearchBar = () => {
    const [isAdornmentClicked, setIsAdornmentClicked] = useState(false);

    return (
        <>
            <form>
                <Stack className='search-bg'  direction={{ xs: 'column', sm: 'column', md: 'column', lg:"row" }} justifyContent="space-between" spacing={1}>
                    <div className='w-100'>
                        <CssTextField
                            id="outlined-number"
                            placeholder="Enter your location..."
                            variant="outlined"
                            label="Enter your location..."
                            className='mt-0'
                            style={{ width: '100%' }}
                            InputLabelProps={{
                                style: { color: '#777777', fontSize: '14px' },
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: '0px',
                                    backgroundColor: '#f4f4fc6b'
                                },
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        onClick={() => setIsAdornmentClicked(true)}
                                    >
                                        <MyLocationIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="w-100">
                      <DatePickerSearch /> 
                    </div>
                    <div className="three w-100">
                        <CssTextField
                            id="outlined-number"
                            placeholder="How many people are attending?"
                            variant="outlined"
                            label="How many people are attending?"
                            className='mt-0'
                            style={{ width: '100%' }}
                            InputLabelProps={{
                                style: { color: '#777777',  fontSize: '14px' },
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: '0px',
                                    backgroundColor: '#f4f4fc6b',
                                }
                            }}
                        />
                    </div>
                    <div>
                        <Link href="/catering-search">
                            <Button className='red-btn' variant="contained" sx={{
                                width: '100%', fontWeight: '600', padding: '10px 20px', fontSize: '14px', backgroundColor: '#C33332', textTransform: 'capitalize', '&:hover': {
                                    backgroundColor: '#C33332',
                                },
                            }}>
                                <SearchIcon style={{ marginRight: '5px', fontSize: '18px' }} /> Search
                            </Button>
                        </Link>
                    </div>
                </Stack>
            </form >
        </>
    )
}

export default CateringSearchBar;