import { Grid2, Typography } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser_side_bio";

const HairdresserFrontPage = () => {
    return (
        <Grid2 container spacing={2} margin={7}>
            <Grid2 size="grow">
            </Grid2>
            <Grid2 size={5}>
                <Typography
                    component="h1"
                    variant="h2"
                    sx={{ width: '100%', fontSize: 'clamp(3rem, 10vw, 2.15rem)' }}
                >
                    Rate My Hairdresser
                </Typography>
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio/>
            </Grid2>
            <Grid2 size="grow">
            </Grid2>
        </Grid2>
    )
}

export default HairdresserFrontPage;