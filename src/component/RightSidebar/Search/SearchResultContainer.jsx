import {Box, Paper, Typography} from "@mui/material";
import {HorizontalRule} from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
const SearchResultContainer = ({searchWord, children}) => {
    return (
        <Paper
            elevation={2}
            sx={{
                height: 'fit-content',
                width: '92%',
                borderRadius: 1,
                padding: 1.25,
                transition: 'all 0.3s ease',
                marginTop: 2,
                marginRight: 10,
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'rgb(197, 207, 217)',
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
                        fontSize: '14px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
                        fontWeight: 600,
                        wordWrap: 'break-word',
                        overflow: 'hidden',
                        width: '100%'
                    }}
                >
                    Search for &#34;{searchWord}&#34;
                </Typography>

                <HorizontalRule
                    sx={{
                        marginTop: '10px',
                        mx: -1.25,
                        color: 'rgb(212,217,225)',
                        width: '109%',
                        height: '1.1px',
                        backgroundColor: 'rgb(212,217,225)',
                    }}
                />
            </Box>
            <Box>{children}</Box>
        </Paper>
    )
}

export default SearchResultContainer;