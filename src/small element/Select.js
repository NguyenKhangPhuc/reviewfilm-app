
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ handleChoosegenres, genres, setFilm, data1, setPrintgenres,setOpen }) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleDeleteall = () => {
        setFilm(data1);
        setPrintgenres([])
        setOpen(false)
    }
    return (
        <div>
            <Box sx={{ minWidth: '6vw',minHeight: '1vh' }} ></Box>
            <FormControl fullWidth style={{ backgroundColor: ' aqua', marginLeft: '2vw', border: 'none', borderRadius: '30px' }} >
                <InputLabel id="demo-simple-select-label" style={{ color: 'black', fontSize: '1vw', fontFamily: 'Source Code Pro' }}>Genres</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                    
                >
                    <MenuItem value="" style={{ color: `aqua` }} onClick={() => handleDeleteall()}>
                        <em >None</em>
                    </MenuItem>
                    <MenuItem style={{ display: 'flex', flexDirection: 'column' }}>
                        {genres?.map((genres, genresindex) => {
                            if (genresindex < 8) {
                                return (
                                    <MenuItem onClick={() => handleChoosegenres(genres.id, genres.name)}>{genres.name}</MenuItem>
                                )
                            }
                        })}
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}