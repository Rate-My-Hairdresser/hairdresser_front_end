import { Grid2 } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser_side_bio";


const HairdresserPage = () => {
    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <HairdresserSummary/>
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio/>
            </Grid2>
        </Grid2>
    )
}

export default HairdresserPage;