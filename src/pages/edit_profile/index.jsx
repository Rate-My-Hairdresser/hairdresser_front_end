import { Grid2, Stack } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser/hairdresser_side_bio";
import HairdresserGallery from "../../components/hairdresser/gallery";
import { useCallback, useState } from "react";
import hairDresserList from "../../data/hairdresserList.json"


const EditHairdresserPage = () => {

    const [salon, setSalon] = useState("")
    const [location, setLocation] = useState("")
    const [coordinates, setCoordinates] = useState({})
    const salonCheck = useCallback(() => {
        setData(prevData => ({
            ...prevData,
            salon: {
                ...prevData.salon,
                name: salon
            }
        }));
    }, [salon])
   
    const locationCheck = useCallback((coordinates) => {
        setCoordinates(coordinates)
        setData(prevData => ({
            ...prevData,
            salon: {
                ...prevData.salon,
                coordinates: coordinates
            }
        }));
    }, [])

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
    console.log(data)

    const currentHairdresser = hairDresserList[0]

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