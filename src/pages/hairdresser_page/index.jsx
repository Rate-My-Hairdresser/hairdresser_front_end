import { Grid2, Stack } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser/hairdresser_side_bio";
import Reviews from "../../components/hairdresser/reviews/reviews"; 
import HairdresserGallery from "../../components/hairdresser/gallery";
import { useCallback, useEffect, useState } from "react";
import hairDresserList from "../../data/hairdresserList.json"

const HairdresserPage = () => {

    const [reviewIn, setReviewIn] = useState(false);

    const currentHairdresser = hairDresserList[1]
    const [currentReviews, setCurrentReviews] = useState(currentHairdresser.reviews)

    const [newRating, setNewRating] = useState({
        reviewUp: false,
        reviewContents: "",
        reviewPhoto: "",
        reviewRating: 0
    })

    const handleReviewSubmit = useCallback((contents, photo, rating) => {
        setNewRating({
            reviewUp: true,
            reviewContents: contents,
            reviewPhoto: photo,
            reviewRating: rating
        })
    }, [newRating])

    useEffect(() => {
        
        if(newRating.reviewUp && !reviewIn) {
            setReviewIn(true)
            setCurrentReviews((prevReviews) => [...prevReviews, {rating: newRating.reviewRating, comment: newRating.reviewContents, photo: newRating.reviewPhoto}]);
            console.log(reviewIn)
            
        }
        
    }, [newRating])

    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <Stack direction="column" spacing={"1rem"}>
                    <HairdresserSummary data={currentHairdresser}/>
                    <HairdresserGallery photos={currentHairdresser.gallery}/>
                    <Reviews reviews={currentReviews} onSubmit={handleReviewSubmit}/>
                </Stack>
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio data={currentHairdresser}/>
            </Grid2>
        </Grid2>
    );
}

export default HairdresserPage;