import { OutlinedInput, Box } from "@mui/material";

export const PostTextField = () => {
    const handleEmailChange = (e) => {
        console.log("handleEmailChange", e);
    }

    return (
        <Box>
            <OutlinedInput
                multiline={true}
                type="text"
                className="text"
                onChange={(e) => handleEmailChange(e)}
                placeholder="What's up?"
                sx={{
                    mt: '-5px',
                    fontSize: "18px",
                    minHeight: '40px',
                    marginLeft: '20px',
                    borderColor: "transparent",
                    maxWidth: '500px',
                    width: '400px',
                    overflowInline: 'auto',
                    '& fieldset': { border: 'none' },
                }}
            />
        </Box>
    );
};

export default PostTextField;