import { Grid2, Stack } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser/hairdresser_side_bio";
import Reviews from "../../components/hairdresser/reviews/reviews"; 
import HairdresserGallery from "../../components/hairdresser/gallery";
import { useState } from "react";
import hairDresserList from "../../data/hairdresserList.json"

const HairdresserPage = () => {

    const [newRating, setNewRating] = useState({
        reviewUp: false,
        reviewContents: "",
        reviewPhoto: "",
        reviewRating: 0
    })

    const currentHairdresser = hairDresserList[1]

    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <Stack direction="column" spacing={"1rem"}>
                    <HairdresserSummary data={currentHairdresser}/>
                    <HairdresserGallery photos={currentHairdresser.gallery}/>
                    <Reviews reviews={currentHairdresser.reviews}/>
                </Stack>
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio data={currentHairdresser}/>
            </Grid2>
        </Grid2>
    );
}

export default HairdresserPage;