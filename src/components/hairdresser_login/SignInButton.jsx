import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "../../general/redux/selectors";

export default function HairDresserSignInBtn() {

    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <Button
            type={"button"}
            width={"4rem"}
            variant={"contained"}
            onClick={handleLogin}
            sx={{
                backgroundColor: "#ff6698",  // Set your desired button color
                color: "white",              // Text color
                borderRadius: "15px",        // Rounded corners
                padding: "10px",             // Adjust padding
                fontWeight: "bold",          // Make the text bold
                "&:hover": {
                    backgroundColor: "#ff4f8e",  // Change the hover background color
                },
            }}
        >
            {user.signedIn ? "Log Out" : "Log In"}
        </Button>
    );
}
