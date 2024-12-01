import { Grid2, Stack } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser/hairdresser_side_bio";
import Reviews from "../../components/hairdresser/reviews/reviews"; 
import HairdresserGallery from "../../components/hairdresser/gallery";
import { useCallback, useEffect, useState } from "react";
import hairDresserList from "../../data/hairdresserList.json"
import { useLocation } from "react-router-dom";

const HairdresserPage = () => {

    const data = useLocation().state;

    const [reviewIn, setReviewIn] = useState(false);
    
    const { state } = useLocation();
    const { browseId } = state;

    const currentHairdresser = hairDresserList[browseId];
    const [currentReviews, setCurrentReviews] = useState(currentHairdresser.reviews)
    const [reviewNumber, setReviewNumber] = useState(0)
    const [newRating, setNewRating] = useState({
        reviewUp: false,
        reviewContents: "",
        reviewPhoto: "",
        reviewRating: 0
    })

    const getReviewNumber = (array) => {
        let count = 0;
        let total = 0;
        for(let i = 0; i < array.length; i++) {
            count++;
            total += array[i].rating;
        }
        return total/count;
        
    }

    const handleReviewSubmit = useCallback((contents, photo, rating) => {
        setNewRating({
            reviewUp: true,
            reviewContents: contents,
            reviewPhoto: photo,
            reviewRating: rating
        })
    }, [])

    //setReviewNumber(getReviewNumber(currentReviews))

    useEffect(() => {
        
        if(newRating.reviewUp && !reviewIn) {
            setReviewIn(true)
            setCurrentReviews((prevReviews) => [...prevReviews, {rating: newRating.reviewRating, comment: newRating.reviewContents, photo: newRating.reviewPhoto}]);
        }
        setReviewNumber(getReviewNumber(currentReviews))
        
    }, [newRating, currentReviews, reviewIn])

    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <Stack direction="column" spacing={"1rem"}>
                    <HairdresserSummary data={currentHairdresser} reviewNumber={reviewNumber} state={data}/>
                    <HairdresserGallery photos={currentHairdresser.gallery}/>
                    <Reviews reviews={currentReviews} onSubmit={handleReviewSubmit}/>
                </Stack>
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio data={currentHairdresser} browseId={browseId} />
            </Grid2>
        </Grid2>
    );
}

export default HairdresserPage;