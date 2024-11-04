import { Grid2 } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser/hairdresser_side_bio";
import Reviews from "../../components/hairdresser/reviews"; // Adjust the path as necessary

const HairdresserPage = () => {
    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <HairdresserSummary />
                <Reviews /> {/* Add the Reviews component here */}
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio />
            </Grid2>
        </Grid2>
    );
}

export default HairdresserPage;
