import {Box, Grid2} from '@mui/material';
import LeftSidebar from "../component/LeftSidebar/LeftSidebar.jsx";
import RightSidebar from "../component/RightSidebar/RightSidebar.jsx";

function HomePage() {
    return (
        <Grid2
            id="layout-grid-top"
            container
            spacing={2}
            sx={{
                marginTop: '20px',
                width: '100%',
                minHeight: '100vh',
                display: 'grid',
                gridTemplateColumns: '2fr 3fr 2fr'
            }}
        >
            <Grid2 item="true">
                <Box>
                    <LeftSidebar/>
                </Box>
            </Grid2>
            <Grid2 item="true">
                <Box>

                </Box>
            </Grid2>
            <Grid2 item="true">
                <Box>
                    <RightSidebar/>
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default HomePage;