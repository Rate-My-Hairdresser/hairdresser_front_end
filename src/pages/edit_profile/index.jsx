import { Grid2, Stack } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser/hairdresser_side_bio";
import Reviews from "../../components/hairdresser/reviews/reviews"; 
import HairdresserGallery from "../../components/hairdresser/gallery";
import { useCallback, useEffect, useState } from "react";
import hairDresserList from "../../data/hairdresserList.json"
import { useLocation } from "react-router-dom";

const EditHairdresserPage = () => {

    const [salon, setSalon] = useState("")
    const [location, setLocation] = useState("")
    const [coordinates, setCoordinates] = useState({})
    const salonCheck = () => {
        setData(prevData => ({
            ...prevData,
            salon: {
                ...prevData.salon,
                name: salon
            }
        }));
    }
   
    const locationCheck = (coordinates) => {
        setCoordinates(coordinates)
        setData(prevData => ({
            ...prevData,
            salon: {
                ...prevData.salon,
                coordinates: coordinates
            }
        }));
    }

    const [data, setData] = useState({
        "id": null,
        "salon": {
            "name": "",
            "location": "",
            "coordinates": {},
            "contact": {

            }
        },
        "name": "",
        "photo": "",
        "biography": "",
        "links": {

        },
        "gallery": {

        },
        "filters": [

        ],
        "minimum_price": null,
        "maximum_price": null,
        "reviews": []
    })


    const currentHairdresser = hairDresserList[0]
    const [currentReviews, setCurrentReviews] = useState(currentHairdresser.reviews)
    const [reviewNumber, setReviewNumber] = useState(0)

    const getReviewNumber = (array) => {
        let count = 0;
        let total = 0;
        for(let i = 0; i < array.length; i++) {
            count++;
            total += array[i].rating;
        }
        return total/count;
        
    }


    //sets the amount of reviews they have
    // useEffect(() => {
    
    //     setReviewNumber(getReviewNumber(currentReviews))
        
    // }, [currentReviews])

    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <Stack direction="column" spacing={"1rem"}>
                    <HairdresserSummary 
                        data={currentHairdresser} 
                        reviewNumber={0} 
                        edit={true} 
                        salon={salon} 
                        setSalon={setSalon}
                        salonCheck={salonCheck}
                        location={location}
                        setLocation={setLocation}
                        locationCheck={locationCheck}
                        coordinates={coordinates}
                    />
                    <HairdresserGallery photos={currentHairdresser.gallery}/>
                </Stack>
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio data={currentHairdresser}/>
            </Grid2>
        </Grid2>
    );
}

export default EditHairdresserPage;