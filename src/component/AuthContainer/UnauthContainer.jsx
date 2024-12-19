import {Avatar, Box, Button, Grid2} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RocketIcon from "@mui/icons-material/Rocket";
import {useState} from "react";
import {Link} from "react-router-dom";

export function UnauthContainer() {
    const [hover, setHover] = useState(false);
    return(
        <Grid2 container justifyContent="right">
            <Box
                sx={{
                    minWidth: '200px',
                    maxWidth: '200px',
                }}
            >
                <Link to="/"
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                >
                    <Avatar>
                        {hover ? <RocketLaunchIcon/> : <RocketIcon/>}
                    </Avatar>
                </Link>
                <h2>Participate in discussion</h2>
                <Box>
                    <Link to="/signup">
                        <Button variant="contained"
                                size="small"
                                sx={{
                                    minWidth: '75px',
                                    maxWidth: '75px',
                                    minHeight: '35px',
                                    maxHeight: '35px',
                                    marginLeft: '5px',
                                    fontFamily: 'Aria',
                                    color: 'white',
                                    backgroundColor: '#007bff',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                }}
                        >
                            Sign up
                        </Button>
                    </Link>
                    <Link to="/signin">
                        <Button variant="contained"
                                size="small"
                                sx={{
                                    minWidth: '75px',
                                    maxWidth: '75px',
                                    minHeight: '35px',
                                    maxHeight: '35px',
                                    marginLeft: '5px',
                                    fontFamily: 'Aria',
                                    color: 'black',
                                    backgroundColor: '#a3a3a3',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                }}
                        >
                            Sign in
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Grid2>
    )
}