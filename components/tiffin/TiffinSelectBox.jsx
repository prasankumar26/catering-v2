"use client"
import { useState } from "react";
import { Select, MenuItem, FormControl, Stack, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReactSelectTiffin from "./ReactSelectTiffin";


const CssSelect = styled(Select)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #d9822b',
        },
        '&:hover fieldset': {
            border: '2px solid #d9822b',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #d9822b',
            outline: 'none',
        },
    },
    '& .MuiSelect-select:focus': {
        backgroundColor: 'transparent',
    },
    '& input': {
        border: '2px solid #d9822b',
        fontSize: '16px',
        padding: '0px 20px',
    },

}));




const TiffinSelectBox = ({ catering }) => {

    const [sortBy, setSortBy] = useState('');

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };


    return (
        <>
            <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={2} style={{ margin: '10px 0px 15px 0px' }}>
              <ReactSelectTiffin text1="Sort by" /> 
                <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={2}>
                    <Button size="small" className={'btn-pill btn-pill-active-catering'}>All Caterers</Button>
                    <Button size="small" className="btn-pill" style={{ color: '#d9822b', fontSize: '12px' }}>Branded Caterers</Button>
                    <Button size="small" className="btn-pill" style={{ color: '#d9822b', fontSize: '12px' }}>Popular Caterers</Button>
                    <Button size="small" className="btn-pill tablet-hide" style={{ color: '#d9822b', fontSize: '12px' }}>Recommended Caterers</Button>
                </Stack>
            </Stack>

        </>
    )
}

export default TiffinSelectBox;
