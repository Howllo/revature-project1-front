import {Box, Paper, Typography} from "@mui/material";

// eslint-disable-next-line react/prop-types
const SearchResultContainer = ({searchWord, children}) => {
    return (
        <Paper
            elevation={3}
            sx={{
                height: 'fit-content',
                width: '93%',
                borderRadius: 1,
                padding: 1,
                transition: 'all 0.3s ease',
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                borderColor: '#007bff',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        wordWrap: 'break-word',
                        overflow: 'hidden',
                        width: '100%'
                    }}
                >
                    Search for &#34;{searchWord}&#34;
                </Typography>
                <hr/>
            </Box>
            <Box>{children}</Box>
        </Paper>
    )
}

export default SearchResultContainer;