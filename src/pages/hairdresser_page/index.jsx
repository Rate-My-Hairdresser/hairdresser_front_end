import { Grid2, Stack } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser/hairdresser_side_bio";
import Reviews from "../../components/hairdresser/reviews"; 
import HairdresserGallery from "../../components/hairdresser/gallery";

const HairdresserPage = () => {
    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <Stack direction="column" spacing={"1rem"}>
                    <HairdresserSummary />
                    <HairdresserGallery />
                    <Reviews />
                </Stack>
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio />
            </Grid2>
        </Grid2>
    );
}

export default HairdresserPage;