import { Grid2, Stack } from "@mui/material";
import HairdresserSummary from "../../components/hairdresser/hairdresser_summary";
import HairDresserSideBio from "../../components/hairdresser/hairdresser_side_bio";
import HairdresserGallery from "../../components/hairdresser/gallery";
import { useCallback, useState } from "react";
import hairDresserList from "../../data/hairdresserList.json"


const EditHairdresserPage = () => {
    const id = JSON.parse(sessionStorage.getItem("selfId") || "0")

    const [salon, setSalon] = useState("")
    const [location, setLocation] = useState("")
    const [coordinates, setCoordinates] = useState({})
    const [stylistData, setStylistData] = useState(hairDresserList[id])
    
    const salonCheck = useCallback(() => {
        setStylistData(prevData => ({
            ...prevData,
            salon: {
                ...prevData.salon,
                name: salon
            }
        }));
    }, [salon])
   
    const locationCheck = useCallback((coordinates) => {
        setCoordinates(coordinates)
        setStylistData(prevData => ({
            ...prevData,
            salon: {
                ...prevData.salon,
                coordinates: coordinates
            }
        }));
    }, [])

    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <Stack direction="column" spacing={"1rem"}>
                    <HairdresserSummary 
                        data={stylistData} 
                        reviewNumber={0} 
                        edit={true}
                        salon={salon} 
                        setSalon={setSalon}
                        salonCheck={salonCheck}
                        location={location}
                        setLocation={setLocation}
                        locationCheck={locationCheck}
                        coordinates={coordinates}
                        setData={setStylistData}
                    />
                    <HairdresserGallery photos={stylistData.gallery}/>
                </Stack>
            </Grid2>
            <Grid2 size={3}>
                <HairDresserSideBio edit={true} data={stylistData}/>
            </Grid2>
        </Grid2>
    );
}

export default EditHairdresserPage;