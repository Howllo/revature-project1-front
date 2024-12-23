import { Box, Grid2 } from '@mui/material';
import RightSidebar from "../component/RightSidebar/RightSidebar.jsx";
import {Navbar} from "../component/LeftSidebar/Navbar/Navbar.jsx";
import FAB_ScrollReset from "../component/LeftSidebar/AuthContainer/FAB_ScrollReset.jsx";

function HomePage() {
    return (
        <Box
            sx={{
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: 'white',
            }}
        >
            <Grid2
                container
                sx={{
                    height: '100%',
                    display: 'grid',
                    gridTemplateColumns: '2fr 3fr 2fr',
                    gap: '16px',
                    padding: '20px',
                    boxSizing: 'border-box',
                }}
            >
                <Grid2
                    sx={{
                        height: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <Navbar />
                    <FAB_ScrollReset/>
                </Grid2>
                <Grid2
                    sx={{
                        height: '100%',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}
                >
                    <Box>
                        {/* Main content */}
                    </Box>
                </Grid2>
                <Grid2
                    sx={{
                        height: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <RightSidebar />
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default HomePage;