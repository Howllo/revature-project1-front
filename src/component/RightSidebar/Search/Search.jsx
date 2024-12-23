import {Box, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import {useState} from "react";
import SearchResultContainer from "./SearchResultContainer.jsx";

function Search() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    const handleClear = () => {
        setSearchTerm('')
    }

    return (
        <Box sx={{
            minHeight: '100vh',
            width: '250px',
            margin: 0,
            padding: 0
        }}>
            <Box
                sx={{
                    width: '100%',
                    alignItems: 'left',
                }}
            >
                <OutlinedInput
                    sx={{
                        '& .MuiInputBase-input::placeholder': {
                            color: 'hsl(211, 20%, 53%)',
                            opacity: 1
                        },
                        backgroundColor: 'rgb(241, 243, 245)',
                        height: '43px',
                        width: '100%',
                        borderColor: 'none'
                    }}
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Search"
                    onChange={(e)=>handleSubmit(e)}
                    value={searchTerm}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="clear text"
                                onClick={handleClear}
                                edge="end"
                                size="small"
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                {
                                    searchTerm !== '' ? <CancelIcon /> : null
                                }
                            </IconButton>
                        </InputAdornment>
                    }
                />

                {
                    searchTerm !== '' ? <SearchResultContainer searchWord={searchTerm}/> : null
                }

            </Box>
        </Box>
    )
}

export default Search